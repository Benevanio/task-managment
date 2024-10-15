## Descrição

Este projeto é uma API RESTful para gerenciar tarefas, construída usando o **NestJS** e **TypeORM** com um banco de dados **PostgreSQL**. A API permite operações CRUD (Criar, Ler, Atualizar e Deletar) para tarefas.

## Tecnologias Utilizadas

- **NestJS**: Framework para construir aplicações Node.js eficientes e escaláveis.
- **TypeORM**: ORM para TypeScript e JavaScript que suporta vários bancos de dados, incluindo PostgreSQL.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Postman**: Ferramenta para testar APIs.

## Estrutura do Projeto

```
/crud
  ├── /src
  │   ├── /tasks
  │   │   ├── /controller
  │   │   │   └── task.controller.ts
  │   │   ├── /service
  │   │   │   └── task.service.ts
  │   │   ├── task.entity.ts
  │   │   └── task.module.ts
  │   ├── app.controller.ts
  │   ├── app.module.ts
  │   ├── app.service.ts
  │   └── main.ts
  ├── package.json
  ├── docker-compose.yml
  └── Dockerfile
```

## Requisitos

- Node.js (>= 19.x)
- PostgreSQL (>= 13.x)
- Docker e Docker Compose 

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Benevanio/task-managment.git
   cd crud
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configuração do Banco de Dados**:

   Você pode configurar o banco de dados PostgreSQL diretamente ou usar o Docker:

   - **Usando Docker**:
     Execute o comando a seguir para iniciar o banco de dados:

     ```bash
     docker-compose up -d
     ```

   - **Configuração Manual**:
     Crie um banco de dados PostgreSQL chamado `crud` e um usuário com permissões adequadas.

4. **Configuração das Variáveis de Ambiente**:

   Configure as variáveis de ambiente no seu arquivo `.env`:

   ```plaintext
   DB_TYPE=postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_NAME=crud
   ```

5. **Executar a Aplicação**:

   Inicie o servidor:

   ```bash
   npm run start:dev
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Endpoints da API

### 1. **Criar Tarefa**

- **Método**: `POST /tasks`
- **Corpo**:
  ```json
  {
      "title": "Nova Tarefa",
      "description": "Descrição da tarefa",
      "status": 1,
      "createdAt": "2024-10-14T00:00:00Z",
      "updatedAt": "2024-10-14T00:00:00Z",
      "createdBy": "usuario@exemplo.com"
  }
  ```

### 2. **Listar Tarefas**

- **Método**: `GET /tasks`

### 3. **Buscar Tarefa por ID**

- **Método**: `GET /tasks/:id`

### 4. **Atualizar Tarefa**

- **Método**: `PUT /tasks/:id`
- **Corpo**: (mesmo formato do POST)

### 5. **Deletar Tarefa**

- **Método**: `DELETE /tasks/:id`

## Testes com Postman

O Postman foi utilizado para testar todos os endpoints da API. Você pode importar a coleção de requisições no Postman:

1. **Exportar Coleção**: 
   Exporte a coleção de requisições do Postman (arquivo `.json`) para facilitar os testes.

2. **Executar Testes**:
   Cada requisição inclui testes automatizados para verificar se os endpoints estão funcionando conforme o esperado.

## Testes com Newman

Você pode executar os testes definidos no Postman usando o Newman, que é um CLI para Postman.

### Instalação do Newman

```bash
npm install -g newman
```

### Execução de Testes

```bash
newman run Teste-Tecnico-Sysmap.postman_collection.json
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou fazer um *pull request*.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
