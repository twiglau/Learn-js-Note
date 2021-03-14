/**
 * 2.属性检验法
 */
(function(){
    /**
     * 用注释定义一个接口
     * interface PersonDao(){
     * function add(obj);
     * function remove(obj);
     * function find(id);
     * }
     */
    //我们用注释的方式来实现
    /**
     * PersonDaoImpl implement interface
     */
    var PersonDaoImpl = function() {
        this.implementInterface = ["PersonDao"];
    }
    PersonDaoImpl.prototype.add = function(obj){
        
    }
    PersonDaoImpl.prototype.remove = function(obj){
        //..
    }
    PersonDaoImpl.prototype.find = function(id){
        //..
    }
    //他接收的是一个不定参数
    function impl(obj) {
        
    }
})();