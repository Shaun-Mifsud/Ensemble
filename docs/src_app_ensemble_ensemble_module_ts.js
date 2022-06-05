"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ensemble_ensemble_module_ts"],{

/***/ 79823:
/*!*****************************************************!*\
  !*** ./src/app/ensemble/ensemble-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnsemblePageRoutingModule": () => (/* binding */ EnsemblePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ensemble_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensemble.page */ 99446);




const routes = [
    {
        path: '',
        component: _ensemble_page__WEBPACK_IMPORTED_MODULE_0__.EnsemblePage
    }
];
let EnsemblePageRoutingModule = class EnsemblePageRoutingModule {
};
EnsemblePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnsemblePageRoutingModule);



/***/ }),

/***/ 71775:
/*!*********************************************!*\
  !*** ./src/app/ensemble/ensemble.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnsemblePageModule": () => (/* binding */ EnsemblePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/components.module */ 45642);
/* harmony import */ var _ensemble_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ensemble-routing.module */ 79823);
/* harmony import */ var _ensemble_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ensemble.page */ 99446);








let EnsemblePageModule = class EnsemblePageModule {
};
EnsemblePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ensemble_routing_module__WEBPACK_IMPORTED_MODULE_1__.EnsemblePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentsModule
        ],
        declarations: [_ensemble_page__WEBPACK_IMPORTED_MODULE_2__.EnsemblePage]
    })
], EnsemblePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_ensemble_ensemble_module_ts.js.map