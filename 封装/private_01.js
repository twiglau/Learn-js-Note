/**
 * 信息的隐藏是最终的目的,封装只不过是隐藏的一种方法
 */
(function(){
    /**
     * 1.门户打开类型
     * 2.用命名规范区别私有和公有的方式
     * 3.闭包
     */
    //门户打开型
    function Person(age,name) {
        this.name = name;
        if(!this.checkAge(age)) {
            throw new Error("age invalid");
        }
        this.age = age;
    }
    Person.prototype = {
        checkAge:function(age) {
            if(age > 0 && age < 150) {
                return true;
            }else {
                return false;
            }
        }
    }
    Person.prototype["getName"] = function() {
        return this.name || "test console";
    }

    // var p = new Person(-10,"June");
    var p2 = new Person(27);
    alert(p2.getName());

})();