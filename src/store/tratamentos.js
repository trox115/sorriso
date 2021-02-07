/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    tratamentos: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setTratamentos(state, payload) {
      return { ...state, tratamentos: payload };
    },
  },

  effects: (dispatch) => ({
    async loadTratamentos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.tratamentos);
        if (response && response.status === 200) {
          //          await this.setTratamentos(response)
          this.setTratamentos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarConsultas(payload, state) {
      try {
        //this.setLoading(true);
        const { id, nome, quantidade, custo } = payload;
        // if (response && response.status === 200) {
        // }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirTratamentos(payload, state) {
      try {
        //this.setLoading(true);
        const { id, cliente_id, estado } = payload;
        const response = await post(replaceUrls(apiUrls.inserirTratamento), {
          cliente_id,
          estado,
          dente_id: id,
        });
        if (response && response.status === 200) {
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
