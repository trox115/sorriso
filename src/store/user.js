/* eslint-disable import/no-anonymous-default-export */
import { get, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    user: {},
  },

  reducers: {
    loaded: (state, payload) => payload,
    setAuth(state, payload) {
      return { user: payload };
    },
  },
  
  effects: (dispatch) => ({
    async logIn(payload, state) {
      try {
        //this.setLoading(true);
        const { email, password } = payload;
        const response = await post(replaceUrls(apiUrls.login), {
          email,
          password,
        });
        if (response && response.status === 201) {
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('token', response.data.authentication_token);
          await this.setAuth(response.data);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    
    async logOut(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.logout);
        if (response && response.status === 201) {
          await this.setAuth({});
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
