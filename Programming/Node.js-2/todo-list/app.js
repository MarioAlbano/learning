const express = require("express"); //Importando o Express
const app = express(); //Dentro de app temos todos os métodos referente ao servidor

//Criando uma rota para agir diante de uma determinada ação
app.get("/", (req, res) => {
  res.send("<h1>Minha lista de tarefas!</h1>"); //Enviar uma tag h1
});

//Criando uma nova rota, usando JSON quando acessado o link/json
app.get("/json", (req, res) => {
  res.json({ title: "Título 1", done: "Ainda não" });
});

app.listen(3000, () => {
  console.log("Servidor foi iniciado");
}); //Dando início ao servidor, ouvindo a porta 3000

//Instalaremos o nodemon para não ter que dar reload no servidor (npm install nodemon --save-dev, depois npx nodemon,)

//Instalar postman. Subir servidor (nodemon file_name.js)
