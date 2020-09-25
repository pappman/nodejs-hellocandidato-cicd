const express = require('express')
const app = express()
const port = 8080;

app.listen(port);
console.log(`Acesse http://localhost: ${port}`);
app.get('/', (req, res) => {
  const candidato = process.env.CANDIDATO || 'Emerson Papp';
  res.send(`Bem-vindo ${candidato}!`);
});
