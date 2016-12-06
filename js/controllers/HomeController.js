app.controller('HomeController', [
  '$scope',
  'suggestions',
  function ($scope, suggestions) {
    $scope.posts = suggestions.posts;

    $scope.addSuggestion = function () {
      if ($scope.title.trim() !== "") { 
        let suggestion = {
          id: $scope.posts.length,
          title: $scope.title,
          upvotes: 0,
          comments: []
        };

        $scope.posts.push(suggestion);
        $scope.title = "";
      };
    };

    $scope.upvote = function (post) {
      post.upvotes++;
    };
  }
]);
