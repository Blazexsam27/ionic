const state = {
  bundleCardBriefs: [],
};

const mutations = {
  setBundleCardBreifs() {},
};

const actions = {
  setBundleCardBreifs({ commit }) {
    commit("setBundleCardBreifs");
  },
};

const getters = {
  getBundleCardBreifs: (state) => state.bundleCardBriefs,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
