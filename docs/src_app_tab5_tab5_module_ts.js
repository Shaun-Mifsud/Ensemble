"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab5_tab5_module_ts"],{

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

/***/ 26672:
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageRoutingModule": () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 32584);




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page,
    }
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ 5184:
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageModule": () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 32584);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5-routing.module */ 26672);









let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page }]),
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab5PageRoutingModule,
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page]
    })
], Tab5PageModule);



/***/ }),

/***/ 32584:
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5Page": () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page.html?ngResource */ 81503);
/* harmony import */ var _tab5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page.scss?ngResource */ 75271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ensemble.service */ 98293);





let Tab5Page = class Tab5Page {
    constructor(ensembleService) {
        this.ensembleService = ensembleService;
        this.userID = 1; //hard coded
    }
    ngOnInit() {
        this.loggedInUser = this.ensembleService.getUserByID(this.userID);
        if (this.loggedInUser === undefined) {
            console.log("User not found!");
            return;
        }
    }
    convertPassword(password) {
        let encryPass = '*';
        for (let i = 0; i < password.length - 1; i++) {
            encryPass = encryPass + '*';
        }
        return encryPass;
    }
};
Tab5Page.ctorParameters = () => [
    { type: _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService }
];
Tab5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab5',
        template: _tab5_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab5_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab5Page);



/***/ }),

/***/ 1509:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 75271:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  width: 12em;\n  height: 12em;\n  margin: auto;\n}\n\n.accountFields {\n  background-color: var(--ion-color-primary-light);\n}\n\n#noInstrument {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnREFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFESiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXJ7XHJcbiAgICB3aWR0aDogMTJlbTtcclxuICAgIGhlaWdodDogMTJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmFjY291bnRGaWVsZHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbn1cclxuXHJcbiNub0luc3RydW1lbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGhlaWdodDogNDUlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 50959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\r\n  <strong>{{ name }}</strong>\r\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n</div>";

/***/ }),

/***/ 81503:
/*!************************************************!*\
  !*** ./src/app/tab5/tab5.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!--header-->\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <h1>\r\n          Account\r\n        </h1>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-img src=\"/assets/icons/logoHalf.png\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid>\r\n    <div class=\"accountFields\">\r\n      <ion-row>\r\n        <!--title-->\r\n        <ion-col size=\"8\">\r\n          <ion-item lines=\"none\">\r\n            <span class=\"iconify\" data-icon=\"mdi:music-box-multiple\" style=\"color: #0b1a33;\"></span>\r\n            <h2>Account details</h2>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <!--log out button-->\r\n        <ion-col size=\"4\">\r\n          <ion-button class=\"ion-float-end\" color=\"danger\">log out</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      \r\n      <ion-row>\r\n        <!--avatar-->\r\n        <ion-col size=\"12\">\r\n          <ion-avatar>\r\n            <img src=\"{{loggedInUser.picture}}\" alt=\"\">\r\n          </ion-avatar>\r\n        </ion-col>\r\n      </ion-row>\r\n        \r\n\r\n    <!--display fields-->\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <h6>Full name</h6>\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-card-content>\r\n              <h1>{{loggedInUser.name}}</h1>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <h6>Email</h6>\r\n          <ion-card  class=\"pieceCard\" color=\"light\">\r\n            <ion-card-content>\r\n              <h1>{{loggedInUser.email}}</h1>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\" *ngIf=\"loggedInUser.phoneNumber\">\r\n          <h6>Phone Number</h6>\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-card-content>\r\n              <h1>{{loggedInUser.phoneNumber }}</h1>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <!--show password as size 6, only when phone number is not null-->\r\n        <ion-col size=\"6\" *ngIf=\"loggedInUser.phoneNumber\">\r\n          <h6>Password</h6>\r\n          <ion-card  class=\"pieceCard\" color=\"light\">\r\n            <ion-card-content>\r\n              <h1>{{convertPassword(loggedInUser.password)}}</h1>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <!--show password as size 12, only when phone number is null-->\r\n        <ion-col size=\"12\" *ngIf=\"!loggedInUser.phoneNumber\">\r\n          <h6>Password</h6>\r\n          <ion-card  class=\"pieceCard\" color=\"light\">\r\n            <ion-card-content>\r\n              <h1>{{convertPassword(loggedInUser.password)}}</h1>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!--instruments-->\r\n    <div class=\"accountFields\">\r\n      <ion-row>\r\n        <ion-col size=\"10\">\r\n          <ion-item lines=\"none\">\r\n            <span class=\"iconify\" data-icon=\"mdi:music-box-multiple\" style=\"color: #0b1a33;\"></span>\r\n            <h2>Instruments</h2>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\" *ngIf=\"loggedInUser.instrument\">\r\n          <ion-button class=\"ion-float-end\">Add instrument</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"loggedInUser.instrument\">\r\n        <ion-col size=\"3\" *ngFor=\"let userInstru of loggedInUser.instrument\"> \r\n          <ion-chip color=\"tertiary\">\r\n            <ion-label>{{userInstru}}</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row id=\"noInstrument\" *ngIf=\"!loggedInUser.instrument\">\r\n        <h4>No Instruments</h4>\r\n        <h6>Select each instrument that you play for better identification</h6>\r\n        <ion-button color=\"primary\" disabled=\"true\">add instrument</ion-button>\r\n      </ion-row>\r\n  </div>\r\n\r\n    \r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab5_tab5_module_ts.js.map