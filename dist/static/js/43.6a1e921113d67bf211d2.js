webpackJsonp([43],{JhY7:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.upload-demo[data-v-3b29eb88]{\r\n  display: inline-block\n}\r\n",""])},NyuA:function(t,e,a){var r=a("JhY7");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("7cadd07e",r,!0)},phPw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("pI9/");var i=a("CxCG"),l=a("Pcuu"),o={name:"vehicletype",components:{UserModal:i.default,ActionPermControl:l.a},data:function(){return{list:null,total:null,listLoading:!0,listQuery:{page:1,size:20,carCode:void 0},fileList:[],dialogFormVisible:!1,dialogStatus:"",downloadLoading:!1,carStatus:["在售","下架"],carType:["","进口车","骑式车","踏板车"],textMap:{update:"编辑",create:"创建"},dataForm:{carCode:void 0,carName:void 0,carType:"",carStatus:void 0,id:""},rules:{carCode:[{required:!0,message:"车型代码不能为空",trigger:"blur"}],carName:[{required:!0,message:"车型名称不能为空",trigger:"blur"}],carStatus:[{required:!0,message:"车型状态不能为空",trigger:"blur"}],carType:[{required:!0,message:"车型类型不能为空",trigger:"change"}]}}},created:function(){this.getList()},watch:{dialogFormVisible:function(t){t||(this.$refs.dataForm.clearValidate(),this.dataForm={})}},methods:{getList:function(){var t,e=this;this.listLoading=!0,(t=this.listQuery,Object(r.a)({url:"/admin/motorcycle/getMotorcycleInfo",method:"get",params:t})).then(function(t){e.list=t.data.data.items,e.total=t.data.data.total,e.listLoading=!1}).catch(function(){e.list=[],e.total=0,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.size=t,this.getList()},handleCreate:function(){this.dialogStatus="create",this.dialogFormVisible=!0,this.dataForm={carCode:"",carName:"",carStatus:"",id:""}},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){var a;e&&(a=t.dataForm,Object(r.a)({url:"/admin/motorcycle/addMotorcycle",method:"POST",data:a})).then(function(e){0===e.data.code?(t.dialogFormVisible=!1,t.$notify({title:"成功",message:"新增成功",type:"success",duration:2e3}),t.getList()):t.$notify({title:"失败",message:e.data.msg,type:"error",duration:2e3})}).catch(function(e){t.$notify({title:"失败",message:e.data.msg,type:"error",duration:2e3})})})},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleDonwUp:function(t){var e,a=this,i=0===t.carStatus?1:0;(e={id:t.id,carStatus:i},Object(r.a)({url:"/admin/motorcycle/carUpOrDown",method:"POST",data:e})).then(function(t){0===t.data.code&&(a.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3}),a.getList())})},handlePreview:function(t){console.log(t)},handleUpSuccess:function(t,e,a){this.$notify({title:"成功",message:"上传成功",type:"success",duration:2e3}),this.getList()},handleUpError:function(t,e,a){console.log(t),this.$notify({title:"失败",message:"上传失败",type:"error",duration:2e3})},handleDownExl:function(){Promise.all([a.e(2),a.e(73)]).then(a.bind(null,"zWO4")).then(function(t){var e=t.formatJson(["carName","carCode","carType","carStatus"],[],"car");t.export_json_to_excel({header:["车型名称","车型代码","车型类型","状态(0是在售, 1是下架)"],data:e,filename:"车型信息"})})},handleDele:function(t){var e=this;this.$confirm("此操作将删除所选车型, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a;(a={id:t.id},Object(r.a)({url:"/admin/motorcycle/delMotorcycle",method:"DELETE",params:a})).then(function(t){0===t.data.code&&e.getList()}).catch(function(){})})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"车型代码"}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入"},model:{value:t.listQuery.carCode,callback:function(e){t.$set(t.listQuery,"carCode",e)},expression:"listQuery.carCode"}})],1),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),t._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://dev.device.motorjourney.cn/sales/admin/motorcycle/import/table","on-preview":t.handlePreview,"show-file-list":!1,"file-list":t.fileList,"on-success":t.handleUpSuccess,"on-error":t.handleUpError}},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",loading:t.downloadLoading,icon:"el-icon-upload2"}},[t._v("导入")])],1),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleCreate}},[t._v("新增")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-download"},on:{click:t.handleDownExl}},[t._v("下载导入模板")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{size:"small",data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",width:"100px",label:"车型ID",prop:"id",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"车型名称",prop:"carName"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"车型代码",prop:"carCode"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"车型类型",prop:"carType"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.carType[e.row.carType])+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"录入时间",prop:"addTime"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"车型状态",prop:"carStatus"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.carStatus[e.row.carStatus])+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",prop:"carStatus"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.carStatus?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleDonwUp(e.row)}}},[t._v("下线")]):t._e(),t._v(" "),1===e.row.carStatus?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleDonwUp(e.row)}}},[t._v("上线")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDele(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"车型名称",prop:"carName"}},[a("el-input",{model:{value:t.dataForm.carName,callback:function(e){t.$set(t.dataForm,"carName",e)},expression:"dataForm.carName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"车型代码",prop:"carCode"}},[a("el-input",{model:{value:t.dataForm.carCode,callback:function(e){t.$set(t.dataForm,"carCode",e)},expression:"dataForm.carCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"车型类型",prop:"carType"}},[a("el-select",{staticClass:"filter-item",model:{value:t.dataForm.carType,callback:function(e){t.$set(t.dataForm,"carType",e)},expression:"dataForm.carType"}},[a("el-option",{attrs:{label:"进口车",value:1}}),t._v(" "),a("el-option",{attrs:{label:"骑式车",value:2}}),t._v(" "),a("el-option",{attrs:{label:"踏板车",value:3}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"车型状态",prop:"carStatus"}},[a("el-radio-group",{model:{value:t.dataForm.carStatus,callback:function(e){t.$set(t.dataForm,"carStatus",e)},expression:"dataForm.carStatus"}},[a("el-radio",{attrs:{label:0}},[t._v("在售")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("下架")])],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):t._e()],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(o,n,!1,function(t){a("NyuA")},"data-v-3b29eb88",null);e.default=s.exports}});