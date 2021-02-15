/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    produtos: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setProdutos(state, payload) {
      console.log(payload);
      return { ...state, produtos: payload };
    },
  },

  effects: (dispatch) => ({
    async loadProdutos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.produtos);
        if (response && response.status === 200) {
          //          await this.setProdutos(response)
          this.setProdutos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarProdutos(payload, state) {
      try {
        //this.setLoading(true);
        const { id, nome, quantidade, custo } = payload;
        console.log(payload);
        const response = await patch(
          replaceUrls(apiUrls.editarProduto, { id }),
          { nome, quantidade, custo }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirProduto(payload, state) {
      try {
        //this.setLoading(true);
        const { nome, quantidade, custo } = payload;
        console.log(payload);
        const response = await post(replaceUrls(apiUrls.inserirProduto), {
          nome,
          quantidade,
          custo,
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
