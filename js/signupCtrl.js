app.controller("signupCtrl",function ($scope,$http,$location,userDataSer) {
  var user={};
  user.username="";
  user.mobile="";
  user.email="";
  user.password="";
  $scope.user = user;
  $scope.submit=function () {
    $http.post("dummyData" , $scope.user).then(function (data) {
      console.log(":)");
    }).catch(function(data){
      console.log(":(")
    })
    userDataSer.user=$scope.user;
    $location.path('/dashboard');
  };

});
