import styled, { createGlobalStyle } from 'styled-components'
import { Cores } from '../../styles'

export const PratoLinha = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`

export const PratoLi = styled.li`
  max-width: 450px;
  min-width: 300px;
  border: 1px solid ${Cores.corPrincipal};
  background-color: ${Cores.corPrincipal};
  color: ${Cores.corSecundaria};
  margin-bottom: 16px;
  margin-left: 24px;
  margin-right: 24px;
  transition: all ease 0.3s;
  /* border-radius: 8px; */

  hover {
    background-color: ${Cores.corSecundaria};
    color: ${Cores.corPrincipal};
    cursor: pointer;
  }
`

export const PratoTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const AvaliacaoTitulo = styled.span`
  font-weight: bold;
  margin-bottom: 16px;
`

export const Lista = styled.ul`
  margin-left: 8px;
`

export const ListaLi = styled.li`
  margin-bottom: 8px;
`

export const Adicionar = styled.a`
  background-color: ${Cores.corSecundaria};
  color: ${Cores.corPrincipal};
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  /* border-radius: 8px; */
  text-decoration: none;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: bold;
  font-size: 14px;

  hover {
    border-color: ${Cores.corPrincipal};
    background-color: ${Cores.corSecundaria};
    color: ${Cores.corPrincipal};
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: block;
  }
`
export const TagDivs = styled.div`
  position: relative;
  top: 16px;
  right: 16px;
  display: flex;
`

export const PratoTag = styled.a`
  border-color: ${Cores.corSecundaria};
  background-color: ${Cores.corPrincipal};
  color: ${Cores.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  /* border-radius: 8px; */
  text-decoration: none;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: bold;
  font-size: 14px;

  text-align: center;

  hover {
    border-color: ${Cores.corPrincipal};
    background-color: ${Cores.corSecundaria};
    color: ${Cores.corPrincipal};
  }
  @media (max-width: 768px) {
    display: block;
  }
  position: absolute;
  top: 8;
`

export const CardImg = styled.img`
  background-size: cover;
  height: 200px;
  width: 100%;
`
