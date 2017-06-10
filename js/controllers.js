//home控制器
webApp.controller('homeCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./data/mainData.json').success(function(response) {
		//		console.log(response);
		$scope.data = response;
	})
}]);
//classification控制器
webApp.controller('classificationCtrl', ['$scope','$http', function($scope,$http) {
		$http({
			url: './data/classification.json',
			method: 'GET'
		}).success(function(response) {
			$scope.data = response;
		}).error(function(err){
		});
		$http({
			url: './data/classification1.json',
			method: 'GET'
		}).success(function(response) {
			$scope.data1 = response;
		});
}]);
//user控制器
webApp.controller('userCtrl', ['$scope','cache',function($scope,cache) {
	if(cache.get('phone')){
		console.log(cache.get('phone'));
		$scope.phone=cache.get('phone');
	}
}]);
//search控制器
webApp.controller('searchCtrl', ['$scope', function($scope) {

}]);
//courseDetial控制器
webApp.controller('courseDetialCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
	$http.get('./data/mainData1.json?id=' + $state.params.id).success(function(response) {
		//		console.log(response);
		//		$scope.img=response[0].imgSrc;
		angular.forEach(response, function(value, key) {
//			console.log(response[key]);
			if(response[key].id === $state.params.id) {
				$scope.img = response[key].imgSrc;
			}
		})
		//		console.log($state.params.id);
	})
}]);
//detial中的子路由控制器
//webApp.controller('courseDetialCatalogCtrl', ['$scope', function($scope) {
//
//}]);
//webApp.controller('courseDetialDetialCtrl', ['$scope', function($scope) {
//

//}]);
//login控制器
webApp.controller('loginCtrl', ['$scope','cache','$state', function($scope,cache,$state) {
	$scope.user={};
	$scope.submit=function(){
		cache.put('phone',$scope.user.phone);
		cache.put('password',$scope.user.password);
		$state.go('home');
	}
}]);
webApp.controller('registerCtrl', ['$scope','$http','$interval','$state','cache',function($scope,$http,$interval,$state,cache) {
	//提交
	$scope.user={};
	$scope.submit=function(url){
		console.log($scope.user);
		$state.go('home');
		cache.put('phone',$scope.user.phone);
		cache.put('password',$scope.user.password);
	}
	//验证码
	var count=60;
	$scope.send=function(){
		$http.get('data/code.json').success(function(response){
			if(1===response.state){
				$scope.time='60s';
				var interval=$interval(function(){
					if(count<=0){
						$interval.cancel(interval);
						$scope.time='';
						return;
					}
					count--;
					$scope.time=count+'s';
				},1000);
			}
		})
	}
}]);
//register控制器