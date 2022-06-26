"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 93092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





const routes = [
    {
        path: '',
        children: [
            {
                //tab 2
                path: '',
                component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
            },
            {
                path: ':scoreID',
                children: [
                    {
                        //score by ID
                        path: '',
                        children: [
                            {
                                path: '',
                                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_score-details_score-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../score-details/score-details.module */ 51549)).then(m => m.ScoreDetailsPageModule)
                            },
                            //part by ID
                            {
                                path: ':scorePart',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_flat-embed_dist_embed_js-node_modules_ng2-pdf-viewer___ivy_ngcc___fesm20-d1dcb9"), __webpack_require__.e("src_app_score_score_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../score/score.module */ 46244)).then(m => m.ScorePageModule)
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 14608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 93092);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 341);









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 70442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 71748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 81597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ensemble.service */ 98293);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ 63587);






swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination]);
let Tab2Page = class Tab2Page {
    constructor(ensembleService) {
        this.ensembleService = ensembleService;
        this.composers = [{ composer: 'random composer', score: ['random score'] }];
        this.config = {
            slidesPerView: 3,
            pagination: true,
        };
    }
    ngOnInit() {
        let score = this.ensembleService.score;
        //get every unique composer name
        this.composerName = score.map(item => item.composer)
            .filter((value, index, self) => self.indexOf(value) === index);
        //for each composer, push 'scores' of that composer to 'composers'
        for (var i = 0; i < this.composerName.length; i++) {
            this.composers.push({ composer: this.composerName[i], score: score.filter(c => c.composer == this.composerName[i]) });
        }
        //remove the first element of the array, to remove 'random composer'
        this.composers.shift();
    }
    //swiper
    ngAfterContentChecked() {
        if (this.swiper) {
            this.swiper.updateSwiper({});
        }
    }
};
Tab2Page.ctorParameters = () => [
    { type: _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService }
];
Tab2Page.propDecorators = {
    swiper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['siwper',] }]
};
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 81597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 71748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!--header-->\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <h1>\r\n          Library\r\n        </h1>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-button color=\"primary\">add score</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!--search-->\r\n    <ion-row>\r\n      <ion-searchbar color=\"light\" animated placeholder=\"search for scores...\"></ion-searchbar>\r\n    </ion-row>\r\n\r\n  </ion-grid>  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!--recently viewed-->\r\n  <div class=\"recentScores\">\r\n    <ion-item lines=\"none\">\r\n      <span class=\"iconify\" data-icon=\"ic:round-library-music\"></span>\r\n      <span>\r\n          <h2>Recent</h2>\r\n        </span>\r\n    </ion-item>\r\n\r\n    <swiper #swiper [config]=\"config\">\r\n      <ng-template swiperSlide *ngFor=\"let score of ensembleService.score\">\r\n        <!--card 1, 2, etc.. -->\r\n        <ion-card [routerLink]=\"[score.id]\">\r\n          <ion-card-content>\r\n            <ion-card-title>{{score.name}}</ion-card-title>\r\n            <ion-card-subtitle>{{score.composer}}</ion-card-subtitle>\r\n\r\n            <ion-row id=\"eventCardDetails\">\r\n              <ion-col size=\"12\">\r\n                <ion-text id=\"ensembleName\">{{ensembleService.getEnsembleByID(score.ensembleID) ? \r\n                  ensembleService.getEnsembleByID(score.ensembleID).name : 'Personal' }}\r\n                </ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ng-template>\r\n\r\n    </swiper>\r\n  </div>\r\n\r\n  <!--Favorites-->\r\n  <div class=\"favoritesScores\">\r\n    <ion-accordion-group value=\"favorites\">\r\n      <ion-accordion value=\"favorites\">\r\n        <ion-item slot=\"header\">\r\n          <span class=\"iconify\" data-icon=\"ic:round-library-music\"></span>\r\n          <span>\r\n              <h2>Favorites</h2>\r\n            </span>\r\n        </ion-item>\r\n\r\n        <ion-list slot=\"content\" lines=\"none\">\r\n          <!--list header-->\r\n          <ion-item class=\"listHeader\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"6\"><h6>Piece Title</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Composer</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Instrumentation</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Ensemble</h6></ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n          </ion-item>\r\n\r\n          <ion-item-sliding *ngFor=\"let score of ensembleService.score  | slice:0:4; let i = index;\" [routerLink]=\"[score.id]\">\r\n            <ion-item>\r\n            <!--piece card-->\r\n              <ion-card class=\"pieceCard\" color=\"light\">\r\n                <ion-card-content>\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"><h1>{{score.name}}</h1></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{score.composer}}</h3></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{score.instruments}}</h3></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{ensembleService.getEnsembleByID(score.ensembleID)? ensembleService.getEnsembleByID(score.ensembleID).name : 'Personal'  }}</h3></ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-item>\r\n\r\n            <ion-item-options>\r\n              <ion-item-option>\r\n                <ion-icon name=\"trash\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-accordion>\r\n    </ion-accordion-group>\r\n  </div>\r\n\r\n  <!--allScores-->\r\n  <div class=\"allScores\">\r\n    <ion-accordion-group value=\"allScores\">\r\n      <ion-accordion value=\"allScores\">\r\n        <ion-item slot=\"header\">\r\n          <span class=\"iconify\" data-icon=\"ic:round-library-music\"></span>\r\n          <span>\r\n              <h2>All scores</h2>\r\n            </span>\r\n        </ion-item>\r\n\r\n        <ion-list slot=\"content\" lines=\"none\">\r\n          <!--list header-->\r\n          <ion-item class=\"listHeader\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"6\"><h6>Piece Title</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Composer</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Instrumentation</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Ensemble</h6></ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n          </ion-item>\r\n\r\n          <ion-item-sliding *ngFor=\"let score of ensembleService.score; let i = index;\" [routerLink]=\"[score.id]\">\r\n            <ion-item>\r\n            <!--piece card-->\r\n              <ion-card class=\"pieceCard\" color=\"light\">\r\n                <ion-card-content>\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"><h1>{{score.name}}</h1></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{score.composer}}</h3></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{score.instruments}}</h3></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{ensembleService.getEnsembleByID(score.ensembleID)? ensembleService.getEnsembleByID(score.ensembleID).name : 'Personal'  }}</h3></ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-item>\r\n\r\n            <ion-item-options>\r\n              <ion-item-option>\r\n                <ion-icon name=\"trash\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-accordion>\r\n    </ion-accordion-group>\r\n  </div>\r\n\r\n  <!--for each composer-->\r\n  <div class=\"scoresByComposer\" *ngFor=\"let composer of composers\"> <!--class to be CHANGED-->\r\n    <ion-accordion-group>\r\n      <ion-accordion>\r\n        <ion-item slot=\"header\">\r\n          <span class=\"iconify\" data-icon=\"ic:round-library-music\"></span>\r\n          <span>\r\n              <h2>{{composer.composer}}</h2>\r\n            </span>\r\n        </ion-item>\r\n\r\n        <ion-list slot=\"content\" lines=\"none\">\r\n          <!--list header-->\r\n          <ion-item class=\"listHeader\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"6\"><h6>Piece Title</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Composer</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Instrumentation</h6></ion-col>\r\n                  <ion-col size=\"2\"><h6>Ensemble</h6></ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n          </ion-item>\r\n\r\n          <ion-item-sliding *ngFor=\"let score of composer.score; let i = index;\" [routerLink]=\"[score.id]\">\r\n            <ion-item>\r\n            <!--piece card-->\r\n              <ion-card class=\"pieceCard\" color=\"light\">\r\n                <ion-card-content>\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"6\"><h1>{{score.name}}</h1></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{score.composer}}</h3></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{score.instruments}}</h3></ion-col>\r\n                      <ion-col size=\"2\"><h3>{{ensembleService.getEnsembleByID(score.ensembleID)? ensembleService.getEnsembleByID(score.ensembleID).name : 'Personal'  }}</h3></ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-item>\r\n\r\n            <ion-item-options>\r\n              <ion-item-option>\r\n                <ion-icon name=\"trash\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n      </ion-accordion>\r\n    </ion-accordion-group>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map