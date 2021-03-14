/**
 * 单例模式在JS使用的非常频繁
 * 通过确保单例对象只存在一个实例
 * 你就可以确保自己在所有的代码中使用的是全局资源
 * 2.具有局部变量的强大单体
 */
(function(){
    //模拟一个Ajax操作
    function Ajax() { }
    Ajax.request = function(url,fn) {
        if(true) {
            fn("paramter","paramter01");
        }

    }
    //1.我们通过闭包的原理解决:01例子中出现的问题
    var UserInfo = (function() {
        //利用闭包解决单体有自己的私有局部变量
        var name = "";
        var code = "";
        //利用Ajax访问数据库来取得数据
        Ajax.request("www.baidu.com",function(n,c) {
            name = n;
            code = c;
        })
        return {
            name:name,
            code:code
        }
    })()
    alert(UserInfo.name);
})();