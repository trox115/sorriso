/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    pagamentos: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setpagamentos(state, payload) {
      return { ...state, pagamentos: payload };
    },
  },

  effects: (dispatch) => ({
    async loadpagamentos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.pagamentos);
        if (response && response.status === 200) {
          //          await this.setpagamentos(response)
          this.setpagamentos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarpagamentos(payload, state) {
      try {
        //this.setLoading(true);
        const { id, nome, quantidade, custo } = payload;
        console.log(payload);
        const response = await patch(
          replaceUrls(apiUrls.editarpagamento, { id }),
          { nome, quantidade, custo }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirPagamento(payload, state) {
      try {
        console.log('hey');
        //this.setLoading(true);
        const { consulta_id, cliente_id, metodo, valor, troco } = payload;
        console.log(payload);
        const response = await post(replaceUrls(apiUrls.inserirPagamento), {
          cliente_id,
          consulta_id,
          metodo,
          valor,
          troco,
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
