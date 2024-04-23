import {
  Lista,
  ListaLi,
  RestauranteLinha,
  RestauranteLi,
  RestauranteLink,
  RestauranteTitulo,
  AvaliacaoTitulo,
  CardImg,
  StarImg,
  TagDivs,
  RestauranteTag
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

type Props = {
  key: number
  titulo: string
  endereco: string
  avaliacao: number
  tipo: string
  valorMin: number
  valorMax: number
  horarios: string[]
  foto: string
}

const Restaurante = (
  props: Props & { aoFiltrarPorTipo: (tipo: string) => void }
) => (
  <RestauranteLi>
    <TagDivs>
      <Link to="/">
        <RestauranteTag
          href="#"
          onClick={() => props.aoFiltrarPorTipo(props.tipo)}
        >
          {props.tipo}
        </RestauranteTag>
      </Link>
    </TagDivs>
    <CardImg src={props.foto} alt="foto" />
    <Lista>
      <RestauranteLinha>
        <RestauranteTitulo>{props.titulo}</RestauranteTitulo>
        <RestauranteLinha>
          <AvaliacaoTitulo>{props.avaliacao}</AvaliacaoTitulo>
          <StarImg src={estrela} alt="estrela" />
        </RestauranteLinha>
      </RestauranteLinha>

      <ListaLi>endereco: {props.endereco}</ListaLi>
      <ListaLi>Tipo de cozinha: {props.tipo}</ListaLi>
      <ListaLi>
        Valores: R${props.valorMin},00 - R${props.valorMax},00
      </ListaLi>
      <ListaLi>horarios: {props.horarios.join(', ')}</ListaLi>
    </Lista>
    <RestauranteLink href="/restaurantes/">Saiba mais</RestauranteLink>
  </RestauranteLi>
)

export default Restaurante
