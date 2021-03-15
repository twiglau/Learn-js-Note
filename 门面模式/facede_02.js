/**
 * 用2个DAO来提现门面模式
 */
(function(){
    //人员类
    var PersonDao = new Interface("PersonDao",["getInfo","learn","marry"]);
    var Person = function(){
        this.name = "multan";
        this.address = "China";
        this.getInfo = function() {
            return "名字: " + this.name + " 地址: " + this.address;
        }
        this.learn = function() {
            document.write("learning");
        }
        this.marry = function(){};
        //验证实现的接口
        Interface.ensureImplements(this,PersonDao);
    }
    //DOG DAO
    var DogDao = new Interface("DogDao",["call","run"]);
    var Dog = function() {
        this.name = "lilian";
        this.getInfo = function(){
            return "Dog name is: " + this.name;
        }
        this.run = function(){};
        this.call = function(){};
        Interface.ensureImplements(this,DogDao);
    }
    //1.需求是现在需要给养的狗办理相应的领养证件,需要人和狗的信息
    //1.1 不用门面
    function action(person,dog) {
        //当做养狗证的号码
        var r = "GG" + new Date().getDate() + Math.floor(Math.random()*11);
        var str = "办证成功:编号" + r
        + "<br>主人信息:" + person.getInfo()
        + "<br>狗狗信息:" + dog.getInfo();
        document.write(str);

    }
    action(new Person(),new Dog());
    document.write("<br>................");
    //1.2使用门面
    function facede(person,dog) {
        //当做养狗证的号码
        var r = "GG" + new Date().getDate() + Math.floor(Math.random()*11);
        var str = "办证成功:编号" + r
        + "<br>主人信息:" + person.getInfo()
        + "<br>狗狗信息:" + dog.getInfo();
        this.action = function() {
            return str;
        }

    }
    //客户端程序
    function action2(person,dog) {
        document.write(new facede(person,dog).action());
    }
    action2(new Person(),new Dog());

    //用了门面模式,客户端就变得简单了


})()