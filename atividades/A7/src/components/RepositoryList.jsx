import '../styles/repositories.scss'
import { RespositoryItem } from "./RepositoryItem"

const repository = {
  name: "Atividade",
  description: "Descrição da Atividade",
  link: "https://github.com/AlexYud"
}

const repositoryName = "Atividade 1"

export function RespositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        < RespositoryItem repository={repository} />
        < RespositoryItem repository={repository} />
        < RespositoryItem repository={repository} />
        < RespositoryItem repository={repository} />
      </ul>
    </section>
  )
}