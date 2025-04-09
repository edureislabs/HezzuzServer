const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));

// Rota principal
app.get('/', (req, res) => {
    res.render('index', {
        usuario: '',
        botaoTexto: 'Login'
    });
});

// Rota de login
app.post('/login', (req, res) => {
    const { usuario } = req.body;
    console.log(`Usuário logado: ${usuario}`);
    res.render('index', {
        usuario,
        botaoTexto: 'Logado!'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
