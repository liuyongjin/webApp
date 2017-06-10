//m.provider('ctrl',['$scope','$http',function($scope,$http){
//$http({
//  method:'GET',
//  url:'data.json'
//}).success(function(data,status,headers,config){
//  console.log(data);
//  $scope.users=data;
//}).error(function(data,status,headers,config) {
//  /* Act on the event */
//  console.log('error...');
//});
//}]);
webApp.service('cache',['$cookies',function($cookies){
	this.put=function(key,value){
		$cookies.put(key,value);
	};
	this.get=function(key){
		return $cookies.get(key);
	};
	this.remove=function(key){
		$cookies.remove(key);
	};
}])