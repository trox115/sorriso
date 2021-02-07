/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    consultas: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setConsultas(state, payload) {
      console.log(payload);
      return { ...state, consultas: payload };
    },
  },

  effects: (dispatch) => ({
    async loadConsultas(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.consultas);
        if (response && response.status === 200) {
          //          await this.setConsultas(response)
          this.setConsultas(response.data);
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
        console.log(payload);
        const response = await patch(
          replaceUrls(apiUrls.editarConsulta, { id }),
          { nome, quantidade, custo }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirConsulta(payload, state) {
      console.log(payload);
      try {
        //this.setLoading(true);
        const { servico_id, cliente_id } = payload;
        console.log(payload);
        const response = await post(replaceUrls(apiUrls.inserirConsulta), {
          cliente_id,
          servico_id,
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
