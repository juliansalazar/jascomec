import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Navbar/>
      <Home />
      <Footer/>
    </>
  )
}

export default App
