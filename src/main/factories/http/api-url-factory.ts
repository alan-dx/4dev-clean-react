export const makeApiUrl = (): string => {
  // A camada main faz a comunicação entre todos os componentes
  // makeLogin é responsável por injetar as dependências do Login

  return 'http://fordevs.herokuapp.com/api/login'
}
