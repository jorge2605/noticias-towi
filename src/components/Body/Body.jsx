import './body.css'
import Articulo from '../Articulo/Articulo'

const Body = () => {
  return (
    <div className='body'>
      <Articulo
        titulo = "Jorge Santacruz"
        descripcion = "lorem"
      ></Articulo>
    </div>
  )
}

export default Body