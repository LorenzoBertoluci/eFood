import { LinkImg, FooterText, LogoLi, Logo } from './styles'

import efoodLogo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

import Footer from './styles'
import { Link } from 'react-router-dom'

const Cabecalho = () => (
  <Footer>
    <ul>
      <LogoLi>
        <Link to="/">
          <Logo src={efoodLogo} alt="Logo do efood" />
        </Link>
      </LogoLi>
      <LinkImg src={facebook} alt="Facebook" />
      <LinkImg src={instagram} alt="Instagram" />
      <LinkImg src={twitter} alt="Twitter" />
      <li>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </FooterText>
      </li>
    </ul>
  </Footer>
)

export default Cabecalho
