/**
 * 从一个实例引出链式调用的需求
 */
(function(){
    //创建一个cat
    function Cat(name) {
        this.name = name;
        this.run = function(){
            document.write(name + " start run");
            return this;
        }
        this.stopRun = function() {
            document.write(name + " stop run");
            return this;
        }
        this.sing = function() {
            document.write(name + " start sing");
            return this;
        }
        this.stopSing = function() {
            document.write(name + " stop sing");
            return this;
        }
    }
    var lilian = new Cat('Lilian');
    lilian.run().stopRun().sing().stopSing();

})()