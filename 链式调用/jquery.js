/**
 * 模仿jquery()的链式调用
 */

//为了类(Function)扩展函数,我们定义一个静态函数
Function.prototype.method = function(name,fn){
    this.prototype[name] = fn;
    return this;
};
(function() {
    function _$(els){};
    //准备方法
    _$.onReady = function(obj,fn){
        if(obj){
            obj.$ = function() {
                return new _$(arguments);
            }
        }else {
            //按需求把对象(_$)注册到window上
            window.$ = function() {
                return new _$(arguments);
            }
        }
        fn();
    }
    //链式的对象增加jquery库提供的操作函数
    _$.method("addEvent",function(type,fn){
        fn();
    }).method("getEvent",function(fn,e){
        fn();
    }).method("addClass",function(className){
        fn();
    }).method("removeClass",function(className){
        fn();
    }).method("replaceClass",function(oldClass,newClass){
        fn();
    }).method("getStyle",function(el,fn) {
        fn();
    }).method("setStyle",function(el,fn){
        fn();
    }).method("load",function(url,fn){
        fn();
    })

    //开始使用
    _$.onReady(function(){
        $("div01").addEvent("click",function(){
            alert("click Event");
        })
    })
})()