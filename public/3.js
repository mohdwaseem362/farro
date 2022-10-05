(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      hideNav: false,
      navList: {
        '0': {
          'name': 'client',
          'url': 'dfsdfsdfsfasdf'
        },
        '1': {
          'name': 'client',
          'url': 'dfsdfsdfsfasdf'
        },
        '2': {
          'name': 'client',
          'url': 'dfsdfsdfsfasdf'
        },
        '3': {
          'name': 'client',
          'url': 'dfsdfsdfsfasdf'
        }
      }
    };
  },
  computed: {},
  components: {},
  methods: {
    openNav: function openNav() {
      var thisObject = this;
      thisObject.hideNav = false;
    },
    closeNav: function closeNav() {
      var thisObject = this;
      thisObject.hideNav = true;
    },
    getAllNavMenuList: function getAllNavMenuList() {
      var thisObject = this;
      console.log(thisObject.headerMenu);
    }
  },
  mounted: function mounted() {
    var thisObject = this;
    thisObject.getAllNavMenuList();
  },
  props: ['headerMenu']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=template&id=536d4fa8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=template&id=536d4fa8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_vm.hideNav == false ? _c("div", {
    staticClass: "sidenav",
    attrs: {
      id: "mySidenav"
    }
  }, [_c("a", {
    on: {
      click: function click($event) {
        return _vm.closeNav();
      }
    }
  }, [_c("span", {
    staticStyle: {
      "font-size": "30px",
      cursor: "pointer"
    }
  }, [_vm._v(" ☰")])]), _vm._v(" "), _vm._l(_vm.navList, function (abs) {
    return _c("a", {
      attrs: {
        href: abs.url
      }
    }, [_vm._v(_vm._s(abs.name))]);
  }), _vm._v(" "), _c("a", {
    attrs: {
      href: "#"
    }
  }, [_vm._v(_vm._s(_vm.headerMenu))])], 2) : _vm._e(), _vm._v(" "), _vm.hideNav == true ? _c("div", {
    attrs: {
      id: "main"
    }
  }, [_c("a", {
    on: {
      click: function click($event) {
        return _vm.openNav();
      }
    }
  }, [_c("span", {
    staticStyle: {
      "font-size": "30px",
      cursor: "pointer"
    }
  }, [_vm._v(" ☰")])])]) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody[data-v-536d4fa8] {\r\n  font-family: \"Lato\", sans-serif;\n}\n.sidenav[data-v-536d4fa8] {\r\n  height: 80%;\r\n  width: 150px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 60px;\r\n  left: 0;\r\n  background-color: rgb(255 255 255);\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n  border: 1px;\r\n  padding: 8px;\r\n  box-shadow: 3px 3px rgb(241 241 241);\n}\n.sidenav a[data-v-536d4fa8] {\r\n  padding: 6px 12px 10px 10px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  color: #141212;\r\n  display: block;\r\n  transition: 0.3s;\r\n  box-shadow: -1px 1px rgb(241 241 241);\n}\n.sidenav a[data-v-536d4fa8]:hover {\r\n  color: #0a0909;\n}\n.sidenav .closebtn[data-v-536d4fa8] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\n}\n#main[data-v-536d4fa8] {\r\n  height: 80%;\r\n  width: 50px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 60px;\r\n  left: 0;\r\n  background-color: rgb(255 255 255);\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n  border: 1px;\r\n  padding: 8px;\r\n  box-shadow: 3px 3px rgb(241 241 241);\n}\n@media screen and (max-height: 450px) {\n.sidenav[data-v-536d4fa8] {\r\n    padding-top: 15px;\n}\n.sidenav a[data-v-536d4fa8] {\r\n    font-size: 18px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/dashboard/SidebarMenuComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarMenuComponent.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarMenuComponent_vue_vue_type_template_id_536d4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarMenuComponent.vue?vue&type=template&id=536d4fa8&scoped=true& */ "./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=template&id=536d4fa8&scoped=true&");
/* harmony import */ var _SidebarMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarMenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SidebarMenuComponent_vue_vue_type_style_index_0_id_536d4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css& */ "./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SidebarMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarMenuComponent_vue_vue_type_template_id_536d4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarMenuComponent_vue_vue_type_template_id_536d4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "536d4fa8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/SidebarMenuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarMenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_style_index_0_id_536d4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=style&index=0&id=536d4fa8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_style_index_0_id_536d4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_style_index_0_id_536d4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_style_index_0_id_536d4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_style_index_0_id_536d4fa8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=template&id=536d4fa8&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=template&id=536d4fa8&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_template_id_536d4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarMenuComponent.vue?vue&type=template&id=536d4fa8&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/SidebarMenuComponent.vue?vue&type=template&id=536d4fa8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_template_id_536d4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_template_id_536d4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);