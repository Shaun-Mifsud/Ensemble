"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_score-details_score-details_module_ts"],{

/***/ 74081:
/*!***************************************************************!*\
  !*** ./src/app/score-details/score-details-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreDetailsPageRoutingModule": () => (/* binding */ ScoreDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _score_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-details.page */ 4211);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





const routes = [
    /*  {
        path: '',
        children:[
          //if NO scoreID is present, redirect to tabs/tab2
          {
            path: '',
            redirectTo: '/tabs/tab2',
            pathMatch: 'full'
          },
    
          //if scoreID is present, load score detail page
          {
            path:':scoreID',
            component:ScoreDetailsPage
          }
        ]
      } */
    {
        path: '',
        component: _score_details_page__WEBPACK_IMPORTED_MODULE_0__.ScoreDetailsPage
    }
];
let ScoreDetailsPageRoutingModule = class ScoreDetailsPageRoutingModule {
};
ScoreDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    })
], ScoreDetailsPageRoutingModule);



/***/ }),

/***/ 51549:
/*!*******************************************************!*\
  !*** ./src/app/score-details/score-details.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreDetailsPageModule": () => (/* binding */ ScoreDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _score_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-details-routing.module */ 74081);
/* harmony import */ var _score_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-details.page */ 4211);







let ScoreDetailsPageModule = class ScoreDetailsPageModule {
};
ScoreDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _score_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScoreDetailsPageRoutingModule
        ],
        declarations: [_score_details_page__WEBPACK_IMPORTED_MODULE_1__.ScoreDetailsPage]
    })
], ScoreDetailsPageModule);



/***/ }),

/***/ 4211:
/*!*****************************************************!*\
  !*** ./src/app/score-details/score-details.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreDetailsPage": () => (/* binding */ ScoreDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _score_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score-details.page.html?ngResource */ 68024);
/* harmony import */ var _score_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-details.page.scss?ngResource */ 22387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ensemble.service */ 98293);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/new-event/new-event.component */ 83262);








let ScoreDetailsPage = class ScoreDetailsPage {
    constructor(route, router, ensembleService, modalCtrl) {
        this.route = route;
        this.router = router;
        this.ensembleService = ensembleService;
        this.modalCtrl = modalCtrl;
        //default tab
        this.selectedtab = "score";
        //variables used to contain each respective part from the selected score
        //categories variables
        // public orchestra: { name: string, parts: Part[], rec }
        this.strings = [];
        this.woodwind = [];
        this.brass = [];
        this.percussion = [];
        this.other = [];
        // Audio
        this.sound = new Audio;
        this.isPlaying = false;
    }
    ngOnInit() {
        //get scoreID from URL
        this.scoreID = parseInt(this.route.snapshot.params['scoreID']);
        console.log("Selected score ID: " + this.scoreID);
        //get score by ID
        this.selectedScore = this.ensembleService.getScoreByID(this.scoreID);
        //get parts from selectedscore
        this.parts = this.selectedScore.parts;
        console.log("All parts: ", this.parts);
        //get events by scoreID
        this.scoreEvents = this.ensembleService.getEventsByScoreID(this.scoreID);
        console.log("Events by score: ", this.scoreEvents);
        if (this.selectedScore.type == 'static' && this.parts) {
            //get partFamily and place them in categories variables aggording to family
            //string
            let stringList = Object.values(this.parts.filter(f => f.partFamiliy == 'string'));
            console.log("string list: ", stringList);
            for (let list in stringList) {
                const instrument = stringList[list];
                instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID, instrument.partID) || [];
                this.strings.push(instrument);
            }
            //woodwind
            let woodwindList = Object.values(this.parts.filter(f => f.partFamiliy == 'woodwind'));
            for (let list in woodwindList) {
                const instrument = woodwindList[list];
                instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID, instrument.partID) || [];
                this.woodwind.push(woodwindList[list]);
            }
            //brass
            let brassList = Object.values(this.parts.filter(f => f.partFamiliy == 'brass'));
            for (let list in brassList) {
                const instrument = brassList[list];
                instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID, instrument.partID) || [];
                this.brass.push(brassList[list]);
            }
            //percussion
            let percussionList = Object.values(this.parts.filter(f => f.partFamiliy == 'percussion'));
            for (let list in percussionList) {
                const instrument = percussionList[list];
                instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID, instrument.partID) || [];
                this.percussion.push(percussionList[list]);
            }
            //other
            let otherList = Object.values(this.parts.filter(f => f.partFamiliy == 'other'));
            for (let list in otherList) {
                const instrument = otherList[list];
                instrument.recordings = this.ensembleService.getRecordingsByPart(this.scoreID, instrument.partID) || [];
                this.other.push(otherList[list]);
            }
            this.getRecordings();
        }
    }
    getRecordings() {
        //get recording by selected scoreID
        //this.recordings= this.ensembleService.getRecordingsByScoreID(this.scoreID);
        //console.log("recordings by score: ",this.recordings);
        console.log('URL path: ', this.urlPath);
        //categories variables console output 
        console.log("Strings: ", this.strings);
        console.log("Woodwind: ", this.woodwind);
        console.log("Brass: ", this.brass);
        console.log("Percussion: ", this.percussion);
        console.log("other: ", this.other);
        console.log("string rec: ", this.strings.filter(f => f.recordings.length));
        console.log("woodwind rec: ", this.woodwind.filter(f => f.recordings.length));
        console.log("brass rec: ", this.brass.filter(f => f.recordings.length));
        console.log("percussion rec: ", this.percussion.filter(f => f.recordings.length));
    }
    //To navigate to score page by the part selected by the user
    partSelect(instrInPart) {
        // get selectedPart index from partName
        this.selectedPart = this.parts.findIndex((p) => p.partName == instrInPart) + 1;
        console.log("selected part Index: ", this.selectedPart);
        //navigate by selectedPart
        this.router.navigate(['tabs/tab2', this.scoreID, this.selectedPart]);
    }
    getArrayWithRecordings(array) {
        return array.filter(a => a.recordings != null && a.recordings.length > 0) || [];
    }
    //To display only the family of instruments that are available in the score
    //return true if available
    //returns false if unavailable
    checkParts(partName) {
        switch (partName) {
            case 'strings': {
                if (this.strings.length < 1) {
                    return false;
                }
                else
                    return true;
            }
            case 'woodwind': {
                if (this.woodwind.length < 1) {
                    return false;
                }
                else
                    return true;
            }
            case 'brass': {
                if (this.brass.length < 1) {
                    return false;
                }
                else
                    return true;
            }
            case 'percussion': {
                if (this.percussion.length < 1) {
                    return false;
                }
                else
                    return true;
            }
            case 'other': {
                if (this.other.length < 1) {
                    return false;
                }
                else
                    return true;
            }
        }
    }
    //check if recording is avialable on selected part
    checkRecording(partName) {
        switch (partName) {
            case 'strings': {
                //console.log("Strings recoridings filter: ", this.strings.filter(f => f.recordings.length >= 1));
                if (this.strings.filter(f => f.recordings.length >= 1).length >= 1) {
                    console.log("String REC found !");
                    return true;
                }
                else
                    false;
            }
            case 'woodwind': {
                //console.log("woodings recoridings filter: ",this.woodwind.filter(f => f.recordings.length >= 1));
                if (this.woodwind.filter(f => f.recordings.length >= 1).length >= 1) {
                    console.log("Woodwind REC found !");
                    return true;
                }
                else
                    false;
            }
            case 'brass': {
                if (this.brass.filter(f => f.recordings.length >= 1).length >= 1) {
                    console.log("brass REC found !");
                    return true;
                }
                else
                    false;
            }
            case 'percussion': {
                if (this.percussion.filter(f => f.recordings.length >= 1).length >= 1) {
                    console.log("percussion REC found !");
                    return true;
                }
                else
                    false;
            }
        }
    }
    // play rec
    playRec(recording) {
        if (!this.isPlaying) {
            this.sound.src = recording.base64;
            this.sound.play();
            this.isPlaying = true;
            console.log("Part ID of the audio played: ", recording.partID);
            console.log("sound playing: ", this.sound);
            this.sound.onended = () => {
                this.isPlaying = false;
            };
        }
        else {
            this.sound.pause();
            this.sound.currentTime = 0;
            this.isPlaying = false;
        }
    }
    //event model
    eventModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_3__.NewEventComponent,
                componentProps: { ensembleID: this.selectedScore.ensembleID, ensembleEvent: this.ensembleService.getEventsLength() },
                cssClass: 'eventModal'
            });
            yield modal.present();
        });
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
};
ScoreDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ScoreDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-score-details',
        template: _score_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_score_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScoreDetailsPage);



/***/ }),

/***/ 22387:
/*!******************************************************************!*\
  !*** ./src/app/score-details/score-details.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background-color: #D7E2FF;\n}\n\nion-avatar {\n  width: 2.5em;\n  height: 2.5em;\n  margin: auto;\n}\n\n.boxSection {\n  background-color: var(--ion-color-primary-light);\n  border-radius: var(--card-border);\n  margin-top: 1rem;\n  padding: 0.5rem;\n}\n\n.boxSection h2 {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBS0ksZ0RBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQUpKOztBQUpJO0VBQ0ksK0JBQUE7QUFNUiIsImZpbGUiOiJzY29yZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdFMkZGO1xyXG59XHJcblxyXG5pb24tYXZhdGFye1xyXG4gICAgd2lkdGg6IDIuNWVtO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJveFNlY3Rpb257XHJcbiAgICBoMntcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyKTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 68024:
/*!******************************************************************!*\
  !*** ./src/app/score-details/score-details.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<!--header-->\r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"primary\" defaultHref=\"tabs/tab2\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <!--title-->\r\n        <ion-row>\r\n          <ion-col size=\"12\"><h1>{{selectedScore.name}}</h1></ion-col>\r\n        </ion-row>\r\n        \r\n        <!--score info-->\r\n        <ion-row>\r\n          <ion-col size=\"6\"><h3>{{selectedScore.composer}}</h3></ion-col>\r\n          <ion-col size=\"6\"><h4>{{parts ? parts.length + ' Parts' : '1 Part'}} </h4></ion-col>\r\n        </ion-row>\r\n\r\n        <!--description-->\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <p>{{selectedScore.description}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      \r\n      <ion-col class=\"ion-text-end\" size=\"6\">\r\n        <!--visibility-->\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <h3>{{ensembleService.getEnsembleByID(selectedScore.ensembleID)? ensembleService.getEnsembleByID(selectedScore.ensembleID).name : 'Personal'  }}</h3>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!--avatar-->\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-avatar id=\"ensemblePic\">\r\n              <img src=\"/assets/images/userPic.jpg\" alt=\"account profile image\">\r\n            </ion-avatar>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>  \r\n  \r\n  <!--segment nav-->\r\n  <ion-segment [(ngModel)]=\"selectedtab\">\r\n  <ion-segment-button value=\"score\" layout=\"icon-start\">\r\n    <ion-label>Score & Parts</ion-label>\r\n    <ion-icon name=\"library\"></ion-icon>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"recordings\" layout=\"icon-start\">\r\n      <ion-label>Recordings</ion-label>\r\n      <ion-icon name=\"mic\"></ion-icon>\r\n    </ion-segment-button>\r\n    \r\n    <ion-segment-button value=\"events\" layout=\"icon-start\">\r\n      <ion-label>Events</ion-label>\r\n      <ion-icon name=\"flame\"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <!--scores-->\r\n  <div *ngIf=\"selectedtab =='score'\">\r\n\r\n    <!--Full score-->\r\n    <ion-list class=\"boxSection\" lines=\"none\">\r\n      <!--list header-->\r\n      <ion-item>\r\n        <h2>Full Score</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Type</h6>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n      <!--full score card-->\r\n        <ion-card [routerLink]=\"['/tabs','tab2',scoreID,0]\"  class=\"pieceCard\" color=\"light\">\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"12\"><h1>Full Score</h1></ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n\r\n    <!--Parts-->\r\n    <!--Strings-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('strings')\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>Strings</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Type</h6>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let instrInSection of strings; let i = index\">\r\n      <!--piece card-->\r\n        <ion-card class=\"pieceCard\" color=\"light\">\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col (click)=\"partSelect(instrInSection.partName);\" size=\"12\"><h1>{{instrInSection.partName}}</h1></ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <!--woodwind-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('woodwind')\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>Woodwind</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Type</h6>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let instrInSection of woodwind; let i = index\">\r\n      <!--piece card-->\r\n        <ion-card class=\"pieceCard\" color=\"light\">\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col (click)=\"partSelect(instrInSection.partName);\" size=\"12\"><h1>{{instrInSection.partName}}</h1></ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <!--Brass-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('brass')\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>Brass</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Type</h6>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let instrInSection of brass; let i = index\">\r\n      <!--piece card-->\r\n        <ion-card class=\"pieceCard\" color=\"light\">\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col (click)=\"partSelect(instrInSection.partName);\" size=\"12\"><h1>{{instrInSection.partName}}</h1></ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <!--percussion-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('percussion')\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>percussion</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Type</h6>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let instrInSection of percussion; let i = index\">\r\n      <!--piece card-->\r\n        <ion-card class=\"pieceCard\" color=\"light\">\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col (click)=\"partSelect(instrInSection.partName);\" size=\"12\"><h1>{{instrInSection.partName}}</h1></ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <!--other-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('other')\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>Other</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Type</h6>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let instrInSection of other; let i = index\">\r\n      <!--piece card-->\r\n        <ion-card class=\"pieceCard\" color=\"light\">\r\n          <ion-card-content>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col (click)=\"partSelect(instrInSection.partName);\" size=\"12\"><h1>{{instrInSection.partName}}</h1></ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n  <!--recordings-->\r\n  <div *ngIf=\"selectedtab =='recordings'\">\r\n    <!--Full score-->\r\n    <ion-list class=\"boxSection\" lines=\"none\">\r\n      <!--list header-->\r\n      <ion-item>\r\n        <h2>Full Score</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Type</h6>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n      <!--full score accordion-->\r\n        <ion-card  class=\"recCard\" color=\"light\">\r\n          <ion-accordion-group>\r\n            <ion-accordion value=\"fullScore\">\r\n\r\n              <ion-item slot=\"header\">\r\n                <ion-card-content>\r\n                  <h1>Full Score</h1>\r\n                </ion-card-content>\r\n              </ion-item>\r\n\r\n              <ion-list slot=\"content\">\r\n                <ion-item>(recording here)</ion-item>\r\n                <ion-item>(recording here)</ion-item>\r\n                <ion-item id=\"button-item\">\r\n                  <ion-button color=\"primary\" expand=\"block\">combine recordings</ion-button>\r\n                </ion-item>\r\n\r\n              </ion-list>\r\n          </ion-accordion>\r\n        </ion-accordion-group>\r\n        </ion-card>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <!--strings-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('strings') && checkRecording('strings');\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>Strings</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Instrument</h6>\r\n      </ion-item>     \r\n      \r\n      <ion-item *ngFor=\"let instruInSection of getArrayWithRecordings(strings);\">\r\n        <!--piece card-->\r\n          <ion-card class=\"recCard\" color=\"light\">\r\n              <!--accordion-->\r\n              <ion-accordion-group>\r\n                <ion-accordion>\r\n                  <ion-item slot=\"header\">\r\n                    <ion-card-content>\r\n                      <h1>{{instruInSection.partName}}</h1>\r\n                    </ion-card-content>\r\n                  </ion-item>\r\n\r\n                  <!--list of recordings-->\r\n                  <ion-list slot=\"content\">\r\n                    <ion-item *ngFor=\"let recording of instruInSection.recordings let i = index\" (click)=\"playRec(recording);\">\r\n                      <ion-row>\r\n                        <ion-col size=\"10\">{{recording.name}}</ion-col>\r\n                        <ion-col size=\"2\" >\r\n                          <ion-icon name=\"play\" *ngIf=\"!isPlaying\"></ion-icon>\r\n                          <ion-icon name=\"pause\" *ngIf=\"isPlaying\"></ion-icon>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-item>\r\n                  </ion-list>\r\n\r\n              </ion-accordion>\r\n            </ion-accordion-group>\r\n          </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <!--woodwind-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('woodwind') && checkRecording('woodwind');\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>Woodwinds</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Instrument</h6>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let instruInSection of getArrayWithRecordings(woodwind);\">\r\n        <!--piece card-->\r\n        <ion-card class=\"recCard\" color=\"light\">\r\n          <div *ngIf=\"instruInSection.recordings.length > 0\">\r\n            <!--accordion-->\r\n            <ion-accordion-group>\r\n              <ion-accordion>\r\n                <ion-item slot=\"header\">\r\n                  <ion-card-content>\r\n                    <h1>{{instruInSection.partName}}</h1>\r\n                  </ion-card-content>\r\n                </ion-item>\r\n\r\n                <!--list of recordings-->\r\n                <ion-list slot=\"content\">\r\n                  <ion-item *ngFor=\"let recording of instruInSection.recordings let i = index;\" (click)=\"playRec(recording);\">\r\n                    <ion-row>\r\n                      <ion-col size=\"10\">{{recording.name}}</ion-col>\r\n                      <ion-col size=\"2\">\r\n                        <ion-icon  name=\"play\" *ngIf=\"!isPlaying\"></ion-icon>\r\n                        <ion-icon name=\"pause\" *ngIf=\"isPlaying\" ></ion-icon>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n            </ion-accordion>\r\n          </ion-accordion-group>\r\n        </div>\r\n      </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <!--brass-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('brass')  && checkRecording('brass');\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>Brass</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Instrument</h6>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let instruInSection of getArrayWithRecordings(brass);\">\r\n        <!--piece card-->\r\n        <ion-card class=\"recCard\" color=\"light\">\r\n          <div *ngIf=\"instruInSection.recordings.length > 0\">\r\n            <!--accordion-->\r\n            <ion-accordion-group>\r\n              <ion-accordion>\r\n                <ion-item slot=\"header\">\r\n                  <ion-card-content>\r\n                    <h1>{{instruInSection.partName}}</h1>\r\n                  </ion-card-content>\r\n                </ion-item>\r\n\r\n                <!--list of recordings-->\r\n                <ion-list slot=\"content\">\r\n                  <ion-item *ngFor=\"let recording of instruInSection.recordings let i = index\" (click)=\"playRec(recording);\">\r\n                    <ion-row>\r\n                      <ion-col size=\"10\">{{recording.name}}</ion-col>\r\n                      <ion-col size=\"2\">\r\n                        <ion-icon name=\"play\" *ngIf=\"!isPlaying\"></ion-icon>\r\n                        <ion-icon name=\"pause\" *ngIf=\"isPlaying\"></ion-icon>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n            </ion-accordion>\r\n          </ion-accordion-group>\r\n        </div>\r\n      </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <!--percussion-->\r\n    <ion-list class=\"boxSection\" *ngIf=\"checkParts('percussion')  && checkRecording('percussion');\" lines=\"none\">\r\n      <ion-item>\r\n        <h2>Percussion</h2>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <h6>Instrument</h6>\r\n      </ion-item>\r\n\r\n      <ion-item *ngFor=\"let instruInSection of getArrayWithRecordings(percussion);\">\r\n        <!--piece card-->\r\n        <ion-card class=\"recCard\" color=\"light\">\r\n          <div *ngIf=\"instruInSection.recordings.length > 0\">\r\n            <!--accordion-->\r\n            <ion-accordion-group>\r\n              <ion-accordion>\r\n                <ion-item slot=\"header\">\r\n                  <ion-card-content>\r\n                    <h1>{{instruInSection.partName}}</h1>\r\n                  </ion-card-content>\r\n                </ion-item>\r\n\r\n                <!--list of recordings-->\r\n                <ion-list slot=\"content\">\r\n                  <ion-item *ngFor=\"let recording of instruInSection.recordings let i = index\" (click)=\"playRec(recording);\">\r\n                    <ion-row>\r\n                      <ion-col size=\"10\">{{recording.name}}</ion-col>\r\n                      <ion-col size=\"2\">\r\n                        <ion-icon name=\"play\" *ngIf=\"!isPlaying\"></ion-icon>\r\n                        <ion-icon name=\"pause\" *ngIf=\"isPlaying\"></ion-icon>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-item>\r\n                </ion-list>\r\n\r\n            </ion-accordion>\r\n          </ion-accordion-group>\r\n        </div>\r\n      </ion-card>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n  <!--events-->\r\n  <!-- only show if score is in event -->\r\n  <div *ngIf=\"selectedtab =='events'\">\r\n    <div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-button class=\"ion-float-end\" color=\"primary\" (click)=\"eventModal()\">Add Event</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!--events cards-->\r\n        <ion-row>\r\n          <!--card 1, 2, etc.. -->\r\n          <ion-col size=\"4\" *ngFor=\"let event of scoreEvents\">\r\n            <ion-card color=\"light\" [routerLink]=\"['/','tabs','tab4',event.ensembleID,event.id]\">\r\n              <img src=\"/assets/images/mpo.jpg\" alt=\"mpo\">\r\n  \r\n              <ion-card-header>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-card-subtitle>(ensemble name)</ion-card-subtitle>\r\n                      <ion-text color=\"danger\">(date/time)</ion-text>\r\n                    </ion-col>\r\n                  </ion-row>\r\n  \r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-text color=\"success\">{{event.type}}</ion-text>\r\n                    </ion-col>\r\n                  </ion-row>\r\n  \r\n                </ion-grid>\r\n                <ion-card-title>{{event.name}}</ion-card-title>\r\n              </ion-card-header>\r\n  \r\n              <ion-card-content>\r\n                <p>{{event.description}}</p>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n  \r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!--[routerLink]=\"['/score/', getScoreID()]\"-->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_score-details_score-details_module_ts.js.map