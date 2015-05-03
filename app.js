var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    app = express(),
    server;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', routes.index);
app.get('/lista', routes.lista);
app.post('/grava', routes.grava);
app.delete('/filme/:id', routes.deleta);
app.put('/filme', routes.atualiza);

app.set('port', process.env.PORT || 3000);

server = app.listen(app.get('port'), function() {
  console.log('Servidor foi iniciado na porta ' + server.address().port);
});
