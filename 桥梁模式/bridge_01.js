/**
 * 1.桥梁模式作用在于将抽象与实现隔离开来,以便两者单独的变化
 * 这种模式对于js中常见的事件驱动编程有很大的好处
 */
(function(){
    //一个页面选择宠物的例子
    //伪代码
    btn.addEvent(ele,"click",getPetByName);
    function getPetByName(e) {
        var id = this.id;
        syncRequest("GET","pet.action?id=" + id,function(pet){
            console.log("request pet" + pet.response)
        })
    }
    /**
     * 这种做法是你在页面有一个按钮,单击的话会触发后面的请求
     * 如果你想对这个方法进行单元测试
     * 
     * 1.用户登录 2.到该页面 3.单击按钮
     * 如果需要进行效能层次上的单元测试,肯定不合适
     */
    //第二种做法(用简单的桥梁模式来解决)
    function getPetByName(id,callback) {
        var id = this.id;
        syncRequest("GET","pet.action?id=" + id,function(pet){
            callback(pet);
        })
    }
    //定义一个桥梁:抽象和实现相互联系的一起
    addEvent(ele,"click",getPetPyNameBridge)
    function getPetPyNameBridge() {
        getPetPyName(this.id,function() {
            console.log("request pet" + pet.responseText);
        })

    }
    /**
     * 以上这种做法是API和展现层完全分离
     * API和展现层可以灵活的变动
     * 这个模式在Ext.js项目开发是很常用
     */
    //桥梁模式的其他用途
    //特权函数
    //当你的接口过于复制的时候,把原本复杂的接口用桥梁的模式抽取出一大部分的函数整合起来,
    //使之客户端非常容易的调用
})()