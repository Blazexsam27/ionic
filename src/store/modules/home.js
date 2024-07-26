import catalogService from "@/services/Catalog/catalog.service";

const state = {
  bundleCardBriefs: [],
  homePageCards: [],
  galleryPageCards: [],
  loading: false,
  error: null,
};

const mutations = {
  setBundleCardBreifs() {},
  // gets all the required cards which are to be shown on homepage
  setHomePageCards(state, items) {
    state.homePageCards = items;
  },
  setGalleryPageCards(state, items) {
    state.galleryPageCards = items;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setError(state, error) {
    state.error = error;
  },
};

const actions = {
  setBundleCardBreifs({ commit }) {
    commit("setBundleCardBreifs");
  },
  // gets all the required cards which are to be shown on homepage
  async setHomePageCards({ commit }, filter) {
    commit("setLoading", true);
    commit("setError", null);
    try {
      const response = await catalogService.getWebsites(filter);
      commit("setHomePageCards", response.result);
    } catch (error) {
      commit("setError", error);
    } finally {
      commit("setLoading", false);
    }
  },
  // get gallary cards
  async setGalleryPageCards({ commit }) {
    commit("setLoading", true);
    commit("setError", null);
    try {
      const response = await catalogService.getWebsites();
      commit("setGalleryPageCards", response.result);
    } catch (error) {
      commit("setError", error);
    } finally {
      commit("setLoading", false);
    }
  },
};

const getters = {
  getBundleCardBreifs: (state) => state.bundleCardBriefs,
  homePageCards: (state) => state.homePageCards,
  error: (state) => state.error,
  loading: (state) => state.loading,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
