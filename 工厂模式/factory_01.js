/**
 * 1.工厂的目的在于判别接口最终用那个类来进行实例化
 * 2.产生实例的过程不用 new 关键字
 * 3.最终达到的效果是,多态,和类与类之间的送耦合
 */
(function(){
    var Pet = new Interface("Pet",["eat","run","sing","register"]);

    //宠物店
    var PetShop = function() {}
    PetShop.prototype = {
        
        sellPet:function(kind) {
            var pet;
            //kind 种类
            switch(kind) {
                case 'dog':
                    pet = new Dog();
                    break;
                case 'cat':
                    pet = new Cat();
                    break;
                case 'pig':
                    pet = new Pig();
                    break;
                default:
                    pet = new Bird();
            }
            //验证接口
            Interface.ensureImplements(pet,Pet);
            pet.eat();
            pet.register();
            return pet;
        }
    }
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
    //继承
    extend(Dog,BasePet);
    extend(Pig,BasePet);
    extend(Cat,BasePet);
    extend(Bird,BasePet);

    //Pcat 宠物店
    var pcatPetShop = new PetShop();
    var smallFlowerPig = pcatPetShop.sellPet("pig");
    smallFlowerPig.run();
    /**
     * 貌似很完美,但是经不住需求的变更
     * 比如:宠物商店有进来写新的品种的宠物
     * 这个时候用目前的方法必须要修改宠物商店这个类
     */
    //静态工厂
    var PetFactory = {
        
        sellPet:function(kind) {
            var pet;
            //kind 种类
            switch(kind) {
                case 'dog':
                    pet = new Dog();
                    break;
                case 'cat':
                    pet = new Cat();
                    break;
                case 'pig':
                    pet = new Pig();
                    break;
                default:
                    pet = new Bird();
            }
            //验证接口
            Interface.ensureImplements(pet,Pet);
            
            return pet;
        }
    }
    //2.利用工厂的新的宠物商店
    var PetShop2 = function(){};
    PetShop2.prototype = {
        sellPet2:function(kind){
            var pet = PetFactory.sellPet(kind);
            pet.eat();
            pet.register();
            return pet;
        }
    }
    var pShop2 = new PetShop2();
    var smallFlowerCat = pShop2.sellPet2("cat");
    smallFlowerCat.sing();

    /**
     * 新的需求
     * 张三的店和李四的店,虽然都是宠物店
     * 但是重点不一样,张三主要卖哈士奇,李四主要卖鸟类
     */
    


})();