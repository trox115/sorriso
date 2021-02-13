/* eslint-disable import/no-anonymous-default-export */
import { get, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    tratamentos: [],
    cliente: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setTratamentos(state, payload) {
      return { ...state, tratamentos: payload };
    },
    setTratamentosCliente(state, payload) {
      return { ...state, cliente: payload };
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
        // const { id, nome, quantidade, custo } = payload;
        // if (response && response.status === 200) {
        // }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async loadById(payload, state) {
      try {
        console.log('hey');
        //this.setLoading(true);
        const { id } = payload;
        const response = await get(
          replaceUrls(apiUrls.getTratamentoByUserId, { id })
        );
        if (response && response.status === 200) {
          this.setTratamentosCliente(response.data);
        }
      } catch (error) {
        console.log(error);
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
