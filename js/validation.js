webApp.config(['$validationProvider',function($validationProvider){
	var expression={
		phone:/[\d]{3}/,
		password:function(value){
			value=value+'';
			return value.length>1;
		}
	};
	var defaultMsg={
		phone:{
			success:'',
			error:'至少3位数字'
		},
		password:{
			success:'',
			error:'长度至少2位'
		}
		
	};
	$validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);