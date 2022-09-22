(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ProductListComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/ProductListComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      'name': 'Pruduct',
      'data': {
        'image_url': 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp',
        'name': 'Quant trident shirts',
        'artical_number': '36',
        'price': 5000,
        'mrp_price': 10000,
        'item_buy_link': "/buy/artical/36"
      }
    };
  },
  methods: {
    pay: function pay() {
      var thisObject = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/pay', thisObject.data).then(function (res) {
        console.log(res.data);

        if (res.data.code == 200) {
          console.log('hey don');
          thisObject.getwayOpen(res.data.amount, res.data.order_id);
        }
      })["catch"](function (error) {
        alert(error);
      });
    },
    getwayOpen: function getwayOpen(amount, order_id) {
      var amount = amount;
      var order_id = order_id;
      window.open("http://myapp.com/open-getway-page/" + amount + "/" + order_id, "_blank");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ProductListComponent.vue?vue&type=template&id=20d16996&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/ProductListComponent.vue?vue&type=template&id=20d16996& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("section", {
    staticStyle: {
      "background-color": "#eee"
    }
  }, [_c("div", {
    staticClass: "container py-5"
  }, [_c("div", {
    staticClass: "row justify-content-center mb-3"
  }, [_c("div", {
    staticClass: "col-md-12 col-xl-10"
  }, [_c("div", {
    staticClass: "card shadow-0 border rounded-3"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0"
  }, [_c("div", {
    staticClass: "bg-image hover-zoom ripple rounded ripple-surface"
  }, [_c("img", {
    staticClass: "w-100",
    attrs: {
      src: _vm.data.image_url
    }
  }), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-lg-6 col-xl-6"
  }, [_c("h5", [_vm._v(_vm._s(_vm.data.name))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-row"
  }, [_vm._m(1), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.data.artical_number))])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("p", {
    staticClass: "text-truncate mb-4 mb-md-0"
  }, [_vm._v("\n                                        There are many variations of passages of Lorem Ipsum available, but the\n                                        majority have suffered alteration in some form, by injected humour, or\n                                        randomised words which don't look even slightly believable.\n                                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start"
  }, [_c("div", {
    staticClass: "d-flex flex-row align-items-center mb-1"
  }, [_c("h4", {
    staticClass: "mb-1 me-1"
  }, [_vm._v(_vm._s(_vm.data.price))]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_c("s", [_vm._v(_vm._s(_vm.data.mrp_price))])])]), _vm._v(" "), _c("h6", {
    staticClass: "text-success"
  }, [_vm._v("Free shipping")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column mt-4"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "button"
    }
  }, [_vm._v("Details")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-primary btn-sm mt-2",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.pay();
      }
    }
  }, [_vm._v("\n                                            Buy Now\n                                        ")])])])])])])])])])]), _vm._v(" "), _c("div")]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    attrs: {
      href: "#!"
    }
  }, [_c("div", {
    staticClass: "hover-overlay"
  }, [_c("div", {
    staticClass: "mask",
    staticStyle: {
      "background-color": "rgba(253, 253, 253, 0.15)"
    }
  })])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-danger mb-1 me-2"
  }, [_c("i", {
    staticClass: "fa fa-star"
  }), _vm._v(" "), _c("i", {
    staticClass: "fa fa-star"
  }), _vm._v(" "), _c("i", {
    staticClass: "fa fa-star"
  }), _vm._v(" "), _c("i", {
    staticClass: "fa fa-star"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mt-1 mb-0 text-muted small"
  }, [_c("span", [_vm._v("100% cotton")]), _vm._v(" "), _c("span", {
    staticClass: "text-primary"
  }, [_vm._v(" • ")]), _vm._v(" "), _c("span", [_vm._v("Light weight")]), _vm._v(" "), _c("span", {
    staticClass: "text-primary"
  }, [_vm._v(" • ")]), _vm._v(" "), _c("span", [_vm._v("Best finish"), _c("br")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mb-2 text-muted small"
  }, [_c("span", [_vm._v("Unique design")]), _vm._v(" "), _c("span", {
    staticClass: "text-primary"
  }, [_vm._v(" • ")]), _vm._v(" "), _c("span", [_vm._v("For men")]), _vm._v(" "), _c("span", {
    staticClass: "text-primary"
  }, [_vm._v(" • ")]), _vm._v(" "), _c("span", [_vm._v("Casual"), _c("br")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/dashboard/ProductListComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/dashboard/ProductListComponent.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductListComponent_vue_vue_type_template_id_20d16996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductListComponent.vue?vue&type=template&id=20d16996& */ "./resources/js/components/dashboard/ProductListComponent.vue?vue&type=template&id=20d16996&");
/* harmony import */ var _ProductListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/ProductListComponent.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ProductListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ProductListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductListComponent_vue_vue_type_template_id_20d16996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductListComponent_vue_vue_type_template_id_20d16996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/ProductListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/ProductListComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/ProductListComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ProductListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/ProductListComponent.vue?vue&type=template&id=20d16996&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/ProductListComponent.vue?vue&type=template&id=20d16996& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListComponent_vue_vue_type_template_id_20d16996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductListComponent.vue?vue&type=template&id=20d16996& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/ProductListComponent.vue?vue&type=template&id=20d16996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListComponent_vue_vue_type_template_id_20d16996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductListComponent_vue_vue_type_template_id_20d16996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);