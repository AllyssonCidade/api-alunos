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
