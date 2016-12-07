app.controller('SuggestionController', [
  '$scope',
  '$routeParams',
  'suggestions',
  function ($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];
    
    $scope.addComment = function () {
      if ($scope.body.trim() !== "") {
        let comment = {
          body: $scope.body,
          upvotes: 0 
        };

        $scope.post.comments.push(comment);
        $scope.body = "";
      };
    };

    $scope.upvote = function (comment) {
      comment.upvotes++;
    };
  }
]);
