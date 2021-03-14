/**
 * 普通的属性和函数是作用在对象上的
 * 而静态的函数是定义在类上面的
 */
(function() {
    function Person(name,age) {
        this.name = name;
        this.showName = function() {
            alert(this.name);
        }
    }
    //1. 静态函数的写法
    Person.add = function(x,y) {
        return x + y;
    }
    alert(Person.add(1,2));
    //2. 第二种方式
    //用类中类的方式完成每一个对象全拥有相同的属性,跟相同的函数
    var cat = (function(){
        //私有静态属性
        var AGE = 1000;
        //私有函数
        function add(x,y) {
            return x + y;
        }
        return function() {
            this.AGE = AGE;
            this.add = function(x,y) { return add(x,y) } 
            
        }
    })();
    alert(new cat().add(3,4))
    alert(new cat().AGE);

    /**
     * 1.保护内部数据的完整性是封装一大用处
     * 2.对象的重构变得很轻松,(若果没有封装)
     * 3.弱化模块之间的耦合
     * 弊端
     * 私有的方法会变得难以进行单元测试
     * 使用封装意味着与复杂的代码打交道
     */
})();