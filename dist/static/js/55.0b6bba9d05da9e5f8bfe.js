webpackJsonp([55],{xvnY:function(t,e,a){"use strict";e.c=function(t){return Object(i.a)({url:"/admin/admin/keyword/list",method:"get",params:t})},e.a=function(t){return Object(i.a)({url:"/admin/admin/keyword/create",method:"post",data:t})},e.d=function(t){return Object(i.a)({url:"/admin/admin/keyword/update",method:"post",data:t})},e.b=function(t){return Object(i.a)({url:"/admin/admin/keyword/delete/"+t,method:"delete"})};var i=a("vLgD")},"ySf/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("woOf"),r=a.n(i),o=a("H8JJ"),l=a("tU9i"),n=a("xvnY"),s={name:"Keyword",components:{ActionPermControl:a("Pcuu").a,BaseTable:l.a},mixins:[o.a],data:function(){return{dataForm:{id:void 0,keyword:void 0,sortOrder:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{keyword:[{required:!0,message:"关键词不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(n.c)(this.listQuery).then(function(e){t.list=e.data.data.items,t.total=e.data.data.total}).catch(function(){t.list=[],t.total=0}).finally(function(){t.listLoading=!1})},resetForm:function(){this.dataForm={id:void 0,keyword:void 0,sortOrder:""}},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(n.a)(t.dataForm).then(function(e){t.getList(),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},handleUpdate:function(t){var e=this;this.dataForm=r()({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(n.d)({id:t.dataForm.id,keyword:t.dataForm.keyword,sortOrder:t.dataForm.sortOrder}).then(function(){t.dialogFormVisible=!1,t.getList(),t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})})},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该热搜, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.b)(t.id).then(function(t){e.getList(),e.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})}).catch(function(t){e.$notify({title:"失败",message:t.data?t.data.msg:"删除失败",type:"error",duration:2e3})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{inline:!0,"label-position":"right","label-width":"120px"}},[a("el-form-item",{staticClass:"no-margin-bottom",attrs:{label:"热搜ID："}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入"},model:{value:t.listQuery.id,callback:function(e){t.$set(t.listQuery,"id",e)},expression:"listQuery.id"}})],1),t._v(" "),a("el-form-item",{staticClass:"no-margin-bottom",attrs:{label:"热搜关键词："}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入"},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),t._v(" "),t.$checkPerm("create")?a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]):t._e()],1)],1),t._v(" "),a("base-table",{attrs:{data:t.list,loading:t.listLoading,pageSize:t.listQuery.limit,currentPage:t.listQuery.page,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},[a("el-table-column",{attrs:{align:"center",width:"150px",label:"热搜ID",prop:"id",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100px",label:"关键字",prop:"keyword"}}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100px",label:"添加时间",prop:"addTime"}}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100px",label:"排序",prop:"sortOrder"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"250","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("action-perm-control",{attrs:{hasPerm:t.$checkPerm("update","delete")}},[t.$checkPerm("update")?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),t.$checkPerm("delete")?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除")]):t._e()],1)]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"关键词",prop:"keyword"}},[a("el-input",{model:{value:t.dataForm.keyword,callback:function(e){t.$set(t.dataForm,"keyword",e)},expression:"dataForm.keyword"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sortOrder"}},[a("el-input",{attrs:{type:"number"},model:{value:t.dataForm.sortOrder,callback:function(e){t.$set(t.dataForm,"sortOrder",e)},expression:"dataForm.sortOrder"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]},c=a("VU/8")(s,d,!1,null,null,null);e.default=c.exports}});