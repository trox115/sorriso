import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ImageMapper from 'react-image-mapper';
import dentes from '../../img/dentes.jpg';

function Editar({ tratamentos, getTratamentos, inserirTratamentos, ...props }) {
  const [consultas, setConsultas] = useState([]);
  const [selected, setSelected] = useState(null);
  const [dent, setMap] = useState({
    name: 'my-map',
    areas: props.dentes,
  });

  useEffect(() => {
    getTratamentos();
    return () => {
      setTrat([]);
    };
  }, [getTratamentos]);

  const [tratCli, setTrat] = useState([]);
  useEffect(() => {
    const index = _.findIndex(dent.areas, { id: selected });
    if (index !== -1 && props.tratamento?.categoria) {
      setMap({ ...dent });
      dent.areas[index].preFillColor =
        props.tratamento.categoria === 'Extração'
          ? 'rgba(255, 0, 0, 0.3)'
          : 'green';
    } else if (index !== -1 && props.estado) {
      dent.areas[index].preFillColor =
        props.estado === 'Não Tratado'
          ? 'rgba(255, 0, 0, 0.3)'
          : props.estado === 'Tratado'
          ? 'rgba(0, 230, 64, 0.3)'
          : 'black';
    }

    if (_.isEmpty(tratCli)) {
      let filtered = [{ estado: 'Not found' }];
      filtered = _.filter(tratamentos.tratamentos, {
        cliente_id: props.cliente,
      });

      setTrat(filtered);
    }
  }, [
    dent,
    selected,
    setSelected,
    tratamentos,
    getTratamentos,
    setTrat,
    props.tratamento,
    props.cliente,
    props.estado,
    tratCli,
  ]);

  const clicked = (area) => {
    const index = area.id === selected;
    console.log(area.id);
    if (!index) {
      setSelected(area.id);
      setConsultas([...consultas, { id: area.id, estado: props.estado }]);
      console.log(consultas);
    } else {
      const index = _.findIndex(dent.areas, { id: selected });
      dent.areas[index].preFillColor = null;
      setSelected(null);
    }
  };

  const handleSubmit = async () => {
    for (const t of consultas) {
      let estado = 'bom';
      if (t.estado === 'Não Tratado') {
        estado = 'Não';
      } else if (t.estado === 'Não Existente') {
        estado = 'inexistente';
      }
      inserirTratamentos({ cliente_id: props.cliente, id: t.id, estado });
    }
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
  // }

  if (props.cliente) {
    console.log(props);
    return (
      <>
        <ImageMapper
          src={dentes}
          map={dent}
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
