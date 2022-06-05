"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_event_event_page_ts"],{

/***/ 70705:
/*!*************************************!*\
  !*** ./src/app/event/event.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventPage": () => (/* binding */ EventPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.page.html?ngResource */ 86920);
/* harmony import */ var _event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.page.scss?ngResource */ 77352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ensemble.service */ 98293);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/image/image.component */ 85113);









let EventPage = class EventPage {
    constructor(router, route, ensembleService, domSanitizer, modalCTRL) {
        this.router = router;
        this.route = route;
        this.ensembleService = ensembleService;
        this.domSanitizer = domSanitizer;
        this.modalCTRL = modalCTRL;
        //dummy data
        this.attending = [
            {
                name: 'John Micallef',
                phone: 79123456
            },
            {
                name: 'Shaun Mifsud',
                phone: 79123456
            },
            {
                name: 'Redd Caruana',
                phone: 79123456
            },
            {
                name: 'Emmanuel Giordimaina',
                phone: 79123456
            },
            {
                name: 'Walter Muscat',
                phone: 79123456
            },
            {
                name: 'Shawn Bugeja',
                phone: 79123456
            },
            {
                name: 'Timothy xuereb',
                phone: 79123456
            },
            {
                name: 'Erica Schembri',
                phone: 79123456
            },
            {
                name: 'Jeanclaude Simiana',
                phone: 79123456
            },
            {
                name: 'Paul Mifsud',
                phone: 79123456
            },
            {
                name: 'Mark Mifsud',
                phone: 79123456
            },
            {
                name: 'Samuel Grech',
                phone: 79123456
            },
            {
                name: 'Justin Caruana',
                phone: 79123456
            },
            {
                name: 'Benji Magro',
                phone: 79123456
            },
            {
                name: 'Gabriel Farrugia',
                phone: 79123456
            },
            {
                name: 'Kieran camilleri Bianco',
                phone: 79123456
            },
            {
                name: 'Alex Attard',
                phone: 79123456
            },
            {
                name: 'Jayden Aquilina',
                phone: 79123456
            },
            {
                name: 'Luke Mifsud',
                phone: 79123456
            },
            {
                name: 'Peter Pantelic',
                phone: 79123456
            },
            {
                name: 'Andy Attard',
                phone: 79123456
            },
            {
                name: 'Luke Micallef',
                phone: 79123456
            },
            {
                name: 'Bernard Borg',
                phone: 79123456
            },
            {
                name: 'Matthew Falzon',
                phone: 79123456
            },
            {
                name: 'Jake Ellul',
                phone: 79123456
            },
        ];
    }
    ngOnInit() {
        // event navigation
        this.router.events.subscribe(nav => {
            if (nav instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute) {
                console.log("Link changed.");
            }
        });
        //get ID the user selected from URL
        console.log("route is: " + this.route);
        this.eventID = parseInt(this.route.snapshot.params['eventId']);
        //get event by ID
        this.selectedEvent = this.ensembleService.getEventByID(this.eventID);
        console.log("Event ID: " + this.eventID);
        if (this.selectedEvent === undefined) {
            console.log("Event not found!");
            return;
        }
        //sanitize event image if available
        this.eventPic = this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedEvent.image);
        console.log("event pic: ", this.eventPic);
        //get ensemble by ID
        this.ensembleID = parseInt(this.route.snapshot.params['ensembleId']);
        console.log("ensemble ID in event: " + this.ensembleID);
        this.selectedEnsemble = this.ensembleService.getEnsembleByID(this.ensembleID);
        if (this.selectedEnsemble === undefined) {
            console.log("Ensemble not found!");
            return;
        }
        //get scores by event
        this.eventScores = [];
        if (this.selectedEvent.scores) {
            for (var i = 0; i < this.selectedEvent.scores.length; i++) {
                console.log("in loop: ", i);
                this.eventScores.push(this.ensembleService.getScoreByID(this.selectedEvent.scores[i]));
            }
            console.log("event Scores: ", this.eventScores);
        }
    }
    showImageModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const imageModal = yield this.modalCTRL.create({
                component: _components_image_image_component__WEBPACK_IMPORTED_MODULE_3__.imageComponent,
                componentProps: { eventImage: this.selectedEvent.image },
                cssClass: 'imageModal'
            });
            yield imageModal.present();
        });
    }
};
EventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
EventPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-event',
        template: _event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventPage);



/***/ }),

/***/ 77352:
/*!**************************************************!*\
  !*** ./src/app/event/event.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  padding: 0;\n}\n\n#header {\n  padding: 2rem;\n}\n\n#cardImage img {\n  width: 150%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  z-index: 0;\n  opacity: 25%;\n}\n\nion-avatar {\n  width: 2em;\n  height: 2em;\n  margin: auto;\n}\n\n.eventFields {\n  padding: 1rem;\n}\n\n.EventSection {\n  background-color: var(--ion-color-primary-light);\n  margin-top: 1rem;\n  border-radius: var(--card-border);\n  padding: 0.5rem;\n}\n\n.attendingList {\n  display: flex;\n  flex-direction: row;\n}\n\n.attendingList h3 {\n  color: var(--ion-color-primary);\n  margin-left: 2rem;\n}\n\n.attendingList .section {\n  background-color: var(--ion-color-primary-light);\n  margin-top: 1rem;\n  border-radius: var(--card-border);\n  padding: 1rem;\n}\n\n.attendingBox {\n  background-color: var(--ion-color-primary-med);\n  border-radius: var(--card-border);\n  margin-top: 1rem;\n  padding: 1.5rem;\n}\n\n.attendingBox h2 {\n  color: var(--ion-color-primary);\n}\n\nh2 {\n  font-weight: 600;\n}\n\nh2, h5, p {\n  color: var(--ion-color-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRFI7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFNQTtFQUNJLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUhKOztBQUtJO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQUhSOztBQU1JO0VBQ0ksZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtBQUpSOztBQVNBO0VBS0ksOENBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtBQVhKOztBQUdJO0VBQ0ksK0JBQUE7QUFEUjs7QUFZQTtFQUNJLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSw0QkFBQTtBQVRKIiwiZmlsZSI6ImV2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNFNkVGRkY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbiNoZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4jY2FyZEltYWdle1xyXG5cclxuICAgIGltZ3sgICAgICAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDI1JTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWF2YXRhcntcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmV2ZW50RmllbGRze1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIFxyXG59XHJcblxyXG4uRXZlbnRTZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyKTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmF0dGVuZGluZ0xpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICBoM3tcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyKTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmF0dGVuZGluZ0JveHtcclxuICAgIGgye1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbWVkKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyKTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG5cclxuaDJ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5oMixoNSxwe1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXRleHQpO1xyXG59Il19 */";

/***/ }),

/***/ 86920:
/*!**************************************************!*\
  !*** ./src/app/event/event.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<!--header-->\r\n<ion-header class=\"ion-no-border\">\r\n  <div id=\"cardImage\" *ngIf=\"selectedEvent.image != null\">\r\n    <img [src]=\"eventPic\">\r\n  </div>\r\n\r\n  <div id=\"header\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"primary\" defaultHref=\"home\"></ion-back-button>\r\n      </ion-buttons>\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button color=\"danger\">leave Event</ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-grid>\r\n      <!--event title and hosting-->\r\n      \r\n      <ion-row>\r\n        <ion-col size=\"8\">\r\n          <h1>\r\n            {{selectedEvent.name}}\r\n          </h1>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <span>\r\n            <h6>Hosting: </h6>\r\n            <h5>{{selectedEnsemble.name}}</h5>\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!--event details and buttons-->\r\n      <ion-row>\r\n        <ion-col size=\"8\">\r\n          <ion-row>\r\n            <ion-item id=\"eventType\">\r\n              <h6>{{selectedEvent.type}}</h6>\r\n            </ion-item>\r\n          </ion-row>\r\n\r\n          <ion-row>\r\n            <ion-item id=\"eventDate\">\r\n              <h6>{{selectedEvent.date}}</h6>\r\n            </ion-item>\r\n          </ion-row>\r\n\r\n          \r\n        </ion-col>\r\n\r\n        <ion-col size=\"4\">\r\n          <ion-row>\r\n          <ion-button color=\"success\">Going</ion-button>\r\n          <ion-button color=\"secondary\">maybe</ion-button>\r\n          <ion-button color=\"danger\">not going</ion-button>\r\n        </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"selectedEvent.image !null\" >\r\n        <ion-button color=\"primary\" fill=\"clear\" (click)=\"showImageModal();\">view image</ion-button>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div class=\"eventFields\">\r\n    <!--details-->\r\n    <div class=\"EventSection\">\r\n      <!--title-->\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <h2>Details</h2>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!--details card-->\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-card color=\"light\">\r\n            <ion-card-content>\r\n              <p color=\"primary\">{{selectedEvent.description}}</p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </div>\r\n\r\n    <!--location-->\r\n    <div class=\"EventSection\">\r\n      <!--title-->\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <h2>Location</h2>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!--details card-->\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-card color=\"light\">\r\n            <ion-card-content>\r\n              <app-map [writeMap]=false></app-map>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </div>\r\n\r\n    <!--attending list-->\r\n    <div class=\"EventSection\">\r\n      <!--title-->\r\n      <ion-accordion-group class=\"attendingList\" value=\"attending\">\r\n        <ion-accordion>\r\n          <ion-item slot=\"header\">\r\n\r\n            <span class=\"iconify\" data-icon=\"ic:round-library-music\"></span>\r\n            <span>\r\n              <h2>Attending musicians</h2>\r\n            </span>\r\n\r\n          <span>\r\n            <h3>39</h3>\r\n          </span>\r\n          </ion-item>\r\n\r\n      <!--details card-->\r\n      <ion-list class=\"attendingBox\" slot=\"content\" lines=\"none\">\r\n        <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Flute</h2>\r\n        </ion-item>\r\n\r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-item>\r\n\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 0:5\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Clarient</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 5:7\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Alto Saxophone</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 7:8\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n          </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Tenor Saxophone</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 8:9\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Horn in F</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 9:12\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Trumpet</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 12:20\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Trombone</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 20:24\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Bariton horn</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 10:15\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Euphonium</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 10:15\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Tuba</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 14:16\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Snare Drum</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 17:18\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Cymbals</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 18:19\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <ion-item>\r\n          <h2>Bass drum</h2>\r\n        </ion-item>\r\n  \r\n        <!--list header-->\r\n        <ion-item class=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\"><h6>Profile image</h6></ion-col>\r\n              <ion-col size=\"6\"><h6>Name</h6></ion-col>\r\n              <ion-col size=\"4\"><h6>Contact</h6></ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-item>\r\n\r\n        <ion-item *ngFor=\"let musician of attending | slice: 20:21\">\r\n          <ion-card class=\"pieceCard\" color=\"light\">\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-avatar>\r\n                  <img src=\"assets/images/userPic.jpg\" alt=\"\">\r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"6\">\r\n                <h2>{{musician.name}}</h2>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"4\">\r\n                <h4>{{musician.phone}}</h4>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-item>\r\n      </div>\r\n      </ion-list>\r\n\r\n        </ion-accordion>\r\n      </ion-accordion-group>\r\n    </div>\r\n\r\n    <!--Program-->\r\n    <div class=\"EventSection\">\r\n      <!--title-->\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <h2>Programm</h2>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-list lines=\"none\">\r\n        <!--list header-->\r\n        <ion-item id=\"listHeader\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"5\">\r\n                <h6>Piece Title</h6>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <h6>Composer</h6>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <h6>Instrumentation</h6>\r\n              </ion-col>\r\n              <ion-col size=\"3\">\r\n                <h6>Ensemble</h6>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n        <ion-item-sliding *ngFor=\"let score of eventScores\">\r\n          <ion-item>\r\n            <!--piece card-->\r\n            <ion-card class=\"pieceCard\" color=\"light\" [routerLink]=\"['/tabs','tab2', score.id]\">\r\n              <ion-card-content>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"5\">\r\n                      <h1>{{score.name}}</h1>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\">\r\n                      <h4>{{score.composer}}</h4>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\">\r\n                      <h4>{{score.name}}</h4>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\">\r\n                      <h4>{{score.instruments}}</h4>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-item>\r\n\r\n          <ion-item-options>\r\n            <ion-item-option>\r\n              <ion-icon name=\"trash\"></ion-icon>\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n\r\n\r\n      </ion-list>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_event_event_page_ts.js.map