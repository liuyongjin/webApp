webApp.filter('f',function(){
	return function(val,str){
		str=str?str:' | ';
		var arr=val.split('');
		arr.splice(2,0,str);
		val=arr.join('');
		return val;
	}
})