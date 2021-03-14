/**
 * XHR链接对象
 * 把请求的函数做成一个序列,按照执行序列来完成每一个序列的任务
 * 队列有删除,添加,更新等功能
 */
(function(){
    var asyncRequest = (function(){

        function handleReadyState(o,callBack) {
            //设置浏览器每隔半秒执行一次的函数
            var poll = window.setInterval(function(){
                //4 就是交互完成的意思
                if(o && o.readyState == 4) {
                    //这种写法是一个类似长连接的写法,那就是若不成功,就总是请求你
                    window.clearInterval(poll);
                }

            },500);
        }
        //工厂
        var getXHR = function(){
            var http;
            try {
                http = new XMLHttpRequest();
                getXHR = function(){
                    return new XMLHttpRequest();
                }

            }
            catch(e) {
                var msxml = [
                    'MSXML2.XMLHTTP.3.0',
                    'MSXML2.XMLHTTP',
                    'MICROSOFT.XMLHTTP'

                ];
                for(var i = 0; i < msxml.length; i++) {
                    try {

                        http = new ActiveXObject(msxml[i]);
                        getXHR = function(){
                            return new ActiveXObject(msxml[i]);
                        }
                        break;
                    }catch(e){}
                }
            }
            return http;
        }
        //核心函数
        return function(method,url,callback,postData){
            var http = getXHR();
            http.open(method,url,true);
            handleReadyState(http,callback);
            http.send(postData || null);
            return http;
        }
        //为了链式调用,在写一个工具
        Function.prototype.method = function(name,fn){
            this.prototype[name] = fn;
            return this;
        }
        //再扩展Array的方法
        if(!Array.prototype.forEach){
            Array.method("forEach",function(fn,thisObj){
                var scope = thisObj || window;
                for (var i = 0; i < this.length; i++) {
                    fn.call(scope,this[i],i,this);
                }
            })
        }
        if(!Array.prototype.filter){
            Array.method("filter",function(fn,thisObj){
                // var scope = thisObj || window;
                // var a = [];
                // for (var i = 0; i < this.length; i++) {
                //     fn.call(scope,this[i],i,this);
                // }

            })
        }
    })()
})()