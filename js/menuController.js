app.controller("menuController",function($scope,$routeParams,$http,$location){
  input = $routeParams.param;
  menu={};
  if(input=="veg")
  {
    menu.Title="veg";

  }
  else if(input=="nonVeg")
  {
      menu.Title="nonveg";
  }
  else if(input=="starters")
  {
        menu.Title="starters";
  }
  else {
      menu.Title="";
  }

  menu.item={};
  $scope.menu=menu;
  $scope.sendData=function () {

      $http.post("dummyData" , $scope.menu).then(function (data) {
        console.log($scope.menu);
      }).catch(function(data){
        console.log($scope.menu);
      })
      $location.path('/dashboard');

  };
});
