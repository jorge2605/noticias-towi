/* eslint-disable react/prop-types */
import './articulo.css'

const Articulo = (props) => {
  return (
    <div className='box'>
        <p className='titulo'> { props.titulo } </p>
        <p className='descripcion'> { props.descripcion } Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni eligendi soluta, dolor maiores voluptates id nihil quas error quisquam necessitatibus repellendus est ut, consectetur ea autem! Excepturi, fugiat quia! </p>
      </div>
  )
}

export default Articulo