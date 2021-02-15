import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ImageMapper from 'react-image-mapper';
import dentesimg from '../../img/dentes.jpg';

function Editar({
  tratamentos,
  getTratamentos,
  inserirTratamentos,
  getDentes,
  dentes,
  ...props
}) {
  const [selected, setSelected] = useState(null);
  const [dent, setMap] = useState({
    areas: [],
  });
  useEffect(() => {
    getDentes();
    setMap({ areas: dentes.dentes });
    return () => {
      setTrat([]);
    };
  }, [dentes.dentes, getDentes]);
  const [tratCli, setTrat] = useState([]);
  // useEffect(() => {
  //   const index = _.findIndex(dent.areas, { id: selected });
  //   if(index !== -1){
  //     console.log(props.tratamento?.categoria)
  //     dent.areas[index].preFillColor = props.tratamento.categoria === 'Extração' ?  'rgba(255, 0, 0, 0.3)' : 'green'
  //   }

  //   if(_.isEmpty(tratamentos.tratamentos)){
  //     getTratamentos();
  //     console.log(tratamentos)
  //   }
  //   if(_.isEmpty(tratCli)){
  //       let filtered = [{estado:'Not found'}]
  //       filtered=_.filter(tratamentos.tratamentos, {cliente_id: props.cliente})
  //       console.log(filtered)

  //     setTrat(filtered);
  //   }

  // }, [dent, selected, setSelected,tratamentos, getTratamentos, setTrat,props.tratamento, props.cliente])

  const clicked = (area) => {
    const index = area.id === selected;
    if (!index) {
      setSelected(area.id);
    } else {
      const index = _.findIndex(dent.areas, { id: selected });
      dent.areas[index].preFillColor = null;
      setSelected(null);
    }
  };

  const handleSubmit = () => {
    console.log(props.cliente, selected, props.tratamento);
    let estado = 'bom';
    if (props.tratamento.categoria === 'Extração') {
      estado = 'Não';
    }
    inserirTratamentos({ cliente_id: props.cliente, id: selected, estado });
  };

  for (let t = 0; t < tratCli.length; t++) {
    const index = _.findIndex(dent.areas, { id: tratCli[t].dente_id });
    if (index !== -1) {
      if (tratCli[t].estado !== 'Não') {
        dent.areas[index].preFillColor = 'green';
        console.log('change');
      } else if (tratCli[t].estado === 'Não') {
        dent.areas[index].preFillColor = 'red';
      }
    }
  }

  if (props.cliente) {
    return (
      <>
        <ImageMapper
          src={dentesimg}
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
  dentes: state.dentes,
});

const mapDispatch = (dispatch) => ({
  getProdutos: () => dispatch.produtos.loadProdutos(),
  inserirTratamentos: (obj) => dispatch.tratamentos.inserirTratamentos(obj),
  getTratamentos: () => dispatch.tratamentos.loadTratamentos(),
  getDentes: () => dispatch.dentes.loadDentes(),
});
export default connect(mapState, mapDispatch)(Editar);
