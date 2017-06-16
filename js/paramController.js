app.controller("paramController",function ($scope,$routeParams) {
  $scope.value=$routeParams.param;
});
