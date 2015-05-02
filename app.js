var express = require('express'),
    path = require('path'),
    routes = require('./routes'),
    app = express(),
    server;

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', routes.index);

app.set('port', process.env.PORT || 3000);

server = app.listen(app.get('port'), function() {
  console.log('Servidor foi iniciado na porta ' + server.address().port);
});
