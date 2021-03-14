/**
 * 闭包实现封装
 */
(function(){
    function person(name,age,email,sex) {
        //1.公共变量
        this.email = email ; // 这种方式定义 public 变量

        //2.定义私有变量,闭包的方式
        //2.1 get,set函数
        //get
        this.getName = function(){
            return this.name;
        }
        this.getAge = function(){
            return this.age;
        }
        //set 
        this.setName = function(name) {
            this.name = name;
        }
        this.setAge = function(age) {
            if(age > 0 && age < 150) {
                this.age = age;
            }else {
                throw new Error("年龄必须在0到150之间");
            }
            this.age = age;
        }
        //2.2 _sex ,get,set函数 
        var _sex = "M" //这也是私有变量的编写方式
        this.getSex = function() {
             return _sex;
        }
        this.setSex = function(sex) {
            _sex = sex;
        }
        //这种方式定义私有变量
        this.init = function() {
            this.setName(name);
            this.setAge(age);
            this.setSex(sex);
        }
        this.init();

        //测试
        var p = new Person("JIM",-1,"twigliu@gmail.com")

    }
})();