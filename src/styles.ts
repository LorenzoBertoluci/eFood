import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;

}

body {
  padding-bottom: 120px;
  background-color: #FFF8F2;
}
`
export default EstiloGlobal

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Cores = {
  corPrincipal: '#E66767',
  corSecundaria: '#FFEBD9',
  corFundo: '#FFF8F2'
}
