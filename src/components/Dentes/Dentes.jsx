import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import ImageMapper from 'react-image-mapper';
import { useHistory } from 'react-router-dom';
import dentesimg from '../../img/dentes.jpg';

function Editar({ ...props }) {
  const { dentes } = useSelector((state) => state.dentes);

  const {
    cliente,
    cliente: { tratamentos },
  } = useSelector((state) => state.users);
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
    _.map(tratamentos, (tratamento, index) => {
      const preFillColor =
        tratamento.estado === 'bom'
          ? 'green'
          : tratamento.estado === 'inexistente'
          ? 'black'
          : 'red';
      _.map(novos, (dente) => {
        if (dente.id === tratamento.dente_id) {
          dente['preFillColor'] = preFillColor;
        }
      });
    });
    dispatch.dentes.inserirNovosDentes(novos);
  }, [tratamentos, props.cliente, dentes, dispatch.dentes]);

  const clicked = async (area) => {
    const categoria = props.servico.categoria_id;
    const selected = {
      id: area.id,
      tipo: categoria === 2 ? 0 : 1,
      servico: props.servico,
    };
    const index = _.findIndex(denteSelecionado, { id: area.id });
    if (index > -1) {
      dispatch.dentes.removeSelected({ id: area.id });
    } else {
      dispatch.dentes.selecionarDente(selected);
    }
  };

  const handleSubmit = async () => {
    const idCliente = cliente.cliente.id;
    for (const selecionado of denteSelecionado) {
      let estado = 'bom';
      if (selecionado.servico.categoria_id === 2) {
        estado = 'inexistente';
      }
      const payload = {
        cliente_id: cliente.cliente.id,
        estado,
        id: selecionado.id,
      };
      await dispatch.tratamentos.inserirTratamentos(payload);
      const formData = new FormData();
      formData.append('cliente_id', idCliente);
      console.log(idCliente);

      formData.append('servico_id', selecionado.servico.id);
      if (props.image?.image) {
        formData.append('image', props.image.image);
      }
      console.log(formData);
      await dispatch.consultas.inserirConsulta(formData);
    }
    await dispatch.dentes.removeDentes();
    history.push('/');
  };

  // for (let t = 0; t < tratCli.length; t++) {
  //   const index = _.findIndex(dent.areas, { id: tratCli[t].dente_id });
  //   if (index !== -1) {
  //     if (tratCli[t].estado !== 'Não') {
  //       dent.areas[index].preFillColor = 'green';
  //       console.log('change');
  //     } else if (tratCli[t].estado === 'Não') {
  //       dent.areas[index].preFillColor = 'red';
  //     }
  //   }
  // }  };
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
      <div class="col-lg-12 p-t-20 text-center">
        <button
          type="button"
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
          onClick={handleSubmit}
        >
          Gravar
        </button>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file"></label>
      </div>
    </>
  );
}

export default Editar;
