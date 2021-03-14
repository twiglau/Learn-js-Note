/**
 * 单例模式在JS使用的非常频繁
 * 通过确保单例对象只存在一个实例
 * 你就可以确保自己在所有的代码中使用的是全局资源
 */
(function(){
      //先看最简单的单体
      //例如用户登录后的信息可以用一个单体存储
      //以下已经实例化,而且只能实例化一次
      var UserInfo = {
          name:"lau",
          code:"101",
          deptName:"PD",
          deptCode:"PD001",
          getName:function() {
              return "chang"
          }
      }
      alert(UserInfo.getName());
      /**
       * 这就是一个最简单的单体
       * 它用来划分命名空间,并且将一组相关的属性和方法组织到一起
       * 我们可以用 . 来访问它
       */
      var comm = {};
      comm.UserInfo = {
          name:"lau",
          code:"001"
      }
      comm.funcInfo = {
          funcName:"func",
          funcCode:""
      }
      //在大型的项目下,存在着你写的代码,还有你引用的外界JS类库
      //还有其他同事写的代码和类库
      //我们通过单体模式就可以很好的区分

})();