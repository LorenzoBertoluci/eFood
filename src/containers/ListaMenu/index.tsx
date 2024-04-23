import { useState } from 'react'
import FormPratos from '../FormPratos'
import Prato from '../../components/PratoCard'
import PratosUL from './styles'

import pizza from '../../assets/images/pizzaCartCard.png'
import massa from '../../assets/images/massa.png'
import sushi from '../../assets/images/sushi.png'

type Prato = {
  key: number
  titulo: string
  avaliacao: number
  descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  tipo: string
  valor: number
  foto: string
}

const Pratos = [
  {
    key: 1,
    titulo: 'Prato  1',
    avaliacao: 5,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tipo: 'japones',
    valor: 30,
    foto: sushi
  },
  {
    key: 2,
    titulo: 'Prato  2',
    avaliacao: 4,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tipo: 'mexicano',
    valor: 50,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: pizza
  },
  {
    key: 3,
    titulo: 'Prato  3',
    avaliacao: 4,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tipo: 'mexicano',
    valor: 40,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: massa
  },
  {
    key: 4,
    titulo: 'Prato 4',
    avaliacao: 5,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tipo: 'italiano',
    valor: 40,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: massa
  },
  {
    key: 5,
    titulo: 'Prato  5',
    avaliacao: 3,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tipo: 'italiano',
    valor: 70,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: pizza
  },
  {
    key: 6,
    titulo: 'Prato  6',
    avaliacao: 3,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tipo: 'italiano',
    valor: 120,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: pizza
  },
  {
    key: 7,
    titulo: 'Prato  7',
    avaliacao: 5,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    tipo: 'japones',
    valor: 40,
    foto: sushi
  }
]

const ListaPratos = () => {
  const [filtro, setFiltro] = useState<string>('')

  const filtrarPorTipo = (tipo: string) => {
    setFiltro(tipo.toLowerCase())
  }

  const PratosFiltradas = Pratos.filter(
    (x) => x.tipo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormPratos aoPesquisar={(termo: string) => setFiltro(termo)} />
      <PratosUL>
        {PratosFiltradas.map((vag) => (
          <Prato
            key={vag.key}
            titulo={vag.titulo}
            descricao={vag.descricao}
            avaliacao={vag.avaliacao}
            tipo={vag.tipo}
            valor={vag.valor}
            foto={vag.foto}
            aoFiltrarPorTipo={filtrarPorTipo}
          />
        ))}
      </PratosUL>
    </div>
  )
}

export default ListaPratos
