/**
 * 1.注释法
 * 最简单,功能也是最弱
 * 它利用interface 和 implement "文字"
 * 把他们用注解方式,显示变现出来
 */
(function(){
    /**
     * 用注释定义一个接口
     * interface ObjectDao(){
     * function add(obj);
     * function remove(obj);
     * function find(id);
     * }
     */
    //我们用注释的方式来实现
    /**
     * PersonDaoImpl implement interface
     */
    PersonDaoImpl.prototype.add = function(obj){
        //..
    }
    PersonDaoImpl.prototype.remove = function(obj){
        //..
    }
    PersonDaoImpl.prototype.find = function(id){
        //..
    }
    /**
     * 1.大型项目规范和标准
     * 2.充分考虑和架构
     * 
     */
})();