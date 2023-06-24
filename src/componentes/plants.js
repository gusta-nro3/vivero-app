import React from'react';
import '../estilos/plants.css'
function Plantas(props) {
  return (
    <div className = 'contenedor-planta'>
      <img className = 'imagen-planta'
        src = {require(`../imagenes/${props.imagen}.jpg`)}
        alt = 'Foto'/>
      <div className ='contenedor-textos'>
        <p className='nombre-planta'><strong>{props.clasificacion}: {props.nombre}</strong> </p>
        <p className='especie-planta'><strong>{props.nom}</strong>. Origen: {props.origen}</p>
        <p className='caracteristicas-planta'>"{props.caracteristicas}"</p>

      </div>  

    </div>
  );

}
export default Plantas;
