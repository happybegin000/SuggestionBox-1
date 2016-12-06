const app = angular.module('SuggestionBox', ['ngRoute']);

app.config($routeProvider => {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/'
    })
});

