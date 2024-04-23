import {
  Lista,
  ListaLi,
  PratoLinha,
  PratoLi,
  PratoTag,
  PratoTitulo,
  AvaliacaoTitulo,
  CardImg,
  TagDivs,
  Adicionar
} from './styles'

import estrela from '../../assets/images/estrela.svg'

type Props = {
  key: number
  titulo: string
  descricao: string
  avaliacao: number
  tipo: string
  valor: number
  foto: string
}

const Prato = (props: Props & { aoFiltrarPorTipo: (tipo: string) => void }) => (
  <PratoLi>
    <TagDivs>
      <PratoTag href="#" onClick={() => props.aoFiltrarPorTipo(props.tipo)}>
        {props.tipo}
      </PratoTag>
    </TagDivs>
    <CardImg src={props.foto} alt="foto" />
    <Lista>
      <PratoLinha>
        <PratoTitulo>{props.titulo}</PratoTitulo>
        <PratoLinha>
          <AvaliacaoTitulo>{props.avaliacao}</AvaliacaoTitulo>
          <img src={estrela} alt="estrela" />
        </PratoLinha>
      </PratoLinha>
      <ListaLi>{props.descricao}</ListaLi>
      <ListaLi>Tipo de cozinha: {props.tipo}</ListaLi>
      <ListaLi>Valor: R${props.valor},00</ListaLi>
    </Lista>
    <Adicionar href="#">Adicionar ao carrinho</Adicionar>
  </PratoLi>
)

export default Prato
