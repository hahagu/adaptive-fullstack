(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./resources/js/views/general/theme/Theme.js?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./resources/js/views/general/theme/Theme.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Theme',
  data: function data() {
    return {
      themeKey: ''
    };
  },
  mounted: function mounted() {
    this.themeKey = this.$root.selectedTheme;
  },
  methods: {
    changeTheme: function changeTheme(event) {
      Pace.restart();
      var self = this;
      var value = event.target.value;
      self.$emit('startLoading');
      this.axios.get("/styles/themes/".concat(value, ".min.css"), {
        baseURL: "http://localhost"
      }).then(function () {
        self.$root.selectedTheme = value;
        self.setStorage('adaptiveTheme', value);
      })["catch"](function (error) {
        self.$root.selectedTheme = 'default';
      });
      self.$emit('endLoading');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./resources/js/views/general/theme/Theme.html?vue&type=template&id=0148f00d&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./resources/js/views/general/theme/Theme.html?vue&type=template&id=0148f00d& ***!
  \****************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "jumbotron text-center" }, [
      _c("h1", [_vm._v("Theme Manager")]),
      _vm._v(" "),
      _c("p", [_vm._v("Current Theme: " + _vm._s(_vm.$root.selectedTheme))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "well" }, [
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v("Theme")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.themeKey,
                      expression: "themeKey"
                    }
                  ],
                  staticClass: "form-control",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.themeKey = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function($event) {
                        return _vm.changeTheme($event)
                      }
                    ]
                  }
                },
                _vm._l(_vm.cssThemes, function(theme) {
                  return _c("option", { domProps: { value: theme.url } }, [
                    _vm._v(_vm._s(theme.name))
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/general/theme/Theme.html?vue&type=template&id=0148f00d&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/general/theme/Theme.html?vue&type=template&id=0148f00d& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Theme_html_vue_type_template_id_0148f00d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./Theme.html?vue&type=template&id=0148f00d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./resources/js/views/general/theme/Theme.html?vue&type=template&id=0148f00d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Theme_html_vue_type_template_id_0148f00d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Theme_html_vue_type_template_id_0148f00d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/general/theme/Theme.js?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/general/theme/Theme.js?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_Theme_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--3-0!./Theme.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./resources/js/views/general/theme/Theme.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_Theme_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/general/theme/Theme.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/general/theme/Theme.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Theme_html_vue_type_template_id_0148f00d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme.html?vue&type=template&id=0148f00d& */ "./resources/js/views/general/theme/Theme.html?vue&type=template&id=0148f00d&");
/* harmony import */ var _Theme_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Theme.js?vue&type=script&lang=js& */ "./resources/js/views/general/theme/Theme.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Theme_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Theme_html_vue_type_template_id_0148f00d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Theme_html_vue_type_template_id_0148f00d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/general/theme/Theme.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);