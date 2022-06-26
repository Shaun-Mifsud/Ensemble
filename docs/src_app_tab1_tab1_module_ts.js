"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/components.module */ 45642);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 341);










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 78165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ensemble.service */ 98293);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 63587);






swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination]);
let Tab1Page = class Tab1Page {
    constructor(ensembleService) {
        this.ensembleService = ensembleService;
        this.config = {
            slidesPerView: 3,
            pagination: true,
        };
    }
    ngOnInit() {
    }
    //swiper
    ngAfterContentChecked() {
        if (this.swiper) {
            this.swiper.updateSwiper({});
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService }
];
Tab1Page.propDecorators = {
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['siwper',] }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 78165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".swiper {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide {\n  width: 100%/3;\n}\n\n.swiper-wrapper {\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFJQTtFQUNJLG9CQUFBO0FBREoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL3N3aXBlclxyXG4uc3dpcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuLnN3aXBlci1zbGlkZXtcclxuICAgIHdpZHRoOiAxMDAlLzM7XHJcbn1cclxuXHJcbi5zd2lwZXItd3JhcHBlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!--header-->\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <h1>\r\n          Welcome user\r\n        </h1>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-img src=\"/assets/icons/logoHalf.png\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!--search-->\r\n    <ion-row>\r\n      <ion-searchbar color=\"light\" animated placeholder=\"search for scores, ensembles...\"></ion-searchbar>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!--events-->\r\n  <div class=\"events\">\r\n    <ion-grid>\r\n      <!--events title & button-->\r\n      <ion-row>\r\n        <ion-col size=\"10\">\r\n          <ion-item lines=\"none\">\r\n            <span class=\"iconify\" data-icon=\"mdi:music-box-multiple\" style=\"color: #0b1a33;\"></span>\r\n            <h2>Upcoming Events</h2>\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2\">\r\n          <ion-button color=\"danger\" routerLink=\"../tab3\">View Events</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <!--events cards-->\r\n      <ion-row>\r\n        <swiper #swiper [config]=\"config\">\r\n          <ng-template swiperSlide *ngFor=\"let event of ensembleService.event\">\r\n            <!--card 1, 2, etc.. -->\r\n            <ion-card [routerLink]=\"['../','tab4',event.ensembleID,event.id]\">\r\n    \r\n              <div id=\"colorGradient\"></div>\r\n              <div id=\"colorFilter\"></div>\r\n\r\n              <div id=\"cardImage\">\r\n                <img src=\"{{event.image}}\">\r\n              </div>\r\n              \r\n              <ion-card-content>\r\n                <ion-card-title>{{event.name}}</ion-card-title>\r\n                <ion-card-subtitle>{{ensembleService.getEnsembleByID(event.ensembleID).name}}</ion-card-subtitle>\r\n  \r\n                <ion-row id=\"eventCardDetails\">\r\n                  <ion-col size=\"6\">\r\n                    <ion-text id=\"type\">{{event.type}}</ion-text>\r\n                  </ion-col>\r\n  \r\n                  <ion-col size=\"6\">\r\n                    <ion-text id=\"date\">date/time</ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n  \r\n              </ion-card-content>\r\n            </ion-card>\r\n  \r\n          </ng-template>\r\n  \r\n        </swiper>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <!--update post-->\r\n  <div class=\"ensemblePost\">\r\n    <ion-grid>\r\n      <!--update title & button-->\r\n      <ion-row>\r\n        <ion-col size=\"10\">\r\n          <ion-item lines=\"none\">\r\n            <span class=\"iconify\" data-icon=\"mdi:music-box-multiple\" style=\"color: #0b1a33;\"></span>\r\n            <h2>Ensemble Update</h2>\r\n          </ion-item>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\">\r\n          <ion-button color=\"secondary\">View Updates</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!--posts-->\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"1\">\r\n            <ion-avatar>\r\n              <img src=\"assets/images/ensemble/mpoLogo.png\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"11\">\r\n            <h1>Malta Philharmonic Orchestra</h1>\r\n            <ion-text color=\"success\">5 May 10:35am</ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus porro, voluptatibus quia quisquam\r\n                  magni cupiditate officiis amet ex minima necessitatibus saepe, natus perspiciatis ut corporis?\r\n                  Voluptatem maxime unde placeat ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus porro, voluptatibus quia quisquam\r\n                  magni cupiditate officiis amet ex minima necessitatibus saepe, natus perspiciatis ut corporis?\r\n                  Voluptatem maxime unde placeat ratione.\r\n                </p>\r\n            </ion-col>\r\n          </ion-row>\r\n      </ion-card>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <!--cateogries-->\r\n  <div class=\"categories\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-chip color=\"tertiary\">\r\n            <ion-icon name=\"star\"></ion-icon>\r\n            <ion-label>Favorites</ion-label>\r\n          </ion-chip>\r\n\r\n          <ion-chip color=\"primary\">\r\n            <ion-icon name=\"star\"></ion-icon>\r\n            <ion-label>ALCM</ion-label>\r\n          </ion-chip>\r\n\r\n          <ion-chip color=\"secondary\">\r\n            <ion-icon name=\"star\"></ion-icon>\r\n            <ion-label>Marches</ion-label>\r\n          </ion-chip>\r\n\r\n          <ion-chip color=\"success\">\r\n            <ion-icon name=\"star\"></ion-icon>\r\n            <ion-label>Summer Exam</ion-label>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <!--recently Playlist-->\r\n  <div class=\"recentPlaylists\">\r\n    <!--playlist title & button-->\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <ion-item lines=\"none\">\r\n          <span class=\"iconify\" data-icon=\"ic:round-library-music\"></span>\r\n          <h2>Recent playlist</h2>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n        <ion-button routerLink=\"../tab2\" routerDirection=\"forward\">View Playlists</ion-button>\r\n      \r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-list lines=\"none\">\r\n      <!--list header-->\r\n      <ion-item class=\"listHeader\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\"><h6>Piece Title</h6></ion-col>\r\n            <ion-col size=\"2\"><h6>Composer</h6></ion-col>\r\n            <ion-col size=\"2\"><h6>Instrumentation</h6></ion-col>\r\n            <ion-col size=\"2\"><h6>Ensemble</h6></ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n\r\n      <ion-item-sliding *ngFor=\"let score of ensembleService.score | slice:0:3; let i = index;\">\r\n        <!--piece card-->\r\n        <ion-item>\r\n          <ion-card [routerLink]=\"['/tabs/tab2', score.id]\" class=\"pieceCard\" color=\"light\">\r\n            <ion-card-content>\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <h1>{{score.name}}</h1>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"2\">\r\n                    <h3>{{score.composer}}</h3>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\">\r\n                    <h3>{{score.instruments}}</h3>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\">\r\n                    <h3>{{ensembleService.getEnsembleByID(score.ensembleID)?\r\n                      ensembleService.getEnsembleByID(score.ensembleID).name : 'Personal' }}</h3>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-card-content>\r\n            </ion-card>\r\n        </ion-item>\r\n\r\n        <ion-item-options>\r\n          <ion-item-option>\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n\r\n    </ion-list>\r\n  </div>\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map