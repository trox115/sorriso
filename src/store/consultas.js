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
        console.log(payload);
        const response = await patch(
          replaceUrls(apiUrls.editarConsulta, { id }),
          { pagamento }
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
        console.log(payload);
        //this.setLoading(true);

        const response = await post(
          replaceUrls(apiUrls.inserirConsulta),
          payload
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async inserirNovaConsulta(payload, state) {
      fetch('http://localhost:3001/inserirConsulta', {
        method: 'POST',
        data: payload,
      }).catch((error) => console.log(error));
    },
  }),
};
