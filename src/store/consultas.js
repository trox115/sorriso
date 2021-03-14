/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    consultas: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setConsultas(state, payload) {
      return {
        ...state,
        consultas: payload,
      };
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
        const { id, pagamento } = payload;
        const response = await patch(
          replaceUrls(apiUrls.editarConsulta, { id }),
          { consulta:{ pagamento } }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirBocaToda(payload, state) {
      try {
        //this.setLoading(true);
        const { cliente_id, servico_id, obs } = payload;
        console.log(payload);
        const response = await post(
          replaceUrls(apiUrls.inserirBocaToda),
          { consulta:{ cliente_id, servico_id, obs } }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    
    async inserirConsulta(payload, state) {
      try {
        console.log(payload)
        const response = await post(
          replaceUrls(apiUrls.inserirConsulta),
          {consulta:payload }
        );
        if (response && response.status === 200) {
          return response.data;
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
