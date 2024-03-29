import axiosi from "./api";
import endpoints from "./endpoints";

const Cookie = process.client ? require('js-cookie') : undefined;
const cookieparser = process.server ? require('cookieparser') : undefined;

export default {

  nuxtServerInit({ commit }, { req, res, app }) {
    let auth = null;
    let hasplant = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
        auth = parsed.token;
        hasplant = parsed.hasplant;
    }
    commit('setToken', auth);
    commit('hasplant', hasplant)
  },

  //---------------------Recupération des données---------------------//

  async getPlantData({commit, dispatch, app}, ctx) {
    axiosi.defaults.headers.common['x-access-token'] = this.state.token;
    await axiosi.get(endpoints.now)
      .then(function (response) {
        commit("plantData", response.data);
      })
      .catch(function (error) {
        console.log(error.response);
        if(!error.response.data.auth){
          ctx.app.$cookies.remove('token');
          ctx.app.$cookies.remove('hasplant');
          ctx.redirect('/connexion')
        }
    });
    axiosi.defaults.headers.common['x-access-token'] = null;
  },

  // Données sur une semaine

  async getPlantDataWeek({commit, dispatch}, ctx) {
    this.state.plantData = null;
    axiosi.defaults.headers.common['x-access-token'] = this.state.token;
    await axiosi.get(endpoints.week)
      .then(function (response) {
        commit("plantData", response.data);
      })
      .catch(function (error) {
        console.log(error.response);
        if(!error.response.data.auth){
          ctx.app.$cookies.remove('token');
          ctx.app.$cookies.remove('hasplant');
          ctx.redirect('/connexion')
        }
      });
    axiosi.defaults.headers.common['x-access-token'] = null;
  },

  // Données sur 3 jours

  async getPlantDataThreeDays({commit, dispatch}, ctx) {
    this.state.plantData = null;
    axiosi.defaults.headers.common['x-access-token'] = this.state.token;
    await axiosi.get(endpoints.threeday)
      .then(function (response) {
        commit("plantData", response.data);
      })
      .catch(function (error) {
        console.log(error.response);
        if(!error.response.data.auth){
          ctx.app.$cookies.remove('token');
          ctx.app.$cookies.remove('hasplant');
          ctx.redirect('/connexion')
        }
      });
    axiosi.defaults.headers.common['x-access-token'] = null;
  },

  // Données sur 1 jour

  async getPlantDataDay({commit, dispatch}, ctx) {
    this.state.plantData = null;
    axiosi.defaults.headers.common['x-access-token'] = this.state.token;
    await axiosi.get(endpoints.oneday)
      .then(function (response) {
        commit("plantData", response.data);
      })
      .catch(function (error) {
        console.log(error.response);
        ctx.app.$cookies.remove('token');
        ctx.app.$cookies.remove('hasplant');
        ctx.redirect('/connexion')
      });
    axiosi.defaults.headers.common['x-access-token'] = null;
  },

  //---------------------Connexion---------------------//

  async connectUser({commit}, payload) {
    await axiosi.post(endpoints.auth, {email: payload.mail, password: payload.password})
          .then(function (response) {
        if (response.data.auth) {
          commit("setToken", response.data.token);
          Cookie.set('token', response.data.token);
          $nuxt.$router.push('/DashHome');
        }
        if (response.data.hasplant) {
          commit("hasplant", "true");
          Cookie.set('hasplant', "true");
          $nuxt.$router.push('/Dashboard/Home');
        }
      })
      .catch(function (error) {
        commit("saveError", error.response.data.message) // Envoi de l'erreur à la mutation saveError
      });
  },

  //---------------------Inscription---------------------//

  async inscriUser({commit}, payload) {
    await axiosi.post(endpoints.register, {firstname: payload.firstname, lastname: payload.lastname, username: payload.username, email: payload.email, password: payload.password})
      .then(function (response) {
        if (response.data.auth) {
          commit("setToken", response.data.token);
          Cookie.set('token', response.data.token);
          $nuxt.$router.push('/Dashboard/Home');
        }
      })
      .catch(function (error) {
        commit("saveError", error.response.data.errors) // Envoi de l'erreur à la mutation saveError
      });
  },

  //---------------------Demande de mot de passe---------------------//

  async resetPassword({commit}, payload) {
    commit("cleanState");
    await axiosi.post(endpoints.resetpassword, {email: payload.email})
      .then(function (response) {
        if (response.data.send) {
          commit("setSuccessMessage", response.data.message);
        }
      })
      .catch(function (error) {
        commit("saveError", error.response.data.message) // Envoi de l'erreur à la mutation saveError
      });
  },

  //---------------------Changer de mot de passe---------------------//

  async newPassword({commit}, payload) {
    commit("cleanState");
    console.log(payload.resettoken);
    axiosi.defaults.headers.common['x-reset-token'] = payload.resettoken;
    await axiosi.post(endpoints.newpassword, {newpassword: payload.newpassword})
      .then(function (response) {
        if (response.data.reset) {
          commit("setSuccessMessage", response.data.message);
        }
      })
      .catch(function (error) {
        commit("saveError", error.response.data.message) // Envoi de l'erreur à la mutation saveError
      });
    axiosi.defaults.headers.common['x-reset-token'] = null;
  },


}
