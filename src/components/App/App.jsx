import { Header } from "../header/header.jsx"
import Body from "../body/Body.jsx"
import Footer from "../footer/footer.jsx"
import './App.css'

const App = () => { 
  return (
    <div className="container">
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default App