import styled from 'styled-components'
import { Cores } from '../../styles'

export const VagaLi = styled.li`
  border: 1px solid ${Cores.corPrincipal};
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  hover {
    background-color: ${Cores.corPrincipal};
    color: ${Cores.corSecundaria};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const Lista = styled.ul``

export const ListaLi = styled.li``

export const VagaLink = styled.a`
  border-color: ${Cores.corSecundaria};
  background-color: ${Cores.corPrincipal};
  color: ${Cores.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  hover {
    border-color: ${Cores.corPrincipal};
    background-color: ${Cores.corSecundaria};
    color: ${Cores.corPrincipal};
  }
  @media (max-width: 768px) {
    display: block;
  }
`
