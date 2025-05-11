import catalogService from "@/services/Catalog/catalog.service";

const state = {
  bundleCardBriefs: [],
  homePageCards: [],
  galleryPageCards: [],
  dashboardCards: [],
  landingPageCards: [],
  portfolioCards: [],
  otherCards: [],
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

  setCardsByCategory(state, items) {
    items.map((item) => {
      switch (item.websiteCategory.toLowerCase()) {
        case "landing page":
          state.landingPageCards.push(item);
          break;
        case "portfolio":
          state.portfolioCards.push(item);
          break;
        case "dashboard":
          state.dashboardCards.push(item);
          break;
        default:
          state.otherCards.push(item);
          break;
      }
    });
  },

  setCardsByWebsiteCategoryFilter(state, items) {
    state.galleryPageCards = items;
  },

  setCardsByFrameworkFilter(state, items) {
    state.galleryPageCards = items;
  },

  setCardsByDesignSystemFilter(state, items) {
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
  async setGalleryPageCards({ state, commit }, filter) {
    commit("setLoading", true);
    commit("setError", null);
    try {
      if (state.homePageCards.length === 0) {
        const response = await catalogService.getWebsites(filter);
        commit("setGalleryPageCards", response.result);
      } else {
        commit("setGalleryPageCards", state.homePageCards);
      }
    } catch (error) {
      commit("setError", error);
    } finally {
      commit("setLoading", false);
    }
  },

  // filter the gallery cards as per active website category filter(s)
  setCardsByWebsiteCategoryFilter({ state, commit }, filter) {
    const filtered = state.homePageCards.filter((item) =>
      item.websiteCategory.includes(filter)
    );
    commit("setCardsByWebsiteCategoryFilter", filtered);
  },

  // filter gallery cards as per website framework
  setCardsByFrameworkFilter({ state, commit }, filter) {
    const filtered = state.homePageCards.filter((item) =>
      item.techUsed.includes(filter)
    );
    commit("setCardsByFrameworkFilter", filtered);
  },

  // filter gallery cards as per design system used
  setCardsByDesignSystemFilter({ state, commit }, filter) {
    const filtered = state.homePageCards.filter((item) =>
      item.fileData.selectedCategory.includes(filter)
    );
    commit("setCardsByDesignSystemFilter", filtered);
  },
};

const getters = {
  getBundleCardBreifs: (state) => state.bundleCardBriefs,
  homePageCards: (state) => state.homePageCards,
  galleryPageCards: (state) => state.galleryPageCards,
  getDashboardCards: (state) => state.dashboardCards,
  getLandingPageCards: (state) => state.landingPageCards,
  getPortfolioCards: (state) => state.portfolioCards,
  getOtherCards: (state) => state.otherCards,
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
