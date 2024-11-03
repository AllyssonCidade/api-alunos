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

app.get("/alunos", async (req, res) => {
  try {
    const alunos = await findAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao retornar alunos", error: error.message });
  }
});

app.delete("/alunos/:id", async (req, res) => {
  const {id} = req.params;
  try {
  const result = await remove(id);
  res.json(result);
  } catch (erггог) {
  if (error.message === "Aluno não encontrado") {
  res.status(404).json({ message: error.message });
   } else {
  res
  .status(500)
  .json({ message: "Erro ao remover aluno", error: error.message });
     }
    }
  });
  app.listen(port, () => {
  console.log('Server started on port ${port}');
   });
