app.controller('SuggestionController', [
  '$scope',
  '$routeParams',
  'suggestions',
  function ($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];
    
    $scope.addComment = function () {
      let comment = {
        body: $scope.body,
        upvotes: []
      };

      $scope.post.comments.push(comment);
    };

    $scope.upvote = function (comment) {
      comment.upvotes++;
    };
  }
]);
