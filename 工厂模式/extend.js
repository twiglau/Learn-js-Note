/**
 * 继承
 */
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