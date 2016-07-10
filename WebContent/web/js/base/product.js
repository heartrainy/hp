//表格初始化
var tableObj = $('#tableList').DataTable({
  	"autoWidth":true,				//自动宽度
	"dom": 'frt<"tbb"ilp>',			//分页和显示信息位置
  	//"processing": true,				//服务器处理
    //"serverSide": true,				//服务器处理
    "stateSave": false,
    "searching":false,				//是否显示自带搜索功能
  	"oLanguage": {					//显示语言
  		sUrl: "../../../plugin/dataTables/Chinese.json"
  	},
  	"ajax":{						//ajax请求地址
//  		 "url" : baseUrl+'/client/cost/cfccs01f001',
//  		 "type" : "post",
//  		 "data": function ( req ) {
//  			 window.vmcontent.sendParams.draw = req.draw;
//  			 window.vmcontent.sendParams.start = req.start;
//  			 window.vmcontent.sendParams.pageCount = req.length;
//  			 return window.vmcontent.sendParams;
//  		 },
//		 "dataSrc": function( json ){
//			 json.recordsTotal = json.dataMaxCount;
//			 json.recordsFiltered = json.dataMaxCount;
//			 window.message = json.message;
//			 return json.data;
//		 }
  		"url" : '../../../plugin/dataTables/data/objects2.txt',
  		"dataSrc": 'data'
	},
  	"columnDefs": [{
        "searchable": false,
        "orderable": true,
        "targets": "_all"
    }],
    "columns":[
 	        { title:'商品名称', name: 'name', data: 'name' },
   			{ title:'商品编号', name: 'position', data: 'position' },
   			{ title:'商品类别', name: 'salary', data: 'salary' },
	        { title:'操作', name: 'opration', data: null, width: "120", "render": function ( data, type, row ) {
	        	return  "<a class='able-a' ms-click='openView'>详情</a>"+
	        			"<a class='able-a' ms-click='openEdit'>编辑</a>"+
	        			"<a class='able-a' ms-click='openDelete'>删除</a>";
	        }}
 	],
     "drawCallback": function(settings){
        /*table按钮启用avalon*/
    	avalon.scan($("#content")[0], mv);
     }
});

//avalon初始化
window.mv = avalon.define({
	$id: "bodyController",
	showDialog: "main",
	openAddDialog: function(){
		window.addDialog = layer.open({
			title: '添加商品信息',
		    type: 2,
		    skin: 'layui-layer-style2', //样式类名
		    area: ['560px','580px'], //宽高
		    content: 'addProduct.html'
		});
	},
	openView: function(){
		window.viewDialog = layer.open({
			title: '商品详情',
		    type: 2,
		    skin: 'layui-layer-style2', //样式类名
		    area: ['560px','550px'], //宽高
		    content: 'viewProduct.html'
		});
	},
	openEdit: function(){
		window.editDialog = layer.open({
			title: '编辑商品信息',
		    type: 2,
		    skin: 'layui-layer-style2', //样式类名
		    area: ['560px','580px'], //宽高
		    content: 'editProduct.html'
		});
	},
	openDelete: function(){
		layer.confirm('确定要删除该商品吗？', {
			title: '提示',
			skin: 'layui-layer-style2',
		    btn: ['确定','取消'] //按钮
		}, function(){
			clds_layer.msg("删除成功！", "info");
		});
	},
	changeDialog: function(t) {
		$("#subFrame").attr("src", "demo2.html");
		mv.showDialog = t;
	}
});
avalon.scan();