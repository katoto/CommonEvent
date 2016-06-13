
// 声明一个对象全局
// 移动端常用的库
window.freFun = {};
// 运动结束触发事件
freFun.transitionEnd = function ( dom ,callback){

	if(typeof dom == 'object'){
		dom.addEventListener('webkitTransitionEnd',function(){
			callback && callback();
		});

		dom.addEventListener('transitionEnd' ,function (){
			callback && callback();
		});
	}
};

//判断是点击事件，还是滑动事件
freFun.tap = function ( dom , callback){
	  if(typeof dom =='object'){
	  	var isMove = false;
	  	var time = 0 ;
	  	dom.addEventListener('touchstart',function(e){
	  		time = Date.now();
	  	});
	  	dom.addEventListener('touchmove',function(e){
	  		isMove = true ;
	  	});
	  	window.addEventListener('touchend',function(e){
	  		// 移动 并且事件小于150ms
	  		if(!isMove && (Date.now()- time )< 150 ){
	  			callback && callback(e);
	  		}
	  	});
	  	isMove = false;
	  	time = 0;
	  }
};

