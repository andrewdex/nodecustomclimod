mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

  when('/', {
    templateUrl: 'app/components/main/mainView.html'
  }).otherwise({
    redirectTo: '/'
  });
}]);
