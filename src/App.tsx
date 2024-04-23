import Footer from './containers/Footer'

import EstiloGlobal, { Container } from './styles'

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter
} from 'react-router-dom'

import Home from './pages/Home'
import Restaurants from './pages/Restaurants'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/" element={<Restaurants />} />
  </Routes>
)

function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
