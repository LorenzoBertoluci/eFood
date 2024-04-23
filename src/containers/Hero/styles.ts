import styled from 'styled-components'

import massa from '../../assets/images/massa.png'

const HeroDiv = styled.div`
  height: 360px;
  width: 100vw;
  background-position: center;
  background-image: url(${massa});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
`

export const Texts = styled.ul`
  display: flex-wrap;
  wrap-direction: collumn;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Name = styled.li`
  padding: 24px 0;
  margin-left: 170px;
  width: 540px;
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;

  color: #fff;
`

export const Tag = styled(Name)`
  font-size: 32px;
`

export default HeroDiv

export const Titulo = styled.h1``
