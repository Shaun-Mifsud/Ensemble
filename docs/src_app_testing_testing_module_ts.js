"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_testing_testing_module_ts"],{

/***/ 36644:
/*!***************************************************!*\
  !*** ./src/app/testing/testing-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestingPageRoutingModule": () => (/* binding */ TestingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _testing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testing.page */ 80726);




const routes = [
    {
        path: '',
        component: _testing_page__WEBPACK_IMPORTED_MODULE_0__.TestingPage
    }
];
let TestingPageRoutingModule = class TestingPageRoutingModule {
};
TestingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestingPageRoutingModule);



/***/ }),

/***/ 32947:
/*!*******************************************!*\
  !*** ./src/app/testing/testing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestingPageModule": () => (/* binding */ TestingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _testing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testing-routing.module */ 36644);
/* harmony import */ var _testing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testing.page */ 80726);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ 42214);








let TestingPageModule = class TestingPageModule {
};
TestingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _testing_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestingPageRoutingModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__.PdfViewerModule
        ],
        declarations: [_testing_page__WEBPACK_IMPORTED_MODULE_1__.TestingPage]
    })
], TestingPageModule);



/***/ }),

/***/ 80726:
/*!*****************************************!*\
  !*** ./src/app/testing/testing.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestingPage": () => (/* binding */ TestingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _testing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testing.page.html?ngResource */ 24805);
/* harmony import */ var _testing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testing.page.scss?ngResource */ 43293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var flat_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flat-embed */ 33308);
/* harmony import */ var flat_embed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flat_embed__WEBPACK_IMPORTED_MODULE_2__);





let TestingPage = class TestingPage {
    constructor() {
        //PDF
        this.pdfSrc = "assets/pdf/aflat.pdf";
    }
    ngOnInit() {
        const container = document.getElementById('sheetmusic');
        const embed = new (flat_embed__WEBPACK_IMPORTED_MODULE_2___default())(container, {
            embedParams: {
                appId: '59e7684b476cba39490801c2',
                controlsPosition: 'top',
                layout: 'responsive',
                videoPosition: 'top',
                branding: 'false',
                controlDisplay: 'true',
                controlsParts: 'true',
                themePrimary: '#0B1A33'
            }
        });
        fetch('/assets/musicXML/G_Minor.xml')
            .then(response => response.text())
            .then(xml => embed.loadMusicXML(xml))
            .then(() => embed.setTrack({
            id: 'aflat',
            type: 'youtube',
            mediaId: 'Hv4Jylc_Kq4',
            synchronizationPoints: [
                { type: 'measure', time: 5, location: { measureIdx: 0 } },
                { type: 'end', time: 58 }
            ],
        }))
            .then(() => embed.useTrack({ id: 'aflat' }))
            .catch(error => console.error(error));
    }
};
TestingPage.ctorParameters = () => [];
TestingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-testing',
        template: _testing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_testing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestingPage);



/***/ }),

/***/ 43293:
/*!******************************************************!*\
  !*** ./src/app/testing/testing.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "#sheetmusic {\n  height: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InRlc3RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NoZWV0bXVzaWN7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 24805:
/*!******************************************************!*\
  !*** ./src/app/testing/testing.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Testing\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-header collapse=\"condense\">\r\n\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Home</ion-title>\r\n    </ion-toolbar>\r\n    \r\n  </ion-header>\r\n  \r\n  <h1 id=\"pieceName\">1</h1>\r\n  <div id=\"sheetmusic\"></div>\r\n  \r\n  <h1 id=\"pieceName\">PDF</h1>\r\n  <div class=\"pdf-container\">\r\n    <pdf-viewer\r\n    [src]=\"pdfSrc\"\r\n    [rotation]=\"0\"\r\n    [original-size]=\"false\"\r\n    [show-all]=\"true\"\r\n    [fit-to-page]=\"false\"\r\n    [zoom]=\"1\"\r\n    [zoom-scale]=\"'page-width'\"\r\n    [stick-to-page]=\"false\"\r\n    [render-text]=\"true\"\r\n    [external-link-target]=\"'blank'\"\r\n    [autoresize]=\"true\"\r\n    [show-borders]=\"false\"\r\n    [page]=\"1\"\r\n    ></pdf-viewer>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_testing_testing_module_ts.js.map