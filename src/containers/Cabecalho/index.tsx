import { Link } from 'react-router-dom'
import { Slogan, Logo } from './styles'
import efoodLogo from '../../assets/images/logo.svg'
import Header from './styles'

const Cabecalho = () => (
  <Header>
    <Link to="/">
      <Logo src={efoodLogo} alt="Logo do efood" />
    </Link>
    <Slogan>Viva experiencias gastronomicas no conforto da sua casa</Slogan>
  </Header>
)

export default Cabecalho
