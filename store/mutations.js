export default {
  plantData(state, plantData) {
    state.plantData = plantData;
  },

  saveError(state, error) {
    state.error = error; // Enregistre l'erreur dans le state
  },

  hasplant(state, hasplant) {
    state.hasplant = hasplant;
  },

  setToken(state, token) {
    state.token = token;
  },
  removeToken(state){
    state.token = null;
  },
  removePlant(state){
    state.hasplant = null;
  }
}
