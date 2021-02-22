/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import ImageMapper from 'react-image-mapper';
import dentesImg from '../../img/dentes.jpg';

function Editar({ getTratamentos, inserirTratamentos, ...props }) {
  const { dentes } = useSelector((state) => state.dentes);
  const {
    cliente: { tratamentos },
  } = useSelector((state) => state.users);
  const { denteSelecionado } = useSelector((state) => state.dentes);
  const dispatch = useDispatch();
  //const history = useHistory();

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
    console.log(novos)
    dispatch.dentes.inserirNovosDentes(novos);
    console.log(novos)
  }, [props.cliente, tratamentos, dentes, dispatch.dentes]);
 
  const clicked = async (area) => {
    console.log(props.estado)
    const categoria = props.estado;
    const selected = {
      id: area.id,
      tipo: categoria === 'Tratado' ? 1 : 0,
      servico: props.servico,
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

  const handleSubmit = async () => {
    const idCliente = props.cliente
    for (const [i, selecionado] of denteSelecionado.entries()) {
      let estado = 'mau';
      if (selecionado.tipo === 1) {
        estado = 'bom';
      }
      const payload = {
        cliente_id: idCliente,
        estado,
        id: selecionado.id,
      };
      const jaExiste = _.findIndex(tratamentos, {dente_id: selecionado.id})
      let tratamento = null;
      if(jaExiste > -1){
        const payload2 = { id: tratamentos[jaExiste].id, estado}
       await Promise.resolve(dispatch.tratamentos.editarTratamento(payload2))
      }
      else{
        await Promise.resolve(dispatch.tratamentos.inserirTratamentos(payload))
      }
  }
}

  if (props.cliente) {
    return (
      <>
        <ImageMapper
          src={dentesImg}
          map={{ name: 'my-map', areas: dentes }}
          onClick={(area) => clicked(area)}
          width={500}
        />
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
  } else {
    return <div></div>;
  }
}

const mapState = (state) => ({
  produtos: state.produtos,
  tratamentos: state.tratamentos,
});

const mapDispatch = (dispatch) => ({
  getProdutos: () => dispatch.produtos.loadProdutos(),
  inserirTratamentos: (obj) => dispatch.tratamentos.inserirTratamentos(obj),
  getTratamentos: () => dispatch.tratamentos.loadTratamentos(),
});
export default connect(mapState, mapDispatch)(Editar);
