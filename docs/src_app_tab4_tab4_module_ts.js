"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 24762:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component.html?ngResource */ 50959);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss?ngResource */ 1509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 24762);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 35355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ensemble_ensemble_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ensemble/ensemble.page */ 99446);
/* harmony import */ var _event_event_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/event.page */ 70705);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4.page */ 3631);






const routes = [
    {
        path: '',
        children: [
            {
                //tab 4
                path: '',
                component: _tab4_page__WEBPACK_IMPORTED_MODULE_2__.Tab4Page
            },
            {
                path: ':ensembleId',
                children: [
                    {
                        //ensemble by ID
                        path: '',
                        children: [
                            {
                                path: '',
                                component: _ensemble_ensemble_page__WEBPACK_IMPORTED_MODULE_0__.EnsemblePage
                            },
                            //event by ID
                            {
                                path: ':eventId',
                                component: _event_event_page__WEBPACK_IMPORTED_MODULE_1__.EventPage
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 32486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4-routing.module */ 35355);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/components.module */ 45642);










let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page }]),
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab4PageRoutingModule,
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 49184);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 97432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ensemble.service */ 98293);






let Tab4Page = class Tab4Page {
    constructor(router, ensembleService) {
        this.router = router;
        this.ensembleService = ensembleService;
    }
    ngOnInit() {
        this.router.events.subscribe(nav => {
            if (nav instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                console.log("Link changed.");
            }
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ }),

/***/ 1509:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 97432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-avatar, ion-icon {\n  width: 8em;\n  height: 8em;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoidGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyLGlvbi1pY29ue1xyXG4gICAgd2lkdGg6IDhlbTtcclxuICAgIGhlaWdodDogOGVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */";

/***/ }),

/***/ 50959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\r\n  <strong>{{ name }}</strong>\r\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n</div>";

/***/ }),

/***/ 49184:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!--header-->\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <h1>\r\n          Ensembles\r\n        </h1>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button color=\"primary\">Join ensemble</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!--search-->\r\n    <ion-row>\r\n      <ion-searchbar color=\"light\" animated placeholder=\"search for scores, ensembles...\"></ion-searchbar>\r\n    </ion-row>\r\n\r\n  </ion-grid>  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <!--ensembles-->\r\n    <ion-grid>\r\n      <!--ensemble cards-->\r\n      <ion-row>\r\n        <!--card 1-->\r\n        <ion-col id=\"ensemble\" size=\"4\" *ngFor=\"let ensemble of ensembleService.ensemble; let i = index\" [routerLink]=\"['./', ensemble.id]\">\r\n          <ion-card>                        \r\n            <div id=\"colorGradient\"></div>\r\n            <ion-avatar>\r\n              <img src=\"{{ensemble.picture}}\" alt=\"ensemble profile image\">\r\n            </ion-avatar>\r\n            \r\n            <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">{{ensemble.name}}</ion-card-title>\r\n            </ion-card-header>\r\n            \r\n            <ion-card-content>\r\n              <ion-grid>\r\n                <ion-row class=\"ion-text-center\">\r\n                  <ion-col class=\"ion-text-justify\" size=\"4\">\r\n                    <span id=\"noOfMembers\" class=\"iconify\" data-icon=\"ic:baseline-person\"></span>\r\n                    (40)\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"4\">\r\n                    <span id=\"noOfEvents\" class=\"iconify\" data-icon=\"ic:baseline-person\"></span>\r\n                    (4)\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"4\">\r\n                    <span id=\"ensembleType\" class=\"iconify\" data-icon=\"ic:baseline-person\"></span>\r\n                    {{ensemble.visibility}}\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <p>{{ensemble.description}}</p>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <!--Join new ensemble card-->\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-card id=\"newEnsemble\">\r\n            <ion-card-content>\r\n              <ion-icon name=\"add\"></ion-icon>\r\n              <h2>Join ensemble</h2>\r\n            </ion-card-content>\r\n\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map