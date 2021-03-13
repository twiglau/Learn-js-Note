(function() {
    function jMap() {
        //私有变量
        var arr = {};
        //增加 &查询 &删除 &遍历
        this.put = function(key,value) {
            arr[key] = value;
        }
        this.get = function(key) {
            if(arr[key]) {
                return arr[key]
            }else {
                return null;
            }
        }
        this.remove = function(key) {
            delete arr[key]
        }
        this.eachMap = function(fn) {
            for (var key in arr) {
                fn(key,arr[key])
            }
        }
    }
    var country = new jMap();
    country.put("01","ZG");
    country.put("02","Z1");
    country.put("03","Za");
    country.put("04","Zt");
    country.put("05","Zo");
    alert(country.get("01"));

})();