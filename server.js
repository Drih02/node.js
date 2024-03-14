import http from "http";

const PORT= 3000;
const rotas = {
    "/":"Bem Vindo a Rota Inicial",
    "/livros":"Rota Livro",
    "/autores":"Rota Autores"
}

const server = http.createServer((req, res)  => {
    res.writeHead(200,{'Content-type':'text/plan'});
    res.end(rotas[req.url]);
});

    server.listen(PORT,() => {
        console.log("Servidor escutando!")
    });


