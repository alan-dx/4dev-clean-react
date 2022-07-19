module.exports = {
  roots: ['<rootDir>/src'], // Diretório raiz do jest
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'// Coletar o coverage de dentro da pasta src, aplicando para qualquer arquivo
    // '!<rootDir>/src/main/**/*',
    // '!<rootDir>/src/**/index.ts',
    // '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage', // Pasta onde os dados de coverage serão salvos
  // setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  // testPathIgnorePatterns: [
  //   '<rootDir>/node_modules/',
  //   '<rootDir>/tests/e2e/cypress'
  // ],
  testEnvironment: 'node',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'// Antes de executar o teste o jest vai converter todos os arquivos ts e tsx para ts-jest
  }
  // moduleNameMapper: {
  //   '@/tests/(.*)': '<rootDir>/tests/$1',
  //   '@/(.*)': '<rootDir>/src/$1',
  //   '\\.scss$': 'identity-obj-proxy'
  // }
}
