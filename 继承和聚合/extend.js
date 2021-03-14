/**
 * 继承
 */
(function(){
    //创建一个人员类
    function Person(name) {
        this.name = name;
    }
    //创建教师类
    function Teacher(name,books) {
         //如何做继承
         //1.call 方法可以将一个函数的对象上下文
         //从初始化变成有this来决定
         //2.调用Person的构造函数,因为Person没有new,所以它是个空对象
         //相当于java中super函数
         Person.call(this,name);
         this.books = books;
    }
    //使老师类继承人员类
    Teacher.prototype = new Person();
    Teacher.prototype.constructor = Teacher;
    //Teacher 扩展一个方法
    Teacher.prototype.getBook = function() {
        return this.name + " " + this.books;
    }

    //测试
    var jim = new Teacher("JIM","ebook");
    // alert(jim.getBook());

 
    /**
     * 创建Extend函数,为了程序中所有的继承操作
     */
    function extend(subClass,superClass) {
        //1.让子类的原型类属性等于父类的原型属性
        //初始化一个中间空对象,为了转换主副类关系
        var F = function(){};
        F.prototype = superClass.prototype;
        //2.让子类继承自F
        subClass.prototype = new F();
        subClass.prototype.constructor = subClass;
        //3.为子类增加超类的属性,对真正子类原型的持有
        subClass.superClass = superClass.prototype;
        //4.正加一个保险机制,防止原型类时超类Object时,那么也要
        // 把超类的构造函数级别降下来
        // 超类原型的构造函数,原型链上的构造函数降低到本类中来.
        if(superClass.prototype.constructor == Object.prototype.constructor) {
            superClass.prototype.constructor = superClass;
        }
    }
    //问题:为什么通过中间空对象?
    // 1. 如果让子类直接继承自父类,那么相应的在实例化子类的时候,要向父类传递些参数
    // 1.1 extend 函数代码里面就要包含  Author.superClass.constructor.call(this,name); 
    //     这类代码
    // 2. 空对象是没有参数的

    //问题: why 对子类扩展属性 superClass?
    // 1.对原型链向上的引用
    // 2.Author.superClass.constructor.call(this,name); 这样实现松耦合.

    //测试
    function Author(name,books) {
        Author.superClass.constructor.call(this,name);
        //Person.call(this,name);
        this.books = books;
        this.getNB = function() {
            return this.name + " " + this.books;
        }
    }
    //继承 - 松耦合
    extend(Author,Person);

    //测试
    var perter = new Author("perter","Kill Know Bird");
    
    alert(perter.getNB());

})();