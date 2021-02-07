import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ImageMapper from 'react-image-mapper';
import dentes from '../../img/dentes.jpg';

function Editar({ tratamentos, getTratamentos, inserirTratamentos, ...props }) {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMessage, setMessage] = useState('');
  const [selected, setSelected] = useState(null);
  const [dent, setMap] = useState({
    name: 'my-map',
    areas: [
      //Cima
      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [19, 475, 53, 476, 56, 446, 17, 441],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [22, 415, 65, 420, 69, 386, 32, 373],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [32, 348, 80, 360, 90, 322, 51, 308],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [53, 281, 96, 293, 101, 264, 64, 255],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [75, 236, 110, 248, 124, 223, 89, 208],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [106, 187, 137, 206, 153, 184, 128, 163],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [158, 160, 173, 178, 186, 145, 162, 142],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [209, 167, 235, 167, 242, 135, 194, 141],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [262, 167, 288, 167, 303, 141, 258, 137],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [310, 167, 329, 179, 350, 160, 311, 146],
        lineWidth: 1,
      },
      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [350, 183, 362, 201, 388, 191, 360, 165],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [374, 225, 385, 252, 421, 234, 401, 209],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [398, 269, 403, 286, 445, 277, 425, 255],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [427, 364, 468, 345, 452, 299, 411, 326],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [433, 421, 477, 413, 471, 372, 427, 382],
        lineWidth: 1,
      },

      {
        name: 'Siso - baixo',
        id: 2,
        shape: 'poly',
        coords: [449, 473, 488, 477, 488, 439, 439, 440],
        lineWidth: 1,
      },
    ],
  });
  useEffect(() => {
    return () => {
      setTrat([]);
    };
  }, []);
  const [tratCli, setTrat] = useState([]);
  useEffect(() => {
    const index = _.findIndex(dent.areas, { id: selected });
    if (index !== -1) {
      dent.areas[index].preFillColor =
        props.tratamento.categoria === 'Extração'
          ? 'rgba(255, 0, 0, 0.3)'
          : 'green';
    }

    if (_.isEmpty(tratamentos.tratamentos)) {
      getTratamentos();
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
  ]);

  const moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMessage(
      `You moved on ${area.shape} ${area.name} at coords ${JSON.stringify(
        coords
      )} !`
    );
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMessage(`You moved at coords ${JSON.stringify(coords)} !`);
  };

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
          src={dentes}
          map={dent}
          onImageMouseMove={(evt) => moveOnImage(evt)}
          onClick={(area) => clicked(area)}
          onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
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
