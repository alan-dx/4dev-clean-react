export interface SetStorage {// Protocolo de implementação que faz a inversão das dependências das camadas DATA e INFRA da lógica de negócio de armazenamento do token
  // tem que ficar na camada de data
  set: (key: string, value: any) => Promise<void>
}
