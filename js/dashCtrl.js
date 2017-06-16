app.controller("dashCtrl",function ($scope,userDataSer) {
  $scope.user=userDataSer.user;
  $scope.restorents=userDataSer.restorents;
})
