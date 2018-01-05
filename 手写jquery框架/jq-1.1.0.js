//$符挂载在window对象上

/*function Person(){  //普通函数  =》 function对象     构造函数    =》类
	this.name = 'jcf';
	this.sun=function(){
		console.log('sun');
	}
}
var a = new Person();
a.sun();*/

function jQuery(arg){
	this.event = [];//this指向
	switch(typeof arg){
		case "function":
//			window.onload = arg;
			myAddevent(window,'load',arg);
		break;
		case "string":
			switch(arg.charAt(0)){
				case "#":
					var obj = document.getElementById(arg.substring(1));//去掉#
					this.event.push(obj);
				break;
				case ".":
					this.event = getClass(document,arg.substring(1)); //去掉.
				break;
				default:
				break;
			}
		break;
		case "object":
		break;
	}
}
function $(arg){
	return new jQuery(arg);   //$
}
//查找class  遍历所有元素    查找指定的 class
function getClass(ohtml,oclass){
	var myElement = ohtml.getElementsByTagName("*");
	var result = [];
	for(var i=0;i<myElement.length;i++){
		if(myElement[i].className == oclass){
			result.push(myElement[i]);
		}
	}
	return result;
}
jQuery.prototype = {
	click:function(fn){
		for(var i = 0;i<this.event.length;i++){
			myAddevent(this.event[i],'click',fn);
		}
	}
};
//给函数绑定事件
function myAddevent(obj,even,fn){
	if(obj.addachEvent){
		obj.addachEvent("on"+even,fn)
	}else{
		obj.addEventListener(even,fn,false);
	}	
}

//低版本:addachEvent();
//obj.addEventListenter(load,fn,false);


//$('.box')   $('#box')   $('span')<=字符串    $(this)  关键字

//console.log($().__proto__);//每个对象里都有，指向原型对象

//继承两种方法
//this  -- new一个实例对象就在栈内存开辟一片空间      占  内存   慎用
//prototype原型对象
//区别？

// 封装:       属性和方法利用this的关键字指向当前的实例对象
//				属性和方法封装在原型对象上面



/*(function(global){
	function jQuery(){   //构造函数
		
	}
	function $(){
		new jQuery();
	}
	global.jQuery = global.$ = $;
})(window);//调用   返回值
$();
*/