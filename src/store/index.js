import { createStore } from "vuex";
import { UserModule } from "./User";

export default createStore({
  state: {},
  // Mutations are functions that effect the state
  mutations: {},
  // Actions are functions you call throughout application that call mutations
  actions: {},

  modules: {
    User: UserModule,
  },
});
