module.exports = {
  roots: ['<rootDir>/src'], // Diretório raiz do jest
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}', // Coletar o coverage de dentro da pasta src, aplicando para qualquer arquivo
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/presentation/components/router/**/*',
    // '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts' // Não fazer coverage de arquivos d.ts
  ],
  coverageDirectory: 'coverage', // Pasta onde os dados de coverage serão salvos
  // setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  // testPathIgnorePatterns: [
  //   '<rootDir>/node_modules/',
  //   '<rootDir>/tests/e2e/cypress'
  // ],
  testEnvironment: 'jsdom', // O ambiente de teste na web, obviamente, utiliza o jsdom ao invés do jest
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'// Antes de executar o teste o jest vai converter todos os arquivos ts e tsx para ts-jest
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1', // Mapeando os arquivos para o jest interpretar a modularização das paths feita com TS
    '\\.scss$': 'identity-obj-proxy'// Essa lib vai identificar os arquivos .scss e converter para um dummy (um objeto vazio ou formato que vai ser ignorado) apenas para que o jest n tente testar eles
  }
}
