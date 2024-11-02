# API REST para Gerenciamento de Alunos

Esta é uma API RESTful desenvolvida em Node.js com Express e SQLite, destinada ao gerenciamento de informações de alunos em uma instituição de ensino.

## Funcionalidades

- **Criar Aluno**: Adiciona um novo aluno à base de dados.
- **Listar Alunos**: Recupera todos os alunos cadastrados.
- **Atualizar Aluno**: Modifica as informações de um aluno existente.
- **Remover Aluno**: Exclui um aluno da base de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para desenvolvimento de aplicações web.
- **SQLite**: Sistema de gerenciamento de banco de dados leve.
- **Swagger**: Documentação da API.

## Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [SQLite](https://www.sqlite.org/)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/AllyssonCidade/api-alunos.git
   cd seu-repositorio
   
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. A API estará disponível em `http://localhost:3000`.

## Rotas

### Criar Aluno

- **Endpoint**: `POST /alunos`
- **Body**:
  ```json
  {
    "nome": "Nome do Aluno",
    "email": "email@exemplo.com",
    "nome_curso": "Nome do Curso"
  }
  ```

### Listar Alunos

- **Endpoint**: `GET /alunos`

### Atualizar Aluno

- **Endpoint**: `PUT /alunos/:id`
- **Body**:
  ```json
  {
    "nome": "Novo Nome",
    "email": "novoemail@exemplo.com",
    "nome_curso": "Novo Curso"
  }
  ```

### Remover Aluno

- **Endpoint**: `DELETE /alunos/:id`

## Documentação

A documentação da API está disponível através do Swagger. Você pode acessá-la em `http://localhost:3000/docs`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Autores
  [Alan Leandro](https://github.com/alanleandro23).
  
  [Allyson Cidade](https://github.com/AllyssonCidade).
  
  [Levy Carlo](https://github.com/levyycarlo).
  
  [Matheus Quevedo](https://github.com/matheusquevedodev).
  
  [Yan Dart](https://github.com/YLeall).



