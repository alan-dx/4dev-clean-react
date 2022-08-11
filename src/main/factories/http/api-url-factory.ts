export const makeApiUrl = (path: string): string => {
  // A camada main faz a comunicação entre todos os componentes
  // makeLogin é responsável por injetar as dependências do Login

  return `http://fordevs.herokuapp.com/api${path}`
}
