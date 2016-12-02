app.controller('HomeController', [
  '$scope',
  'suggestions',
  ($scope, suggestions) => {
    $scope.posts = suggestions.posts;
  }
]);
