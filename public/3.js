(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./resources/js/views/general/profile/Profile.js?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./resources/js/views/general/profile/Profile.js?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Profile',
  methods: {
    updateProfile: function updateProfile() {
      var formData = new FormData();
      formData.append('avatar', document.querySelector('#avatarUpload').files[0]);
      this.axios.post('/auth/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        window.location.reload();
      })["catch"](function (error) {
        console.log(error);
        alert('An error has occured! Please retry.');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--15-2!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--15-2!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--15-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./Profile.scss?vue&type=style&index=0&module=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./resources/js/views/general/profile/Profile.html?vue&type=template&id=73c8204d&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./resources/js/views/general/profile/Profile.html?vue&type=template&id=73c8204d& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4 mb-3" }, [
          _c("div", { staticClass: "profile-picture text-center" }, [
            _c("img", {
              staticClass: "rounded-circle",
              staticStyle: {
                "object-fit": "contain",
                width: "200px",
                height: "200px",
                "background-color": "black"
              },
              attrs: { src: "storage/avatars/" + _vm.$auth.user().avatar }
            }),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn btn-primary",
                staticStyle: { position: "relative", overflow: "hidden" }
              },
              [
                _vm._v(
                  "\r\n                        Upload Image\r\n                        "
                ),
                _c("input", {
                  staticStyle: {
                    position: "absolute",
                    "font-size": "50px",
                    opacity: "0",
                    right: "0",
                    top: "0",
                    cursor: "pointer"
                  },
                  attrs: { type: "file", name: "avatar", id: "avatarUpload" },
                  on: {
                    change: function($event) {
                      return _vm.updateProfile()
                    }
                  }
                })
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-8 text-center text-md-left" }, [
          _c("h3", { staticClass: "mt-0" }, [
            _vm._v(_vm._s(_vm.$auth.user().name))
          ]),
          _vm._v(
            "\r\n                " +
              _vm._s(_vm.$auth.user().email) +
              "\r\n            "
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "jumbotron text-center" }, [
      _c("h1", [_vm._v("My Profile")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/general/profile/Profile.html?vue&type=template&id=73c8204d&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/general/profile/Profile.html?vue&type=template&id=73c8204d& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Profile_html_vue_type_template_id_73c8204d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./Profile.html?vue&type=template&id=73c8204d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./resources/js/views/general/profile/Profile.html?vue&type=template&id=73c8204d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Profile_html_vue_type_template_id_73c8204d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Profile_html_vue_type_template_id_73c8204d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/general/profile/Profile.js?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/general/profile/Profile.js?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_Profile_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--3-0!./Profile.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./resources/js/views/general/profile/Profile.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_Profile_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--15-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./Profile.scss?vue&type=style&index=0&module=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/general/profile/Profile.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/general/profile/Profile.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Profile_html_vue_type_template_id_73c8204d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.html?vue&type=template&id=73c8204d& */ "./resources/js/views/general/profile/Profile.html?vue&type=template&id=73c8204d&");
/* harmony import */ var _Profile_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.js?vue&type=script&lang=js& */ "./resources/js/views/general/profile/Profile.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.scss?vue&type=style&index=0&module=true&lang=scss& */ "./resources/js/views/general/profile/Profile.scss?vue&type=style&index=0&module=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





var cssModules = {}
var disposed = false

function injectStyles (context) {
  if (disposed) return
  
        cssModules["$style"] = (_Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _Profile_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__["default"])
        Object.defineProperty(this, "$style", {
          configurable: true,
          get: function () {
            return cssModules["$style"]
          }
        })
      
}


  module.hot && false



        module.hot && false

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_html_vue_type_template_id_73c8204d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_html_vue_type_template_id_73c8204d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/general/profile/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);