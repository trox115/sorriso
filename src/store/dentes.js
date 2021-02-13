/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';
import _ from 'lodash';

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
      return { dentes: [] };
    },
    setRemoveFrom(state, payload) {
      return { ...state, denteSelecionado: payload };
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
        const { tipo, id } = payload;
        this.setSelecionado(payload);
        const { dentes } = JSON.parse(JSON.stringify(state.dentes));
        const index = _.findIndex(dentes, { id: id });
        dentes[index].preFillColor =
          tipo === 1 ? 'rgba(0, 230, 64, 0.5)' : 'rgba(0, 0, 0, 0.5)';
        await this.inserirNovosDentes(dentes);
      } catch (error) {
        console.log(error);
      }
    },
    async removeDentes(payload, state) {
      try {
        //this.setLoading(true);
        this.setResetDentes();
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirNovosDentes(payload, state) {
      try {
        //this.setLoading(true);
        this.setdentes(payload);
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async removeSelected(payload, state) {
      try {
        const { id } = payload;
        const { denteSelecionado } = state.dentes;
        const { dentes } = state.dentes;
        const index = _.findIndex(denteSelecionado, { id });
        denteSelecionado.splice(index, 1);
        const index2 = _.findIndex(dentes, { id: id });

        await this.setRemoveFrom(denteSelecionado);
        delete dentes[index2].preFillColor;
        await this.inserirNovosDentes(dentes);
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
