import { HeaderUl, Logo, Texto } from './styles'
import efoodLogo from '../../assets/images/logo.svg'
import HeaderRestaurante from './styles'
import { StyledLink } from '../../styles'

const CabecalhoRestaurante = () => (
  <HeaderRestaurante>
    <div>
      <HeaderUl>
        <li>
          <StyledLink to="/">
            <Texto>Restaurantes</Texto>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/">
            <Logo src={efoodLogo} alt="Logo do efood" />
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/">
            <Texto>Produto(s)no carrinho</Texto>
          </StyledLink>
        </li>
      </HeaderUl>
    </div>
  </HeaderRestaurante>
)

export default CabecalhoRestaurante
