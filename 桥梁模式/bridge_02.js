/**
 * 特权函数
 */
(function(){
    var p = function(){
        var add = function(){
            // ...进行复杂的数学操作
        }
        /**
         * 这是一个信息全封闭的类
         * 但是它的内部进行过于复杂的业务操作
         * 那么我建立一个特权函数,使之调用起来特别方便
         */
        this.bridge = function(){
            return {
                bridgeAdd:function(){
                    //...执行前
                    add(3,3)
                    //...执行后
                }
            }
        }

    }
    //2.桥梁还可以把多个类进行桥接(链接)
    var class1 = function(a,b) {
        this.a = a;
        this.b = b;
    }
    var class2 = function(c) {
        this.c = c;
    }
    var bridgeClass = function() {
        this.one = new class1(1,2);
        this.two = new class2(45);
    }
    /**
     * 以上的理念不是门面模式吗?
     * 它的目的是在与class1和class2能独立的修改,实现松耦合
     * 而门面模式的意义在于调用的方便
     */
})()