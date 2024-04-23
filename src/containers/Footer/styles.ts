import styled from 'styled-components'
import { Cores } from '../../styles'

const Footer = styled.footer`
  height: 360px;
  display: flex;
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  text-align: center;
  margin-top: 84px;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`

export const FooterText = styled.h3`
  width: 480px;
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  text-align: center;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  font-family: Roboto;
`
export const LinkImg = styled.img`
  margin-top: 32px;
  margin-bottom: 80px;
  margin: 4px;
  width: 24px;
  height: 24px;
`
export const LogoLi = styled.li``

export const Logo = styled.img`
  width: 125px;
`

export default Footer

export const Titulo = styled.h1``
