const { v4: uuidv4 } = require("uuid");

let alunos = [];

module.exports = {};

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


function findAll() {
  return [...alunos];
}
