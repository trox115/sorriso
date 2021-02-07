import React, { useState, useEffect, Suspense } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import dentes from '../../../img/dentes.jpg';
const ImageMapper = React.lazy(() => import('react-image-mapper'));

function Editar({ tratamentos, getTratamentos, inserirTratamentos, ...props }) {
  const [selected, setSelected] = useState(null);
  const [dent, setMap] = useState({
    name: 'my-map',
    areas: [
      {
        name: 'Ciso',
        id: 1,
        shape: 'poly',
        coords: [423, 591, 478, 604, 488, 552, 449, 550],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },
      {
        name: 'Segundo Molar - direito inferior',
        shape: 'poly',
        coords: [409, 654, 453, 673, 473, 625, 431, 610],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },
      {
        name: 'Primeiro Molar - direito',
        shape: 'poly',
        coords: [385, 726, 430, 744, 449, 688, 404, 676],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },
      {
        name: 'Segundo Pré-Molar - direito',
        shape: 'poly',
        coords: [376, 776, 409, 786, 420, 755, 380, 750],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },
      {
        name: 'Primeiro Pré-Molar - direito',
        shape: 'poly',
        coords: [361, 821, 386, 833, 400, 804, 368, 790],
        lineWidth: 1,
      },

      {
        name: 'Canino- direito',
        shape: 'poly',
        coords: [329, 854, 357, 859, 368, 840, 332, 823],
        lineWidth: 1,
      },
      {
        name: 'Incisivo- direito',
        shape: 'poly',
        coords: [293, 875, 326, 859, 308, 840, 294, 845],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },
      {
        name: 'Incisivo central- direito',
        shape: 'poly',
        coords: [256, 873, 281, 869, 277, 845, 258, 845],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },

      {
        name: 'Incisivo central- esquerdo',
        shape: 'poly',
        coords: [215, 875, 243, 875, 243, 847, 221, 847],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },

      {
        name: 'Incisivo- esquerdo',
        shape: 'poly',
        coords: [175, 865, 204, 873, 207, 845, 187, 841],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },
      {
        name: 'Canino- esquerdo',
        shape: 'poly',
        coords: [133, 838, 167, 857, 173, 834, 157, 822],
        lineWidth: 1,
        strokeColor: '#0000ff',
      },
      {
        name: 'Primeiro Pré-Molar - esquerdo',
        shape: 'poly',
        coords: [99, 808, 124, 831, 143, 808, 126, 792],
        lineWidth: 1,
      },
      {
        name: 'Segundo Pré-Molar - baixo',
        shape: 'poly',
        coords: [88, 759, 85, 785, 124, 770, 111, 747],
        lineWidth: 1,
      },

      {
        name: 'Primeiro Molar - baixo',
        shape: 'poly',
        coords: [69, 743, 114, 726, 89, 678, 53, 695],
        lineWidth: 1,
      },

      {
        name: 'Segundo Molar - baixo',
        shape: 'poly',
        coords: [46, 665, 91, 653, 63, 615, 27, 625],
        lineWidth: 1,
      },
      {
        name: 'Siso - baixo',
        shape: 'poly',
        coords: [19, 592, 64, 589, 56, 552, 17, 559],
        lineWidth: 1,
      },
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

  const [tratCli, setTrat] = useState([]);
  useEffect(() => {
    if (_.isEmpty(tratamentos.tratamentos)) {
      getTratamentos();
    } else if (_.isEmpty(tratCli)) {
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
    tratCli,
    getTratamentos,
    setTrat,
    props.tratamento,
    props.cliente,
  ]);

  for (let t = 0; t < tratCli.length; t++) {
    const index = _.findIndex(dent.areas, { id: tratCli[t].dente_id });
    if (index !== -1) {
      if (tratCli[t].estado !== 'Não') {
        dent.areas[index].preFillColor = 'green';
      } else if (tratCli[t].estado === 'Não') {
        dent.areas[index].preFillColor = 'red';
      }
    }
  }

  if (props.cliente) {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <ImageMapper
          src={dentes}
          map={dent}
          onImageMouseMove={(evt) => console.log(evt)}
          onClick={(area) => console.log(area)}
          onMouseMove={(area, _, evt) => console.log(area, evt)}
          width={500}
        />
      </Suspense>
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
