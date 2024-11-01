const { v4: uuidv4 } = require("uuid");

let alunos = [];

function create({ nome, email, nome_curso }) {
  const id = uuidv4();
  const aluno = {
    id,
    nome: nome,
    email: email,
    nome_curso: nome_curso,
  };
  alunos.push(aluno);
  return { id, nome, email, nome_curso };
}

function update(id, { nome, email, nome_curso }) {
  const index = alunos.findIndex((aluno) => aluno.id === id);
  if (index === -1) {
    return null;
  }
  const updatedAluno = {
    id,
    nome,
    email,
    nome_curso,
  };
  alunos[index] = updatedAluno;
  return updatedAluno;
}

function remove(id) {
  const index = alunos.findIndex((aluno) => aluno.id === id);
  if (index === -1) {
    return null;
  }
  const removedAluno = alunos[index];
  alunos.splice(index, 1);
  return removedAluno;
}

function findAll() {
  return [...alunos];
}

module.exports = {
  create,
  update,
  remove,
  findAll,
};
