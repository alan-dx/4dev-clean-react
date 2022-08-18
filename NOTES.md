# LIBS
  1. git-commit-msg-linter -D => dep de desenvolvimento utilizada para auxiliar nos commits;
  2. husky => Utilizada para executar o lint-staged w oa git hooks;
  3. lint-staged => Utilizada para aplicar scripts em arquivos que esteja na área staged (após git add) do git, evitando commit defeituosos. Ela trava o commit que não passar na execução dos scripts definidos em .lintstagedrc.json;

# TESTES
  ## HUSKY
    1. Essa lib executa scripts personalizados em fase pré-determinadas, como o pre-commit e pre-push". Por exemplo, na fase pre-push desse projeto foi configurado para que ele rode o script de "test:ci". Em conjunto com outras libs, como o lint-staged, pode ser configurado para que execute um conjunto de scripts;
   ## LINT-STAGED
    1. Essa lib, em conjunto com o husky, executa um conjunto de scripts configurados por formato de arquivo em uma determinada fase configurada no husky. Por exemplo, nesse projeto na fase de pre-commit foi configurado (em .lintstagedrc.json) para rodar os scripts de "eslint 'src/**' --fix" e "npm run test:staged" na fase de pre-commit configurado pelo husky (.huskyrc.json)

  1. "test": "jest --passWithNoTests" => Se não houver nenhum teste relacionado aos arquivos que foram commitados, a execução deve passar sem erros;
  2. "test:staged": "npm test -- --findRelatedTests" => Vai executar apenas os testes que sejam relacionados aos arquivos que sofreram alterações. A flag '--' serve para herdar o comportamento da script "test". Esse script staged será executado pelo lintstaged para rodar na fase de pre-commit, automatizando o processo, ou seja, sempre que for realizado um commit o script de test:staged será executado validando e executando os testes relacionado aos arquivos modificados;
  3. "test:ci": "npm test -- --coverage" => Ira realizar um test geral na aplicação gerando um arquivo de coverage. Nesse app, esse test foi configurado para realizar esse teste na fase pre-push;

# CAMADAS (LAYERS)
  1. DOMAIN => Detém as regras de negócio do sistema (São abstrações);
  2. DATA => Detém a implementação dos casos de uso (useCases) criados na camada de DOMAIN. Não só a implementação mas tbm os testes relacionados

# WEBPACK
  1. Webpack é quem faz o bundle da aplicação, gerando o bundle.js com todo o código fonte da App. Além disso, com o WebPack dev Server ele irá levantar um servidor local de desenvolvimento;
  2. Loaders => O webpack utilizar os loaders de cada formato de arquivo para converter os arquivos que ele irá tratar;

# TRAVIS CI
  1. Ferramenta online para implementação de fluxos de ci para executar comandos e scripts de teste;
   
# COVERALLS
  1. Ferramenta online que armazena todos os coverages do projeto;

# SCRIPTS
  - "check-update": "yarn upgrade-interactive --latest" => Ferramenta que verifica se as dependências estão atualizadas