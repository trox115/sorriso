/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import ImageMapper from 'react-image-mapper';
import { useHistory } from 'react-router-dom';
import dentesimg from '../../img/dentes.jpg';

function Editar({ ...props }) {
  const { dentes } = useSelector((state) => state.dentes);
  const { cliente } = useSelector((state) => state.users);
  const { denteSelecionado } = useSelector((state) => state.dentes);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch.dentes.loadDentes();
  }, [dispatch.dentes, props.cliente]);

  useEffect(() => {
    dispatch.users.getUserInfo({ id: props.cliente });
  }, [dispatch.users, props.cliente]);

  useEffect(() => {
    const novos = dentes;
    dispatch.dentes.inserirNovosDentes(novos);
  }, [dentes]);

  const clicked = async (area) => {
    const categoria = 1;
    const selected = {
      id: area.id,
      tipo: categoria === 2 ? 0 : 1,
      servico: props.servico,
    };
    const index = _.findIndex(denteSelecionado, {
      id: area.id,
    });
    if (index > -1) {
      dispatch.dentes.removeSelected({ id: area.id });
    } else {
      await dispatch.dentes.selecionarDente2(selected);
    }
  };

  const handleSubmit = async () => {
    let detalhes = [];
    for (const selecionado of denteSelecionado) {
      const payload2 = {
        servico_id: selecionado.servico.id,
        dente_id: selecionado.id,
      };
      detalhes.push(payload2);
      //await dispatch.documentos.inserirOrcamentoDetails(payload2);
    }

     await Promise.resolve(
      dispatch.documentos.inserirOrcamento({
        cliente: cliente.cliente.id,
        doc_categoria: 3,
        detalhes
      })
    );
    await dispatch.dentes.removeDentes();
    history.push('/verDocumentos')
  };

  return (
    <>
      {!_.isEmpty(dentes) && (
        <ImageMapper
          src={dentesimg}
          map={{ name: 'my-map', areas: dentes }}
          onClick={(area) => clicked(area)}
          width={500}
        />
      )}
      ;
      <div class='col-lg-12 p-t-20 text-center'>
        <button
          type='button'
          className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink'
          onClick={handleSubmit}
        >
          Gravar
        </button>
      </div>
    </>
  );
}

export default Editar;
