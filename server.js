const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const {
  create,
  update,
  remove,
  findAll,
} = require("./repositories/alunoRepository");

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get("/alunos", (req, res) => {
  try {
    const alunos = findAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao retornar alunos", error });
  }
});
