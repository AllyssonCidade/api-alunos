const { v4: uuidv4 } = require("uuid");
const db = require('../database');
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
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM alunos';

    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM alunos WHERE id=?";
    db.get("SELECT * FROM alunos WHERE id=?", [id], (err, aluno) => {
      if (err) {
        console.error(err.message);
        return reject(err);
      }
      if (!aluno) {
        return reject(new Error("Aluno não encontrado"));
      }
      db.run(sql, [id], (err) => {
        if (err) {
          console.error(err.message);
          return reject(err);
        }
        resolve({ message: "Aluno removido com sucesso" });
      });
    });
  });
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

