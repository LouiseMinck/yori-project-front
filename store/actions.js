import axiosi from "./api";
import endpoints from "./endpoints";
import qs from "qs";

const Cookie = process.client ? require('js-cookie') : undefined;
const cookieparser = process.server ? require('cookieparser') : undefined;

export default {
  nuxtServerInit({ commit }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
        auth = parsed.token
    }
    commit('setToken', auth)
  },
  async getPlantData({commit}) {
    axiosi.defaults.headers.common['x-access-token'] = this.state.token;
    await axiosi.get(endpoints.week)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error.response)
    })
  },
  async connectUser({commit}, payload) {
    await axiosi.post(endpoints.auth, qs.stringify({email: payload.mail, password: payload.password}))
      .then(function (response) {
        if (response.data.auth) {
          commit("setToken", response.data.token);
          Cookie.set('token', response.data.token);
          $nuxt.$router.push('/DashHome');
        }
      })
      .catch(function (error) {
        commit("saveError", error.response.data.message) // Envoi de l'erreur à la mutation saveError
      });
  },
  async inscriUser({commit}, payload) {
    console.log(payload);
    await axiosi.post(endpoints.register, qs.stringify({firstname: payload.firstname, lastname: payload.lastname, username: payload.username, email: payload.email, password: payload.password}))
      .then(function (response) {
        if (response.data.auth) {
          commit("setToken", response.data.token);
          Cookie.set('token', response.data.token);
          $nuxt.$router.push('/test');
        }
      });
  }
}
