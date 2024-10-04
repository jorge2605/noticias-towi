import logoTowi from '../../assets/towi_Azul.png'
import logoServ from '../../assets/diseño-3i.png'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <img className='towi' src= { logoTowi } alt="" />
      <p className='act'>Actualizaciones Towi</p>
      <img className='si3i' src= { logoServ } alt="" />
    </div>
  )
}

export default Footer