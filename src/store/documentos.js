/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    documentos: [],
    categoria: [],
    orcamentos: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setDocumentos(state, payload) {
      return { ...state, documentos: payload };
    },
    setCategoria(state, payload) {
      return { ...state, categoria: payload };
    },
    setOrcamentos(state, payload) {
      return { ...state, orcamentos: payload };
    },
  },

  effects: (dispatch) => ({
    async loadDocumentos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.documentos);
        if (response && response.status === 200) {
          //          await this.setDocumentos(response)
          this.setDocumentos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async loadOrcamentos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.orcamentos);
        if (response && response.status === 200) {
          //          await this.setDocumentos(response)
          this.setOrcamentos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async loadDocCategorias(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.docCategoria);
        if (response && response.status === 200) {
          //          await this.setDocumentos(response)
          this.setCategoria(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarDocumentos(payload, state) {
      try {
        //this.setLoading(true);
        const { id, nome, quantidade, custo } = payload;
        console.log(payload);
        const response = await patch(
          replaceUrls(apiUrls.editarDocumento, { id }),
          { nome, quantidade, custo }
        );
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirDocumento(payload, state) {
      console.log(payload);
      try {
        //this.setLoading(true);
        const { Documento } = payload;
        console.log(payload);
        const response = await post(replaceUrls(apiUrls.inserirDocumento), {
          nome: Documento,
        });
        if (response && response.status === 200) {
          console.log('done');
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async inserirOrcamento(payload, state) {
      console.log(payload);
      try {
        //this.setLoading(true);
        const { cliente, categoria, servico, validade } = payload;
        console.log(payload);
        const response = await post(replaceUrls(apiUrls.inserirOrcamento), {
          cliente_id: cliente,
          doc_categoria_id: categoria,
          servico_id: servico,
          validade,
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
