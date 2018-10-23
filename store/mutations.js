export default {
  plantData(state, plantData) {
    state.plantData = plantData;
  },

  saveError(state, error) {
    state.error = error; // Enregistre l'erreur dans le state
  },

  setToken(state, token) {
    state.token = token;
  },
  removeToken(state){
    state.token = null;
  }
}
