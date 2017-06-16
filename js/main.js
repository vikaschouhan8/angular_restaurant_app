var app = angular.module("MainModule",["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider.when("/",{
    templateUrl:"templates/frontPage.html"
  })
});

app.config(function ($routeProvider) {
  $routeProvider.when("/signup",{
    templateUrl:"templates/signup.html",
    controller:"signupCtrl"
  })
});

app.config(function ($routeProvider) {
  $routeProvider.when("/login",{
    templateUrl:"templates/login.html",
    controller:"loginCtrl"
  })
});

app.config(function ($routeProvider) {
  $routeProvider.when("/dashboard/menu/:param",{
    templateUrl:"templates/addMenu.html",
    controller:"menuController"
  })
});

app.config(function ($routeProvider) {
  $routeProvider.when("/dashboard/table",{
    templateUrl:"templates/addTable.html",
    controller:"tableController"
  })
});

app.config(function ($routeProvider) {
  $routeProvider.when("/dashboard",{
    templateUrl:"templates/dashboard.html",
    controller:"dashCtrl"
  })
});

