/* eslint-disable import/no-anonymous-default-export */
import { get, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    videos: [],
    dashboard: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setVideos(state, payload) {
      return { ...state, videos: payload };
    },
    setDashboard(state, payload) {
      return { ...state, dashboard: payload };
    },
  },

  effects: (dispatch) => ({
    async loadVideos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.videos);
        if (response && response.status === 200) {
          //          await this.setvideos(response)
          this.setVideos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async getDashboard(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.dashboard);
        if (response && response.status === 200) {
          this.setDashboard(response.data)
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirVideo(payload, state) {
      console.log(payload);
      try {
        //this.setLoading(true);
        const { nome, link } = payload;
        console.log(payload);
        const response = await post(replaceUrls(apiUrls.inserirVideo), {
          nome,
          link,
        });
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
