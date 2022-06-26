"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_ensemble_ensemble_page_ts"],{

/***/ 99446:
/*!*******************************************!*\
  !*** ./src/app/ensemble/ensemble.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnsemblePage": () => (/* binding */ EnsemblePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ensemble_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensemble.page.html?ngResource */ 35237);
/* harmony import */ var _ensemble_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ensemble.page.scss?ngResource */ 62712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ensemble.service */ 98293);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/new-event/new-event.component */ 83262);








let EnsemblePage = class EnsemblePage {
    constructor(router, route, ensembleService, modalCtrl) {
        this.router = router;
        this.route = route;
        this.ensembleService = ensembleService;
        this.modalCtrl = modalCtrl;
        this.selectedtab = "posts";
    }
    ngOnInit() {
        // event navigation
        this.router.events.subscribe(nav => {
            if (nav instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute) {
                console.log("Link changed.");
            }
        });
        //get ID the user selected from URL
        this.ensembleID = parseInt(this.route.snapshot.params['ensembleId']);
        //get ensemble by ID
        this.selectedEnsemble = this.ensembleService.getEnsembleByID(this.ensembleID);
        if (this.selectedEnsemble === undefined) {
            console.log("Ensemble not found!");
            return;
        }
        //get ensemble Event by ID
        this.ensembleEvent = this.ensembleService.getEventsByEnsembleID(this.ensembleID);
        // get all events count
        this.eventCount = this.ensembleService.getEventsLength();
        // get all scores by ensemble
        this.ensembleScore = this.ensembleService.getScoresByEnsembleID(this.ensembleID);
        console.log("ensemble scores:", this.ensembleScore);
    }
    //new event model
    showModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_3__.NewEventComponent,
                componentProps: { hasEnsemble: true, ensembleID: this.ensembleID, ensembleEvent: this.eventCount },
                cssClass: 'eventModal'
            });
            yield modal.present();
        });
    }
};
EnsemblePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
EnsemblePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ensemble',
        template: _ensemble_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ensemble_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EnsemblePage);



/***/ }),

/***/ 62712:
/*!********************************************************!*\
  !*** ./src/app/ensemble/ensemble.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "#ensemblePic {\n  width: 8em;\n  height: 8em;\n  margin: auto;\n}\n\n#ensembleAdminAvatar {\n  width: 2.5em;\n  height: 2.5em;\n}\n\nion-header {\n  background-color: #D7E2FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuc2VtYmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoiZW5zZW1ibGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Vuc2VtYmxlUGlje1xyXG4gICAgd2lkdGg6IDhlbTtcclxuICAgIGhlaWdodDogOGVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jZW5zZW1ibGVBZG1pbkF2YXRhcntcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdFMkZGO1xyXG59XHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 35237:
/*!********************************************************!*\
  !*** ./src/app/ensemble/ensemble.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!--header-->\r\n<ion-header class=\"ion-no-border\" >\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"danger\">leave</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <!--avatar-->\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-avatar id=\"ensemblePic\">\r\n              <img src=\"{{selectedEnsemble.picture}}\" alt=\"Ensemble profile image\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!--admins-->\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <h3>Admins</h3>\r\n            <ion-avatar id=\"ensembleAdminAvatar\">\r\n              <img src=\"/assets/images/userPic.jpg\" alt=\"admin profile image\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n        </ion-row>        \r\n      </ion-col>\r\n\r\n      <ion-col size=\"10\">\r\n        <!--title and button-->\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <h1>{{selectedEnsemble.name}}</h1>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!--icons and description-->\r\n        <ion-row>\r\n          <ion-col size=\"2\">\r\n            <span id=\"noOfMembers\" class=\"iconify\" data-icon=\"ic:baseline-person\"></span>\r\n            40\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\">\r\n            <span id=\"noOfEvents\" class=\"iconify\" data-icon=\"ic:baseline-person\"></span>\r\n            4\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\">\r\n            <span id=\"ensembleType\" class=\"iconify\" data-icon=\"ic:baseline-person\"></span>\r\n            {{selectedEnsemble.visibility}}\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!--description-->\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <p>{{selectedEnsemble.description}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n  </ion-grid>  \r\n  \r\n  <!--segment nav-->\r\n  <ion-segment [(ngModel)]=\"selectedtab\">\r\n    <ion-segment-button value=\"posts\" layout=\"icon-start\">\r\n      <ion-label>Posts</ion-label>\r\n      <ion-icon name=\"chatbox-ellipses\"></ion-icon>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"events\" layout=\"icon-start\">\r\n      <ion-label>Events</ion-label>\r\n      <ion-icon name=\"calendar-clear\"></ion-icon>\r\n    </ion-segment-button>\r\n    \r\n    <ion-segment-button value=\"scores\" layout=\"icon-start\">\r\n      <ion-label>Scores</ion-label>\r\n      <ion-icon name=\"library\"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header>\r\n  \r\n<ion-content [fullscreen]=\"true\">\r\n  <!--posts-->\r\n  <div *ngIf=\"selectedtab =='posts'\">\r\n    <div class=\"ensemblePost\">\r\n      <ion-grid>\r\n        <!--posts-->\r\n        <ion-card>\r\n          <ion-row>\r\n            <ion-col size=\"1\">\r\n              <ion-avatar>\r\n                <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n              </ion-avatar>\r\n            </ion-col>\r\n  \r\n            <ion-col size=\"11\">\r\n              <h1>(person's name)</h1>\r\n              <ion-text color=\"success\">(post's date & time)</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus porro, voluptatibus quia quisquam\r\n                    magni cupiditate officiis amet ex minima necessitatibus saepe, natus perspiciatis ut corporis?\r\n                    Voluptatem maxime unde placeat ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus porro, voluptatibus quia quisquam\r\n                    magni cupiditate officiis amet ex minima necessitatibus saepe, natus perspiciatis ut corporis?\r\n                    Voluptatem maxime unde placeat ratione.\r\n                  </p>\r\n              </ion-col>\r\n            </ion-row>\r\n        </ion-card>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <!--events-->\r\n  <div *ngIf=\"selectedtab == 'events' \">\r\n    <div class=\"events\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-button class=\"ion-float-end\" color=\"primary\" (click)=\"showModal()\">Add Event</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!--events cards-->\r\n        <ion-row>\r\n          <!--card 1, 2, etc.. -->\r\n          <ion-col size=\"4\" *ngFor=\"let event of ensembleEvent\"> <!--loop to be changed-->\r\n            <ion-card [routerLink]=\"['./',event.id]\">\r\n              <div id=\"colorGradient\"></div>\r\n              <div id=\"colorFilter\"></div>\r\n\r\n              <div id=\"cardImage\">\r\n                <img src=\"{{event.image}}\">\r\n              </div>\r\n\r\n              <ion-card-content>\r\n                <ion-card-title>{{event.name}}</ion-card-title>\r\n                <ion-card-subtitle>{{ensembleService.getEnsembleByID(event.ensembleID).name}}</ion-card-subtitle>\r\n\r\n                <ion-row id=\"eventCardDetails\">\r\n                  <ion-col size=\"6\">\r\n                    <ion-text id=\"type\">{{event.type}}</ion-text>\r\n                  </ion-col>\r\n\r\n                  <ion-col size=\"6\">\r\n                    <ion-text id=\"date\">date/time</ion-text>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n  \r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <!--scores-->\r\n  <div *ngIf=\"selectedtab == 'scores' \">\r\n    \r\n    <div>  \r\n      <ion-list lines=\"none\">\r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"6\"><h6>Piece Title</h6></ion-col>\r\n                <ion-col size=\"2\"><h6>Composer</h6></ion-col>\r\n                <ion-col size=\"2\"><h6>Instrumentation</h6></ion-col>\r\n                <ion-col size=\"2\"><h6>Ensemble</h6></ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item-sliding *ngFor=\"let score of ensembleScore; let i = index;\" [routerLink]=\"['/tabs','tab2',score.id]\">\r\n          <ion-item>\r\n          <!--piece card-->\r\n            <ion-card class=\"pieceCard\" color=\"light\">\r\n              <ion-card-content>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"6\"><h1>{{score.name}}</h1></ion-col>\r\n                    <ion-col size=\"2\"><h3>{{score.composer}}</h3></ion-col>\r\n                    <ion-col size=\"2\"><h3>{{score.instruments}}</h3></ion-col>\r\n                    <ion-col size=\"2\"><h3>{{ensembleService.getEnsembleByID(score.ensembleID)? ensembleService.getEnsembleByID(score.ensembleID).name : 'Personal'  }}</h3></ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-item>\r\n\r\n          <ion-item-options>\r\n            <ion-item-option>\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_ensemble_ensemble_page_ts.js.map