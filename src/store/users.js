/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    users: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setUsers(state, payload) {
      console.log(payload);
      return { ...state, users: payload };
    },
  },

  effects: (dispatch) => ({
    async loadClientes(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.clientes);
        if (response && response.status === 200) {
          //          await this.setClientes(response)

          this.setUsers(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarClientes(payload, state) {
      try {
        //this.setLoading(true);
        const {
          id,
          nome,
          telefone,
          bi,
          nif,
          utente,
          email,
          seguro,
          numSeguro,
          morada,
          observacoes,
        } = payload;
        const response = await patch(
          replaceUrls(apiUrls.editarCliente, { id }),
          {
            nome,
            telefone,
            bi,
            nif,
            utente,
            email,
            seguro,
            numSeguro,
            morada,
            observacoes,
          }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirCliente(payload, state) {
      try {
        //this.setLoading(true);
        const {
          nome,
          telefone,
          bi,
          nif,
          utente,
          email,
          seguro,
          numSeguro,
          morada,
          observacoes,
        } = payload;
        const response = await post(replaceUrls(apiUrls.inserirCliente), {
          nome,
          telefone,
          bi,
          nif,
          utente,
          email,
          seguro,
          numSeguro,
          morada,
          observacoes,
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
