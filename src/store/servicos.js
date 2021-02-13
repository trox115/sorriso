/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    servicos: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setServicos(state, payload) {
      return { ...state, servicos: payload };
    },
  },

  effects: (dispatch) => ({
    async loadServicos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.servicos);
        if (response && response.status === 200) {
          //          await this.setservicos(response)
          this.setServicos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarServicos(payload, state) {
      try {
        //this.setLoading(true);
        const { id, nome, quantidade, custo } = payload;
        console.log(payload);
        const response = await patch(
          replaceUrls(apiUrls.editarServico, { id }),
          { nome, quantidade, custo }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirServico(payload, state) {
      try {
        //this.setLoading(true);
        const { nome, categoria, custo } = payload;
        const response = await post(replaceUrls(apiUrls.inserirServico), {
          nome,
          categoria_id: categoria,
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
