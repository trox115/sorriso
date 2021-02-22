/* eslint-disable import/no-anonymous-default-export */
import { get, patch, post } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

export default {
  state: {
    documentos: [],
    docCategoria: [],
    orcamentos: [],
    orcamento: {},
  },

  reducers: {
    loaded: (state, payload) => payload,
    setDocumentos(state, payload) {
      return { ...state, documentos: payload };
    },
    setCategoria(state, payload) {
      return { ...state, docCategoria: payload };
    },
    setOrcamentos(state, payload) {
      return { ...state, orcamentos: payload };
    },
    setOrcamento(state, payload) {
      return { ...state, orcamento: payload };
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
          this.setOrcamentos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async getOrcamentoId(payload, state) {
      try {
        //this.setLoading(true);
        const { id } = payload;
        const response = await get(replaceUrls(apiUrls.orcamento, { id }))
        if (response && response.status === 200) {
          console.log(response);
          this.setOrcamento(response.data);
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

    
    async inserirOrcamentoDetails(payload, state) {
      console.log(payload);
      try {
        //this.setLoading(true);
        const { dente_id, orcamento_id, servico_id } = payload;
        console.log(payload)
        const response = await post(replaceUrls(apiUrls.inserirOrcamentoDetails), {
          dente_id,
          orcamento_id,
          servico_id,
        });
        if (response && response.status === 200) {
          console.log(response)
          return response.data;
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async inserirOrcamento(payload, state) {
      console.log(payload);
      try {
        //this.setLoading(true);
        const { cliente, categoria, servico } = payload;
        console.log(payload)
        const response = await post(replaceUrls(apiUrls.inserirOrcamento), {
          cliente_id: cliente,
          doc_categoria_id: categoria,
          servico_id: servico,
        });
        if (response && response.status === 200) {
          console.log(response)
          return response.data;
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
