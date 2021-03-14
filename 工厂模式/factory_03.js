/**
 * 1.工厂的目的在于判别接口最终用那个类来进行实例化
 * 2.产生实例的过程不用 new 关键字
 * 3.最终达到的效果是,多态,和类与类之间的送耦合
 */
(function(){
    var Pet = new Interface("Pet",["eat","run","sing","register"]);

    function BasePet() {
        this.register = function() {
            document.write("宠物登记.....<br>");
        }
        this.eat = function() {
            document.write("喂食中...<br>");
        }
    }
    function Dog() {
        Dog.superClass.constructor.call(this);
        this.run = function() {
            document.write("小狗狗跑步... <br>");
        }
        this.sing = function() {
            document.write('小狗狗唱歌...<br>');
        }
    }
    function Cat() {
        Cat.superClass.constructor.call(this);
        this.run = function() {
            document.write("小猫咪跑步... <br>");
        }
        this.sing = function() {
            document.write('小猫咪唱歌...<br>');
        }
    }
    function Pig() {
        Pig.superClass.constructor.call(this);
        this.run = function() {
            document.write("小猪猪跑步... <br>");
        }
        this.sing = function() {
            document.write('小猪猪唱歌...<br>');
        }
    }
    function Bird() {
        Bird.superClass.constructor.call(this);
        this.run = function() {
            document.write("小飞鸟跑步... <br>");
        }
        this.sing = function() {
            document.write('小飞鸟唱歌...<br>');
        }
    }
    function Tortoise() {
        Tortoise.superClass.constructor.call(this);
        this.run = function() {
            document.write("小乌龟跑步... <br>");
        }
        this.sing = function() {
            document.write('小乌龟唱歌...<br>');
        }
    }
    function Goat() {
        Goat.superClass.constructor.call(this);
        this.run = function() {
            document.write("大山羊跑步... <br>");
        }
        this.sing = function() {
            document.write('大山羊唱歌...<br>');
        }
    }
    //继承
    extend(Dog,BasePet);
    extend(Pig,BasePet);
    extend(Cat,BasePet);
    extend(Bird,BasePet);
    extend(Goat,BasePet);
    extend(Tortoise,BasePet);

    /**
     * 新的需求
     * 张三的店和李四的店,虽然都是宠物店
     * 但是重点不一样,张三主要卖哈士奇,李四主要卖鸟类
     */
    //智能工厂
    var PetFactory = {
        sellPet:function(kind) {
            var pet;
            pet = eval("new " + kind + "()");
            Interface.ensureImplements(pet,Pet);
            return pet;


        }

    }
    //1.把核心的商店变成一个 抽象类
    var PetAbstractShop = function() {}
    PetAbstractShop.prototype = {
        sellPet:function(kind) {
            var pet = this.sellPet(kind);
            pet.eat();
            pet.register();
            return pet;
        },
        sellPet:function(model) {
            throw new Error("this is a abstract class...");
        }
    }
    //2.利用子类来满足我们之前的需求(多态)
    var OnePetShop = function() {}
    extend(OnePetShop,PetAbstractShop);
    OnePetShop.prototype.sellPet = function(model) {
        var pet = null;
        var pets = ["Dog","Cat","Bird"];
        for (v in pets) {
            if(pets[v] == model){
                pet = PetFactory.sellPet(model);
                Interface.ensureImplements(pet,Pet);
                pet.eat();
                pet.register();
                break;
            }
        }
        return pet;
    }

    var TwoPetShop = function() {}
    extend(TwoPetShop,PetAbstractShop);
    TwoPetShop.prototype.sellPet = function(model) {
        var pet = null;
        var pets = ["Goat","Tortoise"];
        for (v in pets) {
            if(pets[v] == model){
                pet = PetFactory.sellPet(model);
                Interface.ensureImplements(pet,Pet);
                pet.eat();
                pet.register();
                break;
            }
        }
        return pet;
    }
    //实验
    var jim = new OnePetShop();
    var dog = jim.sellPet("Dog");
    dog.run();

    var lilian = new TwoPetShop();
    var goat = lilian.sellPet("Goat");
    goat.run();
    

    


})();