app.controller("tableController",function functionName($scope,$http,$location) {
  $scope.table={};
  $scope.sendData=function () {

      $http.post("dummyData" , $scope.table).then(function (data) {
        console.log($scope.table);
      }).catch(function(data){
        console.log($scope.table);
      })
      $location.path('/dashboard');

  };
})
