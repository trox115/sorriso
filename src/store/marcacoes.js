/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    marcacoes: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setMarcacoes(state, payload) {
      return { ...state, marcacoes: payload };
    },
  },

  effects: (dispatch) => ({
    async loadMarcacoes(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.marcacoes);
        if (response && response.status === 200) {
          //          await this.setMarcacoes(response)
          this.setMarcacoes(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarmarcacoes(payload, state) {
      try {
        //this.setLoading(true);
        const { id, cliente_id, start, end, tipo } = payload;
        console.log(payload);
        const response = await patch(
          replaceUrls(apiUrls.editarMarcacao, { id }),
          { cliente_id, start, end, tipo }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirMarcacao(payload, state) {
      try {
        //this.setLoading(true);
        const { cliente_id, start, end } = payload;
        console.log(payload);
        const response = await post(replaceUrls(apiUrls.inserirMarcacao), {
          cliente_id,
          start,
          end,
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
