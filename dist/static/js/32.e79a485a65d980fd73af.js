webpackJsonp([32],{XzNY:function(t,e,a){var i=a("vwHi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("fca16e30",i,!0)},vwHi:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.avatar-uploader .el-upload[data-v-773e7c54] {\r\n  border: 1px dashed #d9d9d9;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  overflow: hidden;\n}\n.avatar-uploader .el-upload[data-v-773e7c54]:hover {\r\n  border-color: #20a0ff;\n}\n.avatar-uploader-icon[data-v-773e7c54] {\r\n    font-size: 28px;\r\n    color: #8c939d;\r\n    width: 146px;\r\n    height: 146px;\r\n    line-height: 146px;\r\n    text-align: center;\n}\n.avatar-uploader[data-v-773e7c54]{\r\n  width: 190px;\r\n  display: inline-block;\n}\n.avatar[data-v-773e7c54] {\r\n    width: 146px;\r\n    height: 146px;\r\n    display: block;\n}\n.pic-notice[data-v-773e7c54]{\r\n  display: inline-block;\r\n  vertical-align: top;\n}\r\n",""])},zBO7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),l=a.n(i),r=a("6cLz"),o=a("vLgD");var n=a("EX+S"),s={name:[{required:!0,message:"请输入车型名称",trigger:"change"},{max:20,message:"不得超过20个字符",trigger:"change"}],picUrl:{required:!0,message:"请选择车型图片",trigger:"blur"},color:{required:!0,message:"请选择车辆颜色",trigger:"blur"},model:{required:!0,message:"请输入车辆型号",trigger:"blur"},price:[{required:!0,message:"请输入车型价格",trigger:"blur"},{validator:a("XWRh").b,trigger:"blur"}]},c={name:"TestMotor",components:{ActionPermControl:a("Pcuu").a},data:function(){return{uploadPath:"",downloadPath:"",list:void 0,total:void 0,listLoading:!0,listQuery:{page:1,limit:20,id:void 0,sort:"add_time",order:"desc"},dataForm:{id:void 0,picUrl:""},rules:s,colorList:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},downloadLoading:!1}},created:function(){this.setCdnPath(),this.getcolorList(),this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r.c)(this.listQuery).then(function(e){t.list=e.data.data.items,t.total=e.data.data.total,t.listLoading=!1}).catch(function(){t.list=[],t.total=0,t.listLoading=!1})},getcolorList:function(){var t,e=this;Object(o.a)({url:"/admin/admin/color/list",method:"get",params:t}).then(function(t){e.colorList=t.data.data.item})},setCdnPath:function(){var t=this;Object(n.a)().then(function(e){var a=e.data.data;t.token=a.accessKey,t.uploadPath="https://up-z2.qiniup.com?token="+a.accessKey,t.downloadPath=a.url})},uploadPicUrl:function(t){this.dataForm.picUrl=this.downloadPath+"/"+t.key},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},resetForm:function(){this.dataForm={id:void 0,picUrl:""}},handleOnSale:function(t){var e=this;Object(r.d)({id:t.id,isOnSale:!t.isOnSale}).then(function(a){e.$notify({title:"成功",message:(t.isOnSale?"下架":"上架")+"成功",type:"success",duration:2e3})}).catch(function(a){e.$notify({title:"失败",message:a.data?a.data.msg:(t.isOnSale?"下架":"上架")+"失败",type:"error",duration:2e3})}).finally(function(){e.getList()})},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(r.a)(t.dataForm).then(function(e){t.getList(),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},handleUpdate:function(t){var e=this;this.dataForm=l()({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(r.e)(t.dataForm).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})})},handleDelete:function(t){var e=this;Object(r.b)(t.id).then(function(t){e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3}),e.getList()})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e(2),a.e(73)]).then(a.bind(null,"zWO4")).then(function(e){var a=e.formatJson(["id","name","picUrl","price","model","color","isOnSale"],t.list,"testMotor");e.export_json_to_excel({header:["试驾车辆编号","试驾车型名称","车型图片","车型价格","车辆型号","车辆颜色","状态"],data:a,filename:"预约试驾车辆列表"}),t.downloadLoading=!1})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入车型型号"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请选择状态"},model:{value:t.listQuery.isOnSale,callback:function(e){t.$set(t.listQuery,"isOnSale",e)},expression:"listQuery.isOnSale"}},[a("el-option",{attrs:{label:"上架",value:!0}}),t._v(" "),a("el-option",{attrs:{label:"下架",value:!1}})],1),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请选择颜色"},model:{value:t.listQuery.color,callback:function(e){t.$set(t.listQuery,"color",e)},expression:"listQuery.color"}},t._l(t.colorList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.value}})})),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),t._v(" "),t.$checkPerm("create")?a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]):t._e(),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-download",loading:t.downloadLoading},on:{click:t.handleDownload}},[t._v("导出")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{size:"small",data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"试驾车辆编号",prop:"id"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"试驾车型名称",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"车型图片",prop:"picUrl"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.picUrl,width:"40"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"车辆价格",prop:"price"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"车辆型号",prop:"model"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"车辆颜色",prop:"color"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",prop:"isOnSale"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.isOnSale?"上架":"下架")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"250","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("action-perm-control",{attrs:{hasPerm:t.$checkPerm("update","delete","putway")}},[t.$checkPerm("putway")?a("el-button",{attrs:{type:e.row.isOnSale?"warning":"primary",size:"mini"},on:{click:function(a){t.handleOnSale(e.row)}}},[t._v(t._s(e.row.isOnSale?"下架":"上架"))]):t._e(),t._v(" "),t.$checkPerm("update")?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),t.$checkPerm("delete")?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除")]):t._e()],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"800px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"试驾车型名称",prop:"name"}},[a("el-input",{model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"600px"},attrs:{label:"车型图片",prop:"picUrl"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadPath,"list-type":"picture-card","show-file-list":!1,accept:".jpg,.jpeg,.png,.gif","on-success":t.uploadPicUrl}},[t.dataForm.picUrl?a("img",{staticClass:"avatar",attrs:{src:t.dataForm.picUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("span",{staticClass:"pic-notice"},[t._v("建议上传690*450尺寸图片")])],1),t._v(" "),a("el-form-item",{attrs:{label:"试驾车型价格",prop:"price"}},[a("el-input",{model:{value:t.dataForm.price,callback:function(e){t.$set(t.dataForm,"price",e)},expression:"dataForm.price"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"车辆颜色",prop:"color"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.color,callback:function(e){t.$set(t.dataForm,"color",e)},expression:"dataForm.color"}},t._l(t.colorList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"车辆型号",prop:"model"}},[a("el-input",{model:{value:t.dataForm.model,callback:function(e){t.$set(t.dataForm,"model",e)},expression:"dataForm.model"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"isOnSale"}},[a("el-radio-group",{model:{value:t.dataForm.isOnSale,callback:function(e){t.$set(t.dataForm,"isOnSale",e)},expression:"dataForm.isOnSale"}},[a("el-radio",{attrs:{label:!0}},[t._v("上架")]),t._v(" "),a("el-radio",{attrs:{label:!1}},[t._v("下架")])],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(c,d,!1,function(t){a("XzNY")},"data-v-773e7c54",null);e.default=u.exports}});