function FilmesController($http, $scope) {
  $http.get('/lista')
    .success(function (retorno) {
      $scope.filmes = retorno.filmes;
  });

  function Filme() {
    this.titulo = '';
    this.diretor = '';
    this.ano = '';
  }

  $scope.filme = new Filme();

  $scope.adicionaFilme = function () {
    $http.post('/grava', $scope.filme)
      .success(function (retorno) {
        $scope.filmes.push(retorno);
        $scope.filme = new Filme();
    });
  };

  $scope.mostraFilme = function (filme) {
    $scope.filmeSelecionado = filme;
  };

  $scope.deletaFilme = function (filme) {
    $http.delete('/filme/' + filme._id).success(function (retorno) {
      $scope.filmeSelecionado = null;
      var index = $scope.filmes.indexOf(filme);
      $scope.filmes.splice(index, 1);
    });
  };
}
