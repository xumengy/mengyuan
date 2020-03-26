webpackJsonp([62],{mFle:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("aJGK"),o=a("6Kf0"),n=a("07y0"),r={name:"AreaCasc",props:{label:{type:String,default:"区域地址"},provinceId:{type:[Number,String],default:""},cityId:{type:[Number,String],default:""},placeholders:{type:Array,default:function(){return["省","市"]}}},watch:{provinceId:function(t){this.dataForm.provinceId=t},cityId:function(t){var e=this;t?Object(n.b)({id:this.provinceId}).then(function(a){e.cities=a.data.data,e.dataForm.cityId=t}):this.dataForm.cityId=t}},data:function(){return{provinces:[],cities:[],dataForm:{provinceId:"",cityId:""}}},created:function(){},mounted:function(){this.init()},methods:{init:function(){this.getProvinces()},getProvinces:function(){var t=this;Object(n.b)({id:0}).then(function(e){t.provinces=e.data.data})},provinceChange:function(t){var e=this;void 0!==t&&(this.cities=[],this.dataForm.cityId=void 0,this.$emit("provinceChange",this.dataForm),Object(n.b)({id:t}).then(function(t){e.cities=t.data.data}))},cityChange:function(t){void 0!==t&&this.$emit("cityChange",this.dataForm)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-select",{attrs:{placeholder:t.placeholders[0]||"省"},on:{change:t.provinceChange},model:{value:t.dataForm.provinceId,callback:function(e){t.$set(t.dataForm,"provinceId",e)},expression:"dataForm.provinceId"}},t._l(t.provinces,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("el-select",{attrs:{placeholder:t.placeholders[1]||"市"},on:{change:t.cityChange},model:{value:t.dataForm.cityId,callback:function(e){t.$set(t.dataForm,"cityId",e)},expression:"dataForm.cityId"}},t._l(t.cities,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1)},staticRenderFns:[]},d=a("VU/8")(r,l,!1,null,null,null).exports,c={name:"DealarEditModal",props:{dialogStatus:String},components:{AreaCasc:d},created:function(){},data:function(){return{dialogFormVisible:!1,dataForm:{id:void 0,provinceId:void 0,cityId:void 0},textMap:{update:"编辑",create:"创建"},rules:o.b}},methods:{init:function(t){var e=this;this.resetForm(),this.dialogFormVisible=!0,this.$nextTick(function(){e.initFormData(t),e.$refs.dataForm.clearValidate()})},initFormData:function(t){t&&(this.dataForm=t)},resetForm:function(){this.dataForm={}},requestData:function(t,e){var a=this;this.$refs.dataForm.validate(function(i){i&&e(a.dataForm).then(function(){a.$notify({title:"成功",message:"create"===t?"创建成功":"更新成功",type:"success",duration:2e3})}).catch(function(e){a.$notify({title:"失败",message:e.data?e.data.msg:"create"===t?"创建失败":"更新失败",type:"error",duration:2e3})}).finally(function(){a.$emit("fetchList"),a.dialogFormVisible=!1})})},createData:function(){this.requestData("create",i.a)},updateData:function(){this.requestData("update",i.d)},handleAreaChange:function(t){this.dataForm.provinceId=t.provinceId,this.dataForm.cityId=t.cityId}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"经销商名称",prop:"name"}},[a("el-input",{model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"主体人",prop:"principal"}},[a("el-input",{model:{value:t.dataForm.principal,callback:function(e){t.$set(t.dataForm,"principal",e)},expression:"dataForm.principal"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"主体人手机",prop:"phone"}},[a("el-input",{model:{value:t.dataForm.phone,callback:function(e){t.$set(t.dataForm,"phone",e)},expression:"dataForm.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"门店电话",prop:"telephone"}},[a("el-input",{model:{value:t.dataForm.telephone,callback:function(e){t.$set(t.dataForm,"telephone",e)},expression:"dataForm.telephone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"省市"}},[a("area-casc",{attrs:{provinceId:t.dataForm.provinceId,cityId:t.dataForm.cityId},on:{provinceChange:t.handleAreaChange,cityChange:t.handleAreaChange}})],1),t._v(" "),a("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[a("el-input",{model:{value:t.dataForm.address,callback:function(e){t.$set(t.dataForm,"address",e)},expression:"dataForm.address"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1)},staticRenderFns:[]},u=a("VU/8")(c,s,!1,null,null,null);e.default=u.exports}});