/**
 * ���Լ��鷨
 */
(function(){
	/**
	 * ��ע��������һ���ӿ�
	 * interface PersonDao(){
	 * 	function add(obj);
	 *  function remove(obj);
	 *  function find(id);
	 * }
	 */
	//������ע�͵ķ�ʽ��ʵ����
	var PersonDaoImpl = function(){
		this.implementInterface = ["PersonDao"];		
	}
	PersonDaoImpl.prototype.add = function(obj){
		alert(obj)
		//..
	}
	PersonDaoImpl.prototype.remove = function(obj){
		//..
	}
	PersonDaoImpl.prototype.find = function(id){
		//..
	}	
	function addObj(obj){
		var PersonDao = new PersonDaoImpl();
		//��ʼ���
		if(!impl(PersonDao,"PersonDao")){
			throw new Error("��PersonDaoImplû��ʵ�ֽӿ�PersonDao");
		}else{
			PersonDao.add(obj);
		}
	}

	addObj("USCAPT.COM");
	/**
	 * �����ܵ���һ����������
	 */
	function impl(Object){
		//����������������
		for(var i=1;i<arguments.length;i++){
			var interfaceName = arguments[i];
			var interfaceFound = false;
			for(var j=0;j<Object.implementInterface.length;j++){
				if(Object.implementInterface[j] == interfaceName){
					interfaceFound = true;
					break;
				}
			}
			if(!interfaceFound){
				return false;
			}
		}
		return true;
	}

})()