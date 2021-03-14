/**
 * XHR工厂
 */
(function(){
    //Ajax操作接口
    var AjaxHandler = new Interface("AjaxHandler",["request","createXhrObject"]);
    //Ajax简单实现类
    var SimpleHandler = function(){};
    SimpleHandler.prototype = {
        /**
         * 
         * @param {*} method 
         * @param {*} url 
         * @param {*} callback 
         * @param {*} postVars 
         */
        request:function(method,url,callback,postVars) {
            //1.得到xhr 对象
            var xhr = this.createXhrObject();
            xhr.onReadyStateChange = function(){
                //4 代表的肆意是交互完成
                if(xhr.readyState != 4) return;
                //200 指的是正常交互完成
                // 400 文件未找到
                // 500 内部程序完成
                (xhr.status == 200)?callback.success(xhr.responseText,xhr.responseXML):callback.failure(xhr.status);
            }
            //打开链接
            xhr.open(method,url,true);
            //设置参数
            if(method != "POST"){
                postVars = null;
            }
            xhr.send(postVars);
        },
        createXhrObject:function(){
            var methods = [
                function(){ return new XMLHttpRequest();},
                function(){ return new ActiveXObject('Msxml2.XMLHTTP');},
                function(){ return new ActiveXObject("Microsoft.XMLHTTP");}
            ]
            //利用try catch 制作一个只能循环体
            for(var i = 0; i < methods.length; i++) {
                try {
                    methods[i]();
                }
                catch(e){
                    continue;
                }
                //这句话非常的重要,只有这样才能确保不用每次请求都要循环数组.
                this.createXhrObject = methods[i];
                return methods[i]();
            }
            //如果全不对的话我就显式的报错
            throw new Error("error");
        }
    }
    //实验
    var myHandler = new SimpleHandler();
    var callback = {
        success:function(responseText) {
            alert("OK")
        },
        failure:function(status) {
            alert("failure")
        }
    }
    myHandler.request("GET","",callback);

})();