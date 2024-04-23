import styled from 'styled-components'
import { Cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

const HeaderRestaurante = styled.header`
  height: 160px;
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
export const Logo = styled.img``

export default HeaderRestaurante

export const Texto = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  color: ${Cores.corPrincipal};
  text-decoration: none;

  text-align: center;
`

export const HeaderUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  > li {
    flex: 1;
    text-align: center;
  }
`
