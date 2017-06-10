//home中的指令
webApp.directive('homeHeader', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/homeHeader.html'
	}
});
webApp.directive('homeContent', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/homeContent.html'
	}
});
webApp.directive('homeFooter', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/homeFooter.html',
		scope: {
			data: '=data'
		}
	}
});
//home-course-detial中的指令
webApp.directive('detialTop', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/detialTop.html',
		scope: {
			img: '=img'
		},
		controller: ['$scope', '$state', function($scope, $state) {
			$scope.backHome = function(url) {
				$state.go(url);
			}
		}]

	}
});
webApp.directive('detialFooter', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/detialFooter.html'
	}

});
//classification中的指令
webApp.directive('classificationContent', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/classificationContent.html',
		scope: {
			data: '=',
			data1: '='
		},
		//		link:function($scope){
		//			console.log();
		//		}
		controller: ['$scope', function($scope) {
			$scope.showDetial = function(index) {
				$scope.ishighlight = index;
				$scope.content = $scope.data[index];
				//				console.log($scope.content);
			}
			$scope.$watch('data', function(newVal) {
				if(newVal) {
					$scope.showDetial(0);
				}
			});
		}]
	}
});
//search中的指令
webApp.directive('searchContent', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/searchContent.html',
		scope: {},
		controller: ['$scope', function($scope) {
			$scope.name = [];
			$scope.search = function() {
				console.log($scope.name);
			};
			$scope.add = function(index) {
				$scope.name = $scope.data[index].name;
			}
			$scope.cancel = function() {
				$scope.name = [];
			}
			$scope.data = [{
				name: 'excel'
			}, {
				name: '运营'
			}, {
				name: 'ppt'
			}, {
				name: '物理'
			}];
		}]
	}
});
webApp.directive('searchBottom', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/searchBottom.html',
		scope: {},
		controller: ['$scope', function($scope) {
			$scope.cancel = function(index) {
				$scope.data.splice(index, 1);
			};
			$scope.clear = function() {
				$scope.data = [];
			}
			$scope.data = [{
				name: 'excel'
			}, {
				name: 'ppt'
			}];
		}]
	}
});
//user中的指令
webApp.directive('userContent', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/userContent.html'
	}
})
webApp.directive('userBottom', function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: './tpls/directive/userBottom.html',
		controller: ['$scope', 'cache', '$state', function($scope, cache, $state) {
			$scope.loginout = function() {
				cache.remove('phone');
				cache.remove('password');
				$state.go('home');
			}

		}]
	}
})