(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./resources/js/views/auth/reset-password-form/ResetPasswordForm.js?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./resources/js/views/auth/reset-password-form/ResetPasswordForm.js?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResetPasswordForm',
  data: function data() {
    return {
      email: '',
      password: '',
      confirm: ''
    };
  },
  validations: {
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(3),
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(255)
    },
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(8)
    },
    confirm: {
      minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["minLength"])(8),
      sameAsPass: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["sameAs"])('password')
    }
  },
  methods: {
    submit: function submit() {
      var self = this;
      this.$v.$touch();
      if (this.$v.$invalid) return; // POST Logic

      this.$emit('startLoading');
      this.axios.post('/auth/reset-password', {
        token: self.$route.params.token,
        email: self.email,
        password: self.password,
        password_confirmation: self.confirm
      }).then(function (result) {
        console.log(result);

        if (result.data.status == 'success') {
          self.$emit('showSuccess', 'Success!', 'Password has been reset!', 'login');
        } else {
          self.$emit('showError', 'Error!', 'Link Expired!');
        }
      })["catch"](function (error) {
        self.$emit('showError', 'Error!', 'A server error has occurred!');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./resources/js/views/auth/reset-password-form/ResetPasswordForm.html?vue&type=template&id=0a6e124f&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./resources/js/views/auth/reset-password-form/ResetPasswordForm.html?vue&type=template&id=0a6e124f& ***!
  \***************************************************************************************************************************************************************************************/
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
  return _c(
    "form",
    {
      attrs: { id: "recoveryForm", name: "recoveryForm" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit($event)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-lg-2 col-form-label form-control-label text-muted"
          },
          [_vm._v("Email")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email"
              }
            ],
            staticClass: "form-control",
            attrs: { name: "email", type: "email" },
            domProps: { value: _vm.email },
            on: {
              blur: _vm.$v.email.$touch,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.$v.email.$dirty
            ? _c("div", { staticClass: "text-danger" }, [
                !_vm.$v.email.required
                  ? _c("span", [_vm._v("Field is required")])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.email.minLength
                  ? _c("span", [
                      _vm._v(
                        "Email must be at least " +
                          _vm._s(_vm.$v.email.$params.minLength.min) +
                          " characters! "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.email.maxLength
                  ? _c("span", [
                      _vm._v(
                        "Email can't be longer than " +
                          _vm._s(_vm.$v.email.$params.maxLength.max) +
                          " characters! "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.email.email
                  ? _c("span", [_vm._v("Input a valid email address! ")])
                  : _vm._e()
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-lg-2 col-form-label form-control-label text-muted"
          },
          [_vm._v("Password")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password"
              }
            ],
            staticClass: "form-control",
            attrs: { name: "password", type: "password" },
            domProps: { value: _vm.password },
            on: {
              blur: _vm.$v.password.$touch,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.$v.password.$dirty
            ? _c("div", { staticClass: "text-danger" }, [
                !_vm.$v.password.required
                  ? _c("span", [_vm._v("Field is required")])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.password.minLength
                  ? _c("span", [
                      _vm._v(
                        "Password must be at least " +
                          _vm._s(_vm.$v.password.$params.minLength.min) +
                          " characters! "
                      )
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-lg-2 col-form-label form-control-label text-muted"
          },
          [_vm._v("Confirm")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.confirm,
                expression: "confirm"
              }
            ],
            staticClass: "form-control",
            attrs: { name: "confirm", type: "password" },
            domProps: { value: _vm.confirm },
            on: {
              blur: _vm.$v.confirm.$touch,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.confirm = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.$v.confirm.$dirty
            ? _c("div", { staticClass: "text-danger" }, [
                !_vm.$v.confirm.minLength
                  ? _c("span", [
                      _vm._v(
                        "Password must be at least " +
                          _vm._s(_vm.$v.confirm.$params.minLength.min) +
                          " characters! "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.confirm.sameAsPass
                  ? _c("span", [_vm._v("Password doesn't match! ")])
                  : _vm._e()
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row text-center" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("input", {
          staticClass: "btn btn-primary btn-block",
          attrs: { type: "submit", value: "Reset Password" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/reset-password-form/ResetPasswordForm.html?vue&type=template&id=0a6e124f&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/auth/reset-password-form/ResetPasswordForm.html?vue&type=template&id=0a6e124f& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ResetPasswordForm_html_vue_type_template_id_0a6e124f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./ResetPasswordForm.html?vue&type=template&id=0a6e124f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./resources/js/views/auth/reset-password-form/ResetPasswordForm.html?vue&type=template&id=0a6e124f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ResetPasswordForm_html_vue_type_template_id_0a6e124f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ResetPasswordForm_html_vue_type_template_id_0a6e124f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/auth/reset-password-form/ResetPasswordForm.js?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/auth/reset-password-form/ResetPasswordForm.js?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_ResetPasswordForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--3-0!./ResetPasswordForm.js?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./resources/js/views/auth/reset-password-form/ResetPasswordForm.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_ResetPasswordForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/reset-password-form/ResetPasswordForm.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/views/auth/reset-password-form/ResetPasswordForm.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPasswordForm_html_vue_type_template_id_0a6e124f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordForm.html?vue&type=template&id=0a6e124f& */ "./resources/js/views/auth/reset-password-form/ResetPasswordForm.html?vue&type=template&id=0a6e124f&");
/* harmony import */ var _ResetPasswordForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordForm.js?vue&type=script&lang=js& */ "./resources/js/views/auth/reset-password-form/ResetPasswordForm.js?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPasswordForm_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPasswordForm_html_vue_type_template_id_0a6e124f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPasswordForm_html_vue_type_template_id_0a6e124f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/reset-password-form/ResetPasswordForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);