import React from 'react';
import dentes from '../../../img/dentes.jpg';
const ImageMapper = React.lazy(() => import('react-image-mapper'));

function Editar({ ...props }) {
  const dent = {
    name: 'my-map',
    areas: props.dentes,
  };
  return (
    <ImageMapper
      src={dentes}
      map={dent}
      onClick={(area) => console.log(area)}
      width={500}
    />
  );
}

export default Editar;
