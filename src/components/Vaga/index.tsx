import { Lista, ListaLi, VagaLi, VagaLink, VagaTitulo } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaLi>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <Lista>
      <ListaLi>Localizacao: {props.localizacao}</ListaLi>
      <ListaLi>Senioridade: {props.nivel}</ListaLi>
      <ListaLi>Tipo de contratacao: {props.modalidade}</ListaLi>
      <ListaLi>
        Salário: {props.salarioMin} - {props.salarioMax}
      </ListaLi>
      <ListaLi>Requisitos: {props.requisitos.join(', ')}</ListaLi>
    </Lista>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaLi>
)

export default Vaga
