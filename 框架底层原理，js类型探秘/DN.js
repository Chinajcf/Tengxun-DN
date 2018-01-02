(function(root,factory){
	//为了适应同步模块机制以及 Es6  import模块化机制添加的判断和功能
	if(typeof module === 'object' && typeof module.exports === 'object'){
		module.exports = factory();
	}else{
		root.DN = root.$ = factory();
	}
//	root.DN = root.$ = factory();
})(this,function(){//this=>window对象
	var DN = {
		type:function(obj){
			if(obj == null){
				return obj + "";//解决ie6
			}
			return typeof obj === "object" || typeof obj ==="function" ?class2type[Object.prototype.toString.call(obj)] || "object" : typeof obj;
		},
		isFunction:function(){
			return this.type(obj) === 'function';
		}
	};
	
	var class2type = {};
			//生成class2type的类型映射
	var __str = "Boolean Number String Function Array Date RegExp Object Eorror Null Undefined"
	__str.split(" ").map(function(item ,index){
		class2type['[object' + item + "]"] = item.toLowerCase();
	})
	return DN;
})
