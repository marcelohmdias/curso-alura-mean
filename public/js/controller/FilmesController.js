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
        console.log(retorno);
    });
  };
}
