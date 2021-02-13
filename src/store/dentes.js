/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';

export default {
  state: {
    dentes: [],
    denteSelecionado: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setdentes(state, payload) {
      return { ...state, dentes: payload };
    },
    setResetDentes(state, payload) {
      console.log(state);
      return { dentes: [] };
    },
    setSelecionado(state, payload) {
      return {
        ...state,
        denteSelecionado: [...state.denteSelecionado, payload],
      };
    },
  },

  effects: (dispatch) => ({
    async loadDentes(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.dentes);
        if (response && response.status === 200) {
          //          await this.setdentes(response)
          this.setdentes(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async selecionarDente(payload, state) {
      try {
        //this.setLoading(true);
        this.setSelecionado(payload);
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async removeDentes(payload, state) {
      try {
        //this.setLoading(true);
        console.log('remover');
        this.setResetDentes();
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirNovosDentes(payload, state) {
      try {
        //this.setLoading(true);
        console.log('inserir');
        this.setdentes(payload);
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
