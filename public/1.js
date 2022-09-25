(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "./node_modules/stream-http/index.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      'name': 'product detail page',
      'item': {}
    };
  },
  computed: {//     formattedDate() {
    //     return moment(this.givenDate).format('YYYY');
    //   }
  },
  methods: {
    formattedDate: function formattedDate($date) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(this.givenDate).format('LL');
    },
    pay: function pay($data) {
      var thisObject = this;
      console.log($data);
      axios.post('/pay', $data).then(function (res) {
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
    },
    offerPercentage: function offerPercentage() {
      return this.item.price * 100 / (this.item.price * 2);
    },
    getData: function getData() {
      var thisObject = this;
      var data = {
        'id': thisObject.productId
      };
      axios.post('/web/get-pro-data', data).then(function (res) {
        console.log(res.data);
        thisObject.item = res.data.data;
      })["catch"](function (error) {
        alert(error);
      });
    }
  },
  watch: {},
  mounted: function mounted() {
    this.getData();
  },
  props: ['productId']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=template&id=387cb98d&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=template&id=387cb98d&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card-body"
  }, [_c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.item.name))]), _vm._v(" "), _c("h6", {
    staticClass: "card-subtitle"
  }, [_vm._v(_vm._s(_vm.item.summary))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-5 col-md-5 col-sm-6"
  }, [_c("div", {
    staticClass: "white-box text-center"
  }, [_c("img", {
    staticClass: "img-fluid rounded",
    attrs: {
      src: _vm.item.image
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-7 col-md-7 col-sm-6"
  }, [_c("h4", {
    staticClass: "box-title mt-5"
  }, [_vm._v("Item description")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.item.description))]), _vm._v(" "), _c("h2", {
    staticClass: "mt-5"
  }, [_vm._v("\n                " + _vm._s(_vm.item.price)), _c("small", {
    staticClass: "text-success"
  }, [_vm._v("(" + _vm._s(_vm.offerPercentage()) + "%off)")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-rounded",
    on: {
      click: function click($event) {
        return _vm.pay(_vm.item);
      }
    }
  }, [_vm._v("Buy Now")]), _vm._v(" "), _c("h3", {
    staticClass: "box-title mt-5"
  }, [_vm._v("Key Highlights")]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("section", {
    staticStyle: {
      "background-color": "#d3d0d0"
    }
  }, [_c("div", {
    staticClass: "container my-5 py-5"
  }, [_c("div", {
    staticClass: "row d-flex justify-content-center"
  }, [_c("div", {
    staticClass: "col-md-12 col-lg-10"
  }, [_c("div", {
    staticClass: "card text-dark"
  }, [_c("div", {
    staticClass: "card-body p-4"
  }, [_c("h4", {
    staticClass: "mb-0"
  }, [_vm._v("Recent comments")]), _vm._v(" "), _c("p", {
    staticClass: "fw-light mb-4 pb-2"
  }, [_vm._v("Latest Comments section by users")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("hr", {
    staticClass: "my-4"
  }), _vm._v(" "), _vm._l(_vm.item.comments, function (comment) {
    return _c("div", {
      staticClass: "d-flex flex-start",
      staticStyle: {
        width: "100%"
      }
    }, [_c("img", {
      staticClass: "rounded-circle shadow-1-strong me-3",
      attrs: {
        src: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp",
        alt: "avatar",
        width: "60",
        height: "60"
      }
    }), _vm._v(" "), _c("div", [_c("h6", {
      staticClass: "fw-bold mb-1"
    }, [_vm._v(_vm._s(comment.user.name))]), _vm._v(" "), _c("div", {
      staticClass: "d-flex align-items-center mb-3"
    }, [_c("p", {
      staticClass: "mb-0"
    }, [_vm._v("\n                                                " + _vm._s(_vm.formattedDate(comment.user.created_at)) + "\n                                                "), _vm._v(" "), _c("span", {
      staticClass: "badge bg-primary"
    }, [_vm._v("Pending")])]), _vm._v(" "), _vm._m(4, true), _vm._v(" "), _vm._m(5, true), _vm._v(" "), _vm._m(6, true)]), _vm._v(" "), _c("p", {
      staticClass: "mb-0"
    }, [_vm._v("\n                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It\n                                            has roots in a piece of classical Latin literature from 45 BC, making it\n                                            over 2000 years old. Richard McClintock, a Latin professor at\n                                            Hampden-Sydney College in Virginia, looked up one of the more obscure\n                                            Latin words, consectetur, from a Lorem Ipsum passage, and going through\n                                            the cites.\n                                            " + _vm._s(comment.Comment) + "\n                                        ")]), _vm._v(" "), _c("hr", {
      staticClass: "my-3"
    })])]);
  })], 2)])])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
    staticClass: "btn btn-dark btn-rounded mr-1",
    attrs: {
      "data-toggle": "tooltip",
      title: "",
      "data-original-title": "Add to cart"
    }
  }, [_c("i", {
    staticClass: "fa fa-shopping-cart"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", [_c("i", {
    staticClass: "fa fa-check text-success"
  }), _vm._v("Sturdy structure")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "fa fa-check text-success"
  }), _vm._v("Designed to foster easy portability")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "fa fa-check text-success"
  }), _vm._v("Perfect furniture to flaunt your wonderful collectibles\n                ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-12 col-md-12 col-sm-12"
  }, [_c("h3", {
    staticClass: "box-title mt-5"
  }, [_vm._v("General Info")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-striped table-product"
  }, [_c("tbody", [_c("tr", [_c("td", {
    attrs: {
      width: "390"
    }
  }, [_vm._v("Brand")]), _vm._v(" "), _c("td", [_vm._v("Stellar")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Delivery Condition")]), _vm._v(" "), _c("td", [_vm._v("Knock Down")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Seat Lock Included")]), _vm._v(" "), _c("td", [_vm._v("Yes")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Type")]), _vm._v(" "), _c("td", [_vm._v("Office Chair")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Style")]), _vm._v(" "), _c("td", [_vm._v("Contemporary&Modern")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Wheels Included")]), _vm._v(" "), _c("td", [_vm._v("Yes")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Upholstery Included")]), _vm._v(" "), _c("td", [_vm._v("Yes")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Upholstery Type")]), _vm._v(" "), _c("td", [_vm._v("Cushion")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Head Support")]), _vm._v(" "), _c("td", [_vm._v("No")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Suitable For")]), _vm._v(" "), _c("td", [_vm._v("Study&Home Office")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Adjustable Height")]), _vm._v(" "), _c("td", [_vm._v("Yes")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Model Number")]), _vm._v(" "), _c("td", [_vm._v("F01020701-00HT744A06")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Armrest Included")]), _vm._v(" "), _c("td", [_vm._v("Yes")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Care Instructions")]), _vm._v(" "), _c("td", [_vm._v("Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Finish Type")]), _vm._v(" "), _c("td", [_vm._v("Matte")])])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card-body p-4"
  }, [_c("div", {
    staticClass: "d-flex flex-start w-100"
  }, [_c("img", {
    staticClass: "rounded-circle shadow-1-strong me-3",
    attrs: {
      src: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp",
      alt: "avatar",
      width: "65",
      height: "65"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "w-100"
  }, [_c("h5", {
    staticStyle: {
      "margin-left": "10px"
    }
  }, [_vm._v("Add a comment")]), _vm._v(" "), _c("div", {
    staticClass: "form-outline"
  }, [_c("textarea", {
    staticClass: "form-control",
    attrs: {
      id: "textAreaExample",
      rows: "4"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "textAreaExample"
    }
  }, [_vm._v("What is your\n                                                    view?")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-3"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n                                                    Send "), _c("i", {
    staticClass: "fas fa-long-arrow-alt-right ms-1"
  })])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "link-muted",
    attrs: {
      href: "#!"
    }
  }, [_c("i", {
    staticClass: "fas fa-pencil-alt ms-2"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "link-muted",
    attrs: {
      href: "#!"
    }
  }, [_c("i", {
    staticClass: "fas fa-redo-alt ms-2"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "link-muted",
    attrs: {
      href: "#!"
    }
  }, [_c("i", {
    staticClass: "fas fa-heart ms-2"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-subtitle[data-v-387cb98d] {\r\n    margin-bottom: 10px;\n}\n.img-fluid[data-v-387cb98d] {\r\n    width: 430px;\r\n    height: 450px;\n}\n.link-muted[data-v-387cb98d] {\r\n    color: #aaa;\n}\n.link-muted[data-v-387cb98d]:hover {\r\n    color: #1266f1;\n}\n.form-outline[data-v-387cb98d] {\r\n    margin-left: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css&");

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

/***/ "./resources/js/components/website/ProductDetailPageComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/website/ProductDetailPageComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetailPageComponent_vue_vue_type_template_id_387cb98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetailPageComponent.vue?vue&type=template&id=387cb98d&scoped=true& */ "./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=template&id=387cb98d&scoped=true&");
/* harmony import */ var _ProductDetailPageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetailPageComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductDetailPageComponent_vue_vue_type_style_index_0_id_387cb98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css& */ "./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductDetailPageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetailPageComponent_vue_vue_type_template_id_387cb98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetailPageComponent_vue_vue_type_template_id_387cb98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "387cb98d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/website/ProductDetailPageComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetailPageComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_style_index_0_id_387cb98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=style&index=0&id=387cb98d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_style_index_0_id_387cb98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_style_index_0_id_387cb98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_style_index_0_id_387cb98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_style_index_0_id_387cb98d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=template&id=387cb98d&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=template&id=387cb98d&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_template_id_387cb98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetailPageComponent.vue?vue&type=template&id=387cb98d&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/website/ProductDetailPageComponent.vue?vue&type=template&id=387cb98d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_template_id_387cb98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailPageComponent_vue_vue_type_template_id_387cb98d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);