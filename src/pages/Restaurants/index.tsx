import { useParams } from 'react-router-dom'

import HeaderRestaurante from '../../containers/CabecalhoRestaurante'

import EstiloGlobal, { Container } from '../../styles'
import Hero from '../../containers/Hero'
import ListaMenu from '../../containers/ListaMenu'
import Restaurantes from '../../containers/ListaRestaurantes'

const Restaurants = () => {
  document.title = 'eFood'

  return (
    <>
      <HeaderRestaurante />
      <Hero />
      <Container>
        <ListaMenu />
      </Container>
    </>
  )
}

export default Restaurants
