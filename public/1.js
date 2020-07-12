(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./resources/js/views/auth/verify-email/VerifyEmail.js?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./resources/js/views/auth/verify-email/VerifyEmail.js?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VerifyEmail',
  mounted: function mounted() {
    this.verify();
  },
  methods: {
    verify: function verify() {
      this.$emit('startLoading');
      var self = this;
      this.axios.post('/auth/email-verify', {
        expires: self.$route.params.expires,
        signature: self.$route.params.signature,
        id: self.$route.params.id
      }).then(function (result) {
        if (result.data.status == 'success') {
          self.$emit('showSuccess', 'Success!', 'Email has been verified!', 'home');
        } else {
          if (result.data.reason == 'invalid_signature') self.$emit('showError', 'Error!', 'Link has expired or has been malformed!', '', 0);else if (result.data.reason == 'already_verified') self.$emit('showError', 'Error!', 'Your email has already been verified!', '', 0);else if (result.data.reason == 'no_user') self.$emit('showError', 'Error!', "There's no user associated with this email!", '', 0);
        }
      })["catch"](function (error) {
        self.$emit('showError', 'Error!', 'A server error has occurred!', '', 0);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--15-2!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--15-2!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--15-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./resources/js/views/auth/verify-email/VerifyEmail.html?vue&type=template&id=7eb1bcd4&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./resources/js/views/auth/verify-email/VerifyEmail.html?vue&type=template&id=7eb1bcd4& ***!
  \**************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", [_vm._v("Verifying User..")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/verify-email/VerifyEmail.html?vue&type=template&id=7eb1bcd4&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/auth/verify-email/VerifyEmail.html?vue&type=template&id=7eb1bcd4& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VerifyEmail_html_vue_type_template_id_7eb1bcd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./VerifyEmail.html?vue&type=template&id=7eb1bcd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./resources/js/views/auth/verify-email/VerifyEmail.html?vue&type=template&id=7eb1bcd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VerifyEmail_html_vue_type_template_id_7eb1bcd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_VerifyEmail_html_vue_type_template_id_7eb1bcd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/auth/verify-email/VerifyEmail.js?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/auth/verify-email/VerifyEmail.js?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_VerifyEmail_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--3-0!./VerifyEmail.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./resources/js/views/auth/verify-email/VerifyEmail.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_VerifyEmail_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--15-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_15_2_node_modules_sass_loader_dist_cjs_js_ref_15_3_VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/auth/verify-email/VerifyEmail.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/auth/verify-email/VerifyEmail.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _VerifyEmail_html_vue_type_template_id_7eb1bcd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyEmail.html?vue&type=template&id=7eb1bcd4& */ "./resources/js/views/auth/verify-email/VerifyEmail.html?vue&type=template&id=7eb1bcd4&");
/* harmony import */ var _VerifyEmail_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyEmail.js?vue&type=script&lang=js& */ "./resources/js/views/auth/verify-email/VerifyEmail.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss& */ "./resources/js/views/auth/verify-email/VerifyEmail.scss?vue&type=style&index=0&module=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





var cssModules = {}
var disposed = false

function injectStyles (context) {
  if (disposed) return
  
        cssModules["$style"] = (_VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _VerifyEmail_scss_vue_type_style_index_0_module_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__["default"])
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
  _VerifyEmail_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerifyEmail_html_vue_type_template_id_7eb1bcd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerifyEmail_html_vue_type_template_id_7eb1bcd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/verify-email/VerifyEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);