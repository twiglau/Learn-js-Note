/**
 * 1.简单工厂
 *     通过第三方的类完成松耦合的任务 -->工厂
 * 2.复杂工厂
 *     通过实例化的任务交给子类来完成的用来达到松耦合的母的 -->工厂
 * 3.超级工厂
 *     通过eval来完成智能工厂
 */

 /**
  * 利弊
  * 1.使用场合
  *    [动态实现]
  *        创建一些用不同方式实现的同一接口
  *        可以被同等对待的一系列类,我们可以用工厂来实例化它
  *     [节省设置开销,和子系统组合]
  *        针对不同情况的子系统进行模块层次收集
  *        使其子系统使用起来变得更简单
  * 2.利与弊
  *     松耦合,把创建类等复杂的过程交给工厂来完成
  *     程序员有时间把精力重点放到业务上
  *     
  *     弊端
  *       工厂好用,但是处理起来很复杂
  *       代码复杂度很高,难以驾驭
  *       一般类还是推荐new 来创建类
  */