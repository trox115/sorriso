/* eslint-disable import/no-anonymous-default-export */

export default {
  state: {
    loading: false
  },

  reducers: {
    loaded: (state, payload) => payload,
    setLoading(state, payload) {
      return { ...state, loading: payload };
    },
  },

  effects: (dispatch) => ({
    enableLoading() {
      dispatch.loading.setLoading(true);
    },

    disableLoading() {
      dispatch.loading.setLoading(false);
    },
    
})
};
