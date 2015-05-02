exports.index = function (req, res) {
  res.render('index');
}

exports.lista = function (req, res) {
  res.json({
    titulo: 'Gangues de Nova Iorque',
    diretor: 'Martin Scorsese',
    ano: 2002
  });
};

exports.grava = function (req, res) {
  var filme = req.body;

  console.log(filme);

  res.send('Filme ' + filme.titulo  + ' recebido no servidor.');
};
