/**
 * 掺元类
 * 有的时候不需要严格的继承,我们真正需要的是一个函数[类]中的的里面的
 * 某些方法[函数]
 */
(function(){
    //我们准备将要被聚合的函数
    var JSON_a = {};//空对象

    JSON_a.prototype = {
        toJSONString:function() {
            var outPut = [];
            for(key in this) {
                outPut.push(key + "-->" + this[key])
            }
            return outPut;
        }
    }
    //制作聚合函数
    function mixin_a(receivingClass,givingClass) {
          for(methodName in givingClass.prototype) {
              //本类中没有这个函数的情况聚合,否则跳过
              if(!receivingClass.prototype[methodName]) {
                    receivingClass.prototype[methodName] = givingClass.prototype[methodName];
              }
          }
    }
    // 1.以下定义方式会出现: Error:Cannot read property 'toString' of undefined
    // var o = {name:"June",age:27};

    // 2.方式有误,不知道原因 ?????????????????
   function me(){
        this.name = "June";
        this.age = 17;
    }
    mixin_a(me,JSON_a);
    var print_me = new me();
    document.write(print_me.toJSONString().join(","));
})();

(function(){
    //我们准备将要被聚合的函数
    var JSON_b = {

        toJSONString:function() {
            var outPut = [];
            for(key in this) {
                outPut.push(key + "-->" + this[key])
            }
            return outPut;
        }
    };//空对象

    
    //制作聚合函数
    function mixin_b(receivingClass,givingClass) {
          for(methodName in givingClass) {
              //本类中没有这个函数的情况聚合,否则跳过
              if(!receivingClass.__proto__[methodName]) {
                    receivingClass.__proto__[methodName] = givingClass[methodName];
              }
          }
    }
    //
    var bb = {name:'lucy',age:18};
    mixin_b(bb,JSON_b);
    //1. o is not a constructor
    //2. 以上方式定义o,实际上已经是单态了

    //以下还会有错:
    //mixin.js:70 Uncaught TypeError: bb.toJSONString is not a function
    document.write(bb.toJSONString().join(","));

    
})();