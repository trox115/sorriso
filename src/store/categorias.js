/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    categorias: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setCategorias(state, payload) {
      console.log(payload);
      return { ...state, categorias: payload };
    },
  },

  effects: (dispatch) => ({
    async loadCategorias(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.categorias);
        if (response && response.status === 200) {
          //          await this.setcategorias(response)
          this.setCategorias(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarCategorias(payload, state) {
      try {
        //this.setLoading(true);
        const { id, nome, quantidade, custo } = payload;
        const response = await patch(
          replaceUrls(apiUrls.editarCategoria, { id }),
          { nome, quantidade, custo }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirCategoria(payload, state) {
      try {
        //this.setLoading(true);
        const { categoria } = payload;
        console.log(payload);
        const response = await post(replaceUrls(apiUrls.inserirCategoria), {
          nome: categoria,
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
