export interface SetStorage {// Protocolo de implementação que faz a inversão das dependências das camadas DATA e INFRA da lógica de negócio de armazenamento do token
  // tem que ficar na camada de data para poder respeitar the dependency rule
  // "O quadrado tracejado para qual a setinha pequena aponta"
  set: (key: string, value: any) => Promise<void>
}
