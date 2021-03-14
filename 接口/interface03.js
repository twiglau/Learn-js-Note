/**
 * 3.Ѽʽ���η�
 * ���������Դ��һ���������ͷ����һ������(jim)
 * "��Ѽ��һ����·���һ�¸½еĶ�������Ѽ��"
 * ����֮
 * ������������ӿڶ���ķ������ֵ�ͬ�����з��� ��ô�Ҿ���Ϊ�����ʵ�ֱ��ӿ�
 */
(function(){
	//����һ���ӿ���
	var Interface = function(name,methods){
		if(arguments.length != 2){
			alert("interface must have two paramters...");
		}
		this.name = name;//����ǽӿڵ�����
		this.methods = [];//�������������ת�غ�����
		for (var i = 0; i < methods.length; i++) {
			if(typeof methods[i] != "string"){
				alert("method name must is String ...")
			}else{
				this.methods.push(methods[i])
			}
		}
	}
	//����ӿڵ�һ����̬������ʵ�ֽӿ���ʵ�����ֱ�Ӽ���
	//��̬������Ҫд��Interface.prototype.* ��Ϊ����д���ӿ�ԭ�����ϵ�
	//����Ҫ�Ѿ�̬�ĺ���ֱ��д��������
	Interface.ensureImplements = function(object){
		if(arguments.length<2){
			alert("����������2������");
			return false;
		}
		//����
		for (var i = 1; i < arguments.length; i++) {
			var inter = arguments[i];
			//������ǽӿھͱ�����Interface���͵�
			if(inter.constructor != Interface){
				throw new Error("if is interface class must is Interface type");
			}
			//�����������ϲ�����
			for (var j = 0; j < inter.methods.length; j++) {
				var method = inter.methods[j];
				//ʵ�����б����з������� �� �ӿ������еķ�������Ŀ
				if(!object[method] || typeof object[method] != "function"){
					throw new Error("ʵ���ಢ��û����ȫʵ�ֽӿ��е����з���...");
				}
			}
		}
	}
	//Ӧ��
	//�����Լ��Ľӿ�
	var GridMananger = new Interface("GridMananger",["add","remove","list"]);
	var FormMananger = new Interface("FormMananger",["save"])
	
	function commManager(){
		//��ʵ�ַ���
		this.add = function(){
			alert("ok")
		}
		this.remove = function(){}
		this.list = function(){}
		this.save = function(){}
		//����
		Interface.ensureImplements(this,GridMananger,FormMananger)
	}
	var c = new commManager();
	c.add();
	/**
	 * �ӿڵ���Ҫ��
	 * 1.������Ŀ��ߴ��������
	 * 2.�����
	 * 3.���Ŷӿ�����ʱ��,��дʱ��������������֮ǰ�Ϳ���дAPI(�Լ������)
	 * �������Ϳ���ʱ���ڽ���ʵ��
	 * ��ʼ��ʱ�����ǾͿ��Զ�������Ŀ�Ƿ����,ͨ���ӿھͿ�ģ�����
	 */
	
})()



