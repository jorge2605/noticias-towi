import { Header } from "../header/header"
import Body from "../body/body"
import Footer from "../footer/footer"
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