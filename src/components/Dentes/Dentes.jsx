import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect, useDispatch, useSelector } from 'react-redux';
import ImageMapper from 'react-image-mapper';
import dentesimg from '../../img/dentes.jpg';

function Editar({ ...props }) {
  const [dent, setMap] = useState({
    name: 'my-map',
    areas: props.dentes,
  });

  const { dentes } = useSelector((state) => state.dentes);
  const {
    cliente,
    cliente: { tratamentos },
  } = useSelector((state) => state.users);
  const [tratCli, setTrat] = useState([]);
  // const { denteSelecionado } = useSelector((state) => state.dentes);
  const dispatch = useDispatch();
  console.log(props.cliente.id);

  useEffect(() => {
    dispatch.dentes.loadDentes();
    dispatch.users.getUserInfo({ id: props.cliente.id });
  }, []);

  useEffect(() => {
    _.map(tratamentos, (tratamento, index) => {
      const preFillColor =
        tratamento.estado === 'bom'
          ? 'green'
          : tratamento.estado === 'inexistente'
          ? 'black'
          : 'red';
      _.map(dentes, (dente, indes) => {
        if (dente.id === tratamento.id) {
          dente['preFillColor'] = preFillColor;
        }
      });
    });
  }, [tratamentos, dentes]);

  const clicked = async (area) => {
    const selected = { id: area.id, tipo: 1 };
    dispatch.dentes.selecionarDente(selected);
    //setSelected(null);
  };

  const handleSubmit = () => {
    let estado = 'bom';
    if (props.tratamento.categoria === 'Extração') {
      estado = 'Não';
    }
    //inserirTratamentos({ cliente_id: props.cliente, id: selected, estado });
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
  console.log(props);
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
