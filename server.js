const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Rotas de livros',
    '/autores': 'Rotas de autores',
    '/editoras': 'Rotas de editoras',
    '/sobre': 'Rotas de sobre'
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => console.log(`Servidor executando em: http://localhost:${port}`))