import styled from 'styled-components'
import { Cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

const Header = styled.header`
  height: 360px;
  display: flex;
  flex-direction: column;
  background-color: ${Cores.corSecundaria};
  background-image: ${fundo};
  color: ${Cores.corPrincipal};
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`
export const Logo = styled.img`
  margin-top: 40px;
`

export const Slogan = styled.header`
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  margin-top: 138px;
  width: 540px;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
`

export default Header

export const Titulo = styled.h1``
