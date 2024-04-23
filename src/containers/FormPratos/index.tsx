import { FormEvent, useState } from 'react'

import { Forms, Input, Botao } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormPratos = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Forms onSubmit={aoEnviarForm}>
      <Input
        placeholder="Italiano, Mexicano, Indiano, Brasileiro..."
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Forms>
  )
}
export default FormPratos
