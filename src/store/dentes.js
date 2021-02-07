/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    dentes: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setdentes(state, payload) {
      return { ...state, dentes: payload };
    },
  },

  effects: (dispatch) => ({
    async loadDentes(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.dentes);
        if (response && response.status === 200) {
          //          await this.setdentes(response)
          this.setdentes(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
