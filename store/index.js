import Vuex from 'vuex'

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from  "./actions";

const createStore = () => {
  // noinspection JSValidateTypes
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
};

export default createStore
