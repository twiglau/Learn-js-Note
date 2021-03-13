(function(){
    function Shape() {
        var x = 1;
        var y = 2;
    }
    //如何实例化对象 new 关键字
    var aShape = new Shape();
    //在类内部,用var 定义的是私有变量,如何才能定义
    //共有变量?
    function Circle() {
        this.x = 1;
        this.y = 2;
    }

    //处理定义私有变量外还可以用var定义私有函数
    function range() {
        var draw = function() {
             //私有函数
        }
        this.animation = function() {
             //外界可以看到共有函数
        }
    }
    //用js 模仿OOP编程
    function Triple(ax,ay) {
        var x = 0;
        var y = 0;
        var init = function() {
            x =ax;
            y = ay;
        }
        init();
        this.getX = function () {  return x; }
        

    }
    var d = new Triple(2,4);
    //获取到了局部变量
    alert(d.getX())
    //模仿OOP编程的构造函数,
    //下面我们来写静态属性和静态方法
    function Person(){ this.Name = "xxxxxxx"};
    //静态变量
    Person.age = 0;
    //静态方法,无论哪个对象,实例都可以调用出来
    Person.showName = function(obj) {
          alert(obj.name);
    }
    alert(Person.showName(new Person()))

    //简单类定义方法
    var a = {}; //单体
    var array = [];
    a["name"] = "sldkalfd";
    

})()