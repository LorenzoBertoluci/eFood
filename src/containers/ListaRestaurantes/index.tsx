import { useState } from 'react'
import FormRestaurantes from '../FormRestaurantes'
import Restaurante from '../../components/RestauranteCard'
import RestaurantesUL from './styles'

import pizza from '../../assets/images/pizzaCartCard.png'
import massa from '../../assets/images/massa.png'
import sushi from '../../assets/images/sushi.png'

type Restaurante = {
  id: string
  titulo: string
  endereco: string
  avaliacao: number
  tipo: string
  valorMin: number
  valorMax: number
  horarios: string[]
  fotos: string
}

const Restaurantes = [
  {
    id: 1,
    titulo: 'Restaurante  1',
    endereco: 'Rua bla bla bla',
    avaliacao: 5,
    tipo: 'italiano',
    valorMin: 30,
    valorMax: 45,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: sushi
  },
  {
    id: 2,
    titulo: 'Restaurante  2',
    endereco: 'Rua bla bla bla',
    avaliacao: 4,
    tipo: 'mexicano',
    valorMin: 50,
    valorMax: 65,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: pizza
  },
  {
    id: 3,
    titulo: 'Restaurante  3',
    endereco: 'Rua bla bla bla',
    avaliacao: 4,
    tipo: 'mexicano',
    valorMin: 40,
    valorMax: 60,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: massa
  },
  {
    id: 4,
    titulo: 'Restaurante 4',
    endereco: 'Rua bla bla bla',
    avaliacao: 5,
    tipo: 'italiano',
    valorMin: 40,
    valorMax: 50,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: massa
  },
  {
    id: 5,
    titulo: 'Restaurante  5',
    endereco: 'Rua bla bla bla',
    avaliacao: 3,
    tipo: 'italiano',
    valorMin: 70,
    valorMax: 80,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: pizza
  },
  {
    id: 6,
    titulo: 'Restaurante  6',
    endereco: 'Rua bla bla bla',
    avaliacao: 3,
    tipo: 'mexicano',
    valorMin: 120,
    valorMax: 150,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: pizza
  },
  {
    id: 7,
    titulo: 'Restaurante  7',
    endereco: 'São Paulo/SP',
    avaliacao: 5,
    tipo: 'italiano',
    valorMin: 40,
    valorMax: 50,
    horarios: ['café', 'almoço', 'tarde', 'janta'],
    foto: sushi
  }
]

const ListaRestaurantes = () => {
  const [filtro, setFiltro] = useState<string>('')

  const filtrarPorTipo = (tipo: string) => {
    setFiltro(tipo.toLowerCase())
  }
  const RestaurantesFiltradas = Restaurantes.filter(
    (x) => x.tipo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormRestaurantes aoPesquisar={(termo: string) => setFiltro(termo)} />
      <RestaurantesUL>
        {RestaurantesFiltradas.map((vag) => (
          <Restaurante
            key={vag.id}
            titulo={vag.titulo}
            endereco={vag.endereco}
            avaliacao={vag.avaliacao}
            tipo={vag.tipo}
            valorMin={vag.valorMin}
            valorMax={vag.valorMax}
            horarios={vag.horarios}
            foto={vag.foto}
            aoFiltrarPorTipo={filtrarPorTipo}
          />
        ))}
      </RestaurantesUL>
    </div>
  )
}

export default ListaRestaurantes
