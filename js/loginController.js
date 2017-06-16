app.controller('loginCtrl',function($scope, $location, $rootScope,$http,userDataSer) {
	$scope.submit = function(){

		if($scope.user.username == 'admin' && $scope.user.password == 'admin'){
			$scope.user.email="admin@admin.com";
			$scope.user.mobile="100100100100";
			userDataSer.user=$scope.user
			userDataSer.loggedIn = true;
			$location.path('/dashboard');
		}else{
			alert("Wrong username or password!!!!!!!!!!")
		}
	}
});
