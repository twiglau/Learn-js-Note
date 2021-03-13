/**
 * js 原型模式(prototype)
 * 1.原型是一个对象,其他对象可以通过他实现属性的继承
 * 所有的对象在默认的情况下都有一个原型,因为原型本身
 * 也是对象,所以一个类的真正原型是被类的
 * 内部的(Prototype)属性所持有
 * 
 * 2.什么可以称之为对象
 * 在js中,一个对象就是任何的,无序的键值对的集合 function var a = {}
 * 如果它不是一个主数据类型(undefined,null,boolean,number,String)
 * 其他的通通叫做对象
 */
(function(){
    /**
     * javascript 中的原型(prototype)是和函数(function紧密连接的)
     * var o = {} 它不是用 function ,他有原型吗?
     * 答:必须的
     * 每一个通过函数和new操作符生成出来prototype的对象都持有一个属性__proto__,
     * 这个属性保存了创建它的构造函数的prototype的原型的引用
     * 
     */
    function person() {} //定义一个空对象
    person.prototype.name = "usdt";
    person.prototype.showName = function() {
        //这个this表示调用本函数的一个具体实例化的类
        alert(this.name);
    }
    new person().showName();

    var cat = {}; //空类
    //1.不能直接使用
    // prototype undefined
    // cat.prototype.name = ""
    //默认隐藏的调用下面的代码,
    //2. 这中方式和浏览器相关,有的起作用
    //通过这种方式,可以得到cat 对象他的原型链的上级,的引用
    Object.getPrototypeOf(cat).name = "yyyyyy";

    //3.显式调用
    cat.__proto__.master = "yi";
    // 4. 隐式调用 以上方式测试
    // 等效于 cat.__proto__.age = 2;
    cat.age = 2;
    cat["sex"] = "man";
    alert(cat.name + " " + cat.age + " " + cat["sex"] + " " + cat.master);

    /**
     * 利用原型模式实现简单的继承
     */
    function per() {
        this.getName = function(str) {
            alert(str);
        }
    }
    per.prototype.getAge = function(age) {
          alert(age);
    }
    var a = {};//空对象
    //1.实现 a 对象所持有的原型的索引指向per对象所持有的原型的索引
    a.__proto__ = per.prototype;
    a.getAge(2);
    //1.1 如果per是空对象,那么通过以上方式,a就实现完全持有per的原型
    //1.2 示例:
    //class01.js:64 Uncaught TypeError: a.getName is not a function
    // a.getName("你引用不了的,哈哈哈")

    /**
     * 通过简单的方式实现继承
     * JS中是无法实现多继承的
     */
    var b = {};
    //1.若果想让b 完全继承自 per,如何做?
    //1.1通过b的原型类,这个时候__proto__ 中的constructor 也会指向 per 的构造函数
    b.__proto__ = new per();
    //1.2 改变constructor 指向,保持还是指向自身的构造函数
    b.__proto__.constructor = b;
    b.getName(1);
    b.getAge("你已经变了");

    /**
     * 串联继承
     */
    function m() {
        this.showM = function() {
            alert("SM M")
        }
    }
    function n() {
        this.showN = function() {
            alert("SM N")
        }
    }
    function k(){};
    n.prototype = new m();
    n.prototype.constructor = n;

    k.prototype = new n();
    k.prototype.constructor = k;

    var boo = new k();
    boo.showM();
    boo.showN();





})();