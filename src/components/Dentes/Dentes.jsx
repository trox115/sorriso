/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
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
  const { produtos } = useSelector((state) => state.produtos);
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
    const ids = [];
    _.map(tratamentos, (tratamento, index) => {
      ids.push(tratamento.dente_id);
      const preFillColor =
        tratamento.estado === 'bom'
          ? 'rgba(0, 230, 64, 0.5)'
          : tratamento.estado === 'inexistente'
          ? 'rgba(0, 0, 0, 0.5)'
          : 'rgba(242, 38, 19, 0.5)';
      _.map(novos, (dente) => {
        const index = _.findIndex(denteSelecionado, { id: dente.id });
        if (dente.id === tratamento.dente_id) {
          dente['preFillColor'] = preFillColor;
        } else if (ids.includes(dente.id) === false && index < 0) {
          delete dente['preFillColor'];
        }
      });
    });
    dispatch.dentes.inserirNovosDentes(novos);
  }, [props.cliente, tratamentos,dentes, dispatch.dentes]);

  const clicked = async (area) => {
    const categoria = props.servico.categoria_id;
    const selected = {
      id: area.id,
      tipo: categoria === 2 ? 0 : 1,
      servico: props.servico,
      nome:area.nome
    };
    const index = _.findIndex(denteSelecionado, {
      id: area.id,
    });
    if (index > -1) {
      dispatch.dentes.removeSelected({ id: area.id });
    } else {
      const treatedTooth = _.findIndex(tratamentos, { dente_id: area.id });
      if (treatedTooth > -1) {
        tratamentos[treatedTooth].estado = categoria === 2 ? 'inexistente' : 'bom';
        //await dispatch.dentes.changePrefillColor(selected);
      }
      await dispatch.dentes.selecionarDente(selected);
    }
  };


  const handleCick2 = async () => {
    const idCliente = cliente.cliente.id;
    const obs = props.obs.split('\n');

    const { value1, value2 } = props;
        const formData = new FormData();
        formData.append('cliente_id', idCliente);
        if (props.image?.image) {
          formData.append('image', props.image.image);

        }
        const consulta =  await Promise.resolve(dispatch.consultas.inserirConsulta(formData));

        for (const [i, selecionado] of denteSelecionado.entries()) {
          let estado = 'bom';
          if (selecionado.servico.categoria_id === 2) {
            estado = 'inexistente';
          }
          const payload = {
            cliente_id: idCliente,
            estado,
            id: selecionado.id,
            obs: obs[i]
          };
          const jaExiste = _.findIndex(tratamentos, {dente_id: selecionado.id})
          let tratamento = null;
          if(jaExiste > -1){
            const payload2 = { id: tratamentos[jaExiste].id, estado}
            tratamento = await Promise.resolve(dispatch.tratamentos.editarTratamento(payload2))
          }
          else{
            tratamento = await Promise.resolve(dispatch.tratamentos.inserirTratamentos(payload))
          }
          const payload3 = {
            consulta_id:consulta.id,
            tratamento_id:tratamento.id,
            servico_id:selecionado.servico.id,
          };
          await dispatch.consultas.consultaInsertDetails(payload3)
        }

        await dispatch.dentes.removeDentes();
        const obj = {};
        _.map(Object.values(value2), (numero, idx, i, a) => {
          obj[value1[idx]] = numero;
        });
        for (const n in obj) {
          const p = _.find(produtos, { id: parseInt(n, 10) });
          const payload = {
            id: parseInt(n, 10),
            quantidade: p?.quantidade - parseInt(obj[n], 10),
          };
          await dispatch.produtos.editarProdutos(payload);
        }
        history.push('/verConsultas');
        
  }

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
          onClick={handleCick2}
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
