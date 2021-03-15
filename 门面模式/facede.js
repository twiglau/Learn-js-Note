/**
 * 门面模式
 *   作用
 *     简化类的接口
 *     消除类和使用本类的客户端的diamante耦合
 *    通过创建一个简单的门面代码叫做负载,使系统
 *    变得更简单
 */
(function(){
    /**
     *  各种浏览器对于DOM事件注册是不一样的(那么每一个浏览器我们全被看成一个子系统)
     * 程序员如果天天喝这些问题打交道,重点就偏离了原本的业务
     */
    //门面
    function addEventFacede(ele,type,fn){
        if(window.addEventListener) {
            //适用于火狐浏览器
            ele.addEventListener(type,fn,false);
        }else if(window.attachEvent){
            //适用于IE的
            ele.attachEvent("on" + type,fn);
        }else {
            ele["on" + type] = fn;
        }
    }
    document.write("<a id='btn' href='#'>click</a>")
    var ele = document.getElementById("btn");
    addEventFacede(ele,"click",function(){
        alert("启用了吗?")
    })


})()