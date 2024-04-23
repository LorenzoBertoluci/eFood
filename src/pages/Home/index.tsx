import Header from '../../containers/Cabecalho'
import ListaRestaurantes from '../../containers/ListaRestaurantes'
import EstiloGlobal, { Container } from '../../styles'

const Home = () => {
  document.title = 'eFood'

  return (
    <>
      <Header />
      <Container>
        <ListaRestaurantes />
      </Container>
    </>
  )
}

export default Home
