export const UserModule = {
  namespased: true,

  state: {
    user: null,
  },
  // Mutations are functions that effect the state
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  // Actions are functions you call throughout application that call mutations
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
