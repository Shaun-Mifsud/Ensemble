(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'ensemble',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_ensemble_ensemble_page_ts"), __webpack_require__.e("src_app_ensemble_ensemble_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ensemble/ensemble.module */ 71775)).then(m => m.EnsemblePageModule)
    },
    {
        path: 'event',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_event_event_page_ts"), __webpack_require__.e("src_app_event_event_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event/event.module */ 61904)).then(m => m.EventPageModule)
    },
    {
        path: 'testing',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_flat-embed_dist_embed_js-node_modules_ng2-pdf-viewer___ivy_ngcc___fesm20-d1dcb9"), __webpack_require__.e("src_app_testing_testing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./testing/testing.module */ 32947)).then(m => m.TestingPageModule)
    },
    {
        path: 'score',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_flat-embed_dist_embed_js-node_modules_ng2-pdf-viewer___ivy_ngcc___fesm20-d1dcb9"), __webpack_require__.e("src_app_score_score_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./score/score.module */ 46244)).then(m => m.ScorePageModule)
    },
    {
        path: 'score-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_score-details_score-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./score-details/score-details.module */ 51549)).then(m => m.ScoreDetailsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "providerFactory": () => (/* binding */ providerFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-event/new-event.component */ 83262);
/* harmony import */ var _components_recording_recording_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/recording/recording.component */ 25490);
/* harmony import */ var _components_recordingConfirm_recording_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/recordingConfirm/recording-confirm.component */ 45661);
/* harmony import */ var _components_metronome_metronome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/metronome/metronome.component */ 85942);
/* harmony import */ var _components_page_scale_page_scale_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-scale/page-scale.component */ 48597);
/* harmony import */ var _components_tuner_tuner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tuner/tuner.component */ 1344);
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/image/image.component */ 85113);
/* harmony import */ var _services_ensemble_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/ensemble.service */ 98293);








//components








//services

let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
            _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_3__.NewEventComponent,
            _components_recording_recording_component__WEBPACK_IMPORTED_MODULE_4__.RecordingComponent,
            _components_recordingConfirm_recording_confirm_component__WEBPACK_IMPORTED_MODULE_5__.RecordingConfirmComponent,
            _components_metronome_metronome_component__WEBPACK_IMPORTED_MODULE_6__.MetronomeComponent,
            _components_page_scale_page_scale_component__WEBPACK_IMPORTED_MODULE_7__.PageScaleComponent,
            _components_tuner_tuner_component__WEBPACK_IMPORTED_MODULE_8__.TunerComponent,
            _components_image_image_component__WEBPACK_IMPORTED_MODULE_9__.imageComponent
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot({ mode: 'md' }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.APP_INITIALIZER,
                deps: [_services_ensemble_service__WEBPACK_IMPORTED_MODULE_10__.EnsembleService],
                multi: true,
                useFactory: providerFactory
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);

function providerFactory(provider) {
    return () => provider.init();
}


/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/google-maps */ 62754);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/map.component */ 51006);
// made to use google maps in multiple modules





//google maps


let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__.GoogleMapsModule
        ],
        declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent],
        exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent]
    })
], ComponentsModule);



/***/ }),

/***/ 85113:
/*!*****************************************************!*\
  !*** ./src/app/components/image/image.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageComponent": () => (/* binding */ imageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.component.html?ngResource */ 83547);
/* harmony import */ var _image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.component.scss?ngResource */ 76398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let imageComponent = class imageComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
imageComponent.ctorParameters = () => [];
imageComponent.propDecorators = {
    eventImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
imageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-metronome',
        template: _image_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_image_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], imageComponent);



/***/ }),

/***/ 51006:
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component.html?ngResource */ 55706);
/* harmony import */ var _map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss?ngResource */ 54325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ensemble.service */ 98293);






let MapComponent = class MapComponent {
    constructor(route, ensembleService) {
        this.route = route;
        this.ensembleService = ensembleService;
        this.chosenLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        //google map options
        this.gestureHandling = "";
        this.options = {};
    }
    ngOnInit() {
        if (this.writeMap) {
            this.gestureHandling = undefined;
        }
        else {
            this.gestureHandling = "none";
        }
        console.log('wripte map: ', this.writeMap);
        this.selectedEvent = undefined;
        this.setMap();
    }
    mapClick(event) {
        event = event.latLng.toJSON();
        if (this.writeMap) {
            this.chosenLat = event.lat;
            this.chosenLng = event.lng;
            this.markerPosition = [{ lat: this.chosenLat, lng: this.chosenLng }];
            this.chosenLocation.emit({ lat: this.chosenLat, lng: this.chosenLng });
            //console.log("pos: ",event);
        }
    }
    setMap() {
        this.chosenLng = 14.507898;
        this.chosenLat = 35.895450;
        if (!this.writeMap) {
            //get ID the user selected from URL
            console.log("route is: " + this.route);
            this.eventID = parseInt(this.route.snapshot.params['eventId']);
            //get event by ID
            this.selectedEvent = this.ensembleService.getEventByID(this.eventID);
            console.log("Event ID: " + this.eventID);
            console.log("selected event: ", this.selectedEvent);
            if (this.selectedEvent === undefined) {
                console.log("Event not found!");
                return;
            }
            this.markerPosition = [{ lat: this.selectedEvent.location.lat, lng: this.selectedEvent.location.lng }];
            this.options = Object.assign(Object.assign({}, this.options), { gestureHandling: this.gestureHandling, center: { lat: this.selectedEvent.location.lat, lng: this.selectedEvent.location.lng } });
            console.log("marker pos, ", this.markerPosition);
        }
        else {
            this.markerPosition = [{ lat: this.chosenLat, lng: this.chosenLng }];
            this.options = Object.assign(Object.assign({}, this.options), { gestureHandling: this.gestureHandling, center: { lat: this.chosenLat, lng: this.chosenLng } });
            console.log("options: ", this.options);
        }
        this.chosenLocation.emit({ lat: this.chosenLat, lng: this.chosenLng });
    }
};
MapComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService }
];
MapComponent.propDecorators = {
    writeMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    chosenLocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-map',
        template: _map_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapComponent);



/***/ }),

/***/ 85942:
/*!*************************************************************!*\
  !*** ./src/app/components/metronome/metronome.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetronomeComponent": () => (/* binding */ MetronomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _metronome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metronome.component.html?ngResource */ 11800);
/* harmony import */ var _metronome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metronome.component.scss?ngResource */ 63712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var slide_ruler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slide-ruler */ 3406);
/* harmony import */ var slide_ruler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slide_ruler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tone */ 66151);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! howler */ 71960);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_4__);








let MetronomeComponent = class MetronomeComponent {
    constructor(pickerCtrl) {
        this.pickerCtrl = pickerCtrl;
        this.noOfBeats = 4;
        this.beatValue = 4;
        this.btnCheck = false;
        this.soundIsPlaying = false;
    }
    ngOnInit() {
        this._renderSlideRuler();
    }
    showPicker(selected) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (selected == 'beats') {
                let beatsOpts = {
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel'
                        },
                        {
                            text: 'Done',
                            role: 'done',
                        }
                    ],
                    columns: [
                        {
                            name: 'noOfBeats',
                            options: [
                                { text: '1', value: '1' },
                                { text: '2', value: '2' },
                                { text: '3', value: '3' },
                                { text: '4', value: '4' },
                                { text: '5', value: '5' },
                                { text: '6', value: '6' },
                                { text: '7', value: '7' },
                                { text: '8', value: '8' },
                                { text: '9', value: '9' },
                                { text: '10', value: '10' },
                                { text: '11', value: '11' },
                                { text: '12', value: '12' }
                            ]
                        }
                    ],
                    cssClass: 'timeSignaturePicker',
                };
                const picker = yield this.pickerCtrl.create(beatsOpts);
                yield picker.present();
                const dismiss = yield picker.onDidDismiss();
                if (dismiss.role === "done") {
                    this.noOfBeats = dismiss.data.noOfBeats.value;
                    if (this.soundIsPlaying) {
                        this.stop();
                        this.startMetronome(this.noOfBeats, this.beatValue);
                    }
                    else {
                        this.startMetronome(this.noOfBeats, this.beatValue);
                    }
                }
            }
            else {
                let ValueOpts = {
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel'
                        },
                        {
                            text: 'Done',
                            role: 'done',
                        }
                    ],
                    columns: [
                        {
                            name: 'beatValue',
                            options: [
                                { text: '2', value: '2' },
                                { text: '4', value: '4' },
                                { text: '8', value: '8' },
                                { text: '16', value: '16' }
                            ]
                        }
                    ],
                    cssClass: 'timeSignaturePicker',
                };
                const picker = yield this.pickerCtrl.create(ValueOpts);
                yield picker.present();
                const dismiss = yield picker.onDidDismiss();
                if (dismiss.role === "done") {
                    this.beatValue = dismiss.data.beatValue.value;
                    if (this.soundIsPlaying) {
                        this.stop();
                        this.startMetronome(this.noOfBeats, this.beatValue);
                    }
                    else {
                        this.startMetronome(this.noOfBeats, this.beatValue);
                    }
                }
            }
        });
    }
    //slider ruler
    _renderSlideRuler() {
        console.log("slider: ", this.slideRuler);
        return new (slide_ruler__WEBPACK_IMPORTED_MODULE_2___default())({
            el: this.slideRuler.nativeElement,
            maxValue: 250,
            minValue: 32,
            currentValue: 60,
            handleValue: this.handleValue,
            precision: 0.5,
        });
    }
    handleValue(value) {
        tone__WEBPACK_IMPORTED_MODULE_3__.Transport.bpm.value = value;
    }
    getBtnValue(value) {
        if (value.detail.checked) {
            this.startMetronome(this.noOfBeats, this.beatValue);
            tone__WEBPACK_IMPORTED_MODULE_3__.start();
            this.btnCheck = true;
        }
        else {
            this.btnCheck = false;
            this.soundIsPlaying = false;
            this.stop();
        }
    }
    //sound
    startMetronome(noOfBeats, beatValue) {
        console.log('no Of Beats: ', noOfBeats);
        console.log('beat Value: ', beatValue);
        var barCount = 0;
        tone__WEBPACK_IMPORTED_MODULE_3__.Transport.bpm.value = 60;
        tone__WEBPACK_IMPORTED_MODULE_3__.Transport.start();
        var sound = new howler__WEBPACK_IMPORTED_MODULE_4__.Howl({
            src: ['assets/sounds/metronome/woodblock.wav'],
            onplayerror: function () {
                sound.once('unlock', function () {
                    sound.play();
                });
            }
        });
        //this will start the player on every quarter note
        tone__WEBPACK_IMPORTED_MODULE_3__.Transport.scheduleRepeat(function () {
            sound.play();
            barCount = barCount + 1;
            console.log("bar count: ", barCount);
            if (barCount == noOfBeats) {
                barCount = 0;
            }
            if (barCount == 1) {
                console.log("bar counter is 1");
                var firstBeat = new howler__WEBPACK_IMPORTED_MODULE_4__.Howl({
                    src: ['assets/sounds/metronome/woodblockFirstBeat.wav']
                });
                firstBeat.play();
            }
        }, "4n");
        this.soundIsPlaying = true;
    }
    start() {
        tone__WEBPACK_IMPORTED_MODULE_3__.Transport.start();
    }
    stop() {
        tone__WEBPACK_IMPORTED_MODULE_3__.Transport.cancel();
        this.soundIsPlaying = false;
    }
};
MetronomeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PickerController }
];
MetronomeComponent.propDecorators = {
    slideRuler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['slideRuler', { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef, static: true },] }]
};
MetronomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-metronome',
        template: _metronome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
        styles: [_metronome_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MetronomeComponent);



/***/ }),

/***/ 83262:
/*!*************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewEventComponent": () => (/* binding */ NewEventComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-event.component.html?ngResource */ 85062);
/* harmony import */ var _new_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-event.component.scss?ngResource */ 31830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ensemble.service */ 98293);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 86527);







let NewEventComponent = class NewEventComponent {
    constructor(ModalCtrl, alertController, ensembleService) {
        this.ModalCtrl = ModalCtrl;
        this.alertController = alertController;
        this.ensembleService = ensembleService;
        this.newEvent = { id: 0, name: '', ensembleID: 0, scores: [], description: '', type: '', date: '', time: '' };
        this.dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
        this.todaysDate = '';
        this.selectedDate = '';
        this.currentYear = new Date().getFullYear();
        //image
        this.imageBase64 = '';
        this.imageSource = '';
        //setting todays date
        this.setToday();
    }
    ngOnInit() {
        //selecting ensemble to save in    
        if (this.hasEnsemble) {
            this.newEvent.ensembleID = this.ensembleID;
            console.log("ensemble ID: ", this.ensembleID);
        }
        //getting number of events
        this.eventCount = this.ensembleService.getEventsLength();
        //setting the new ID
        this.newEvent.id = this.eventCount + 1;
        //set header by ensemble name if hasEnsemble
        if (this.hasEnsemble) {
            this.ensembleName = this.ensembleService.getEnsembleByID(this.ensembleID).name;
        }
    }
    setToday() {
        this.todaysDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(), 'yyyy-MM-dd')), 'dd MMMM yyyy');
        this.selectedDate = this.todaysDate;
    }
    dateChanged(value) {
        this.dateValue = value;
        this.selectedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(value), 'dd MMMM yyyy');
        //get date only and set to new event
        this.newEvent.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(value), 'yyyy-MM-dd');
        //get time only and set to new event
        this.newEvent.time = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(value), 'HH:mm:ss');
    }
    //image
    handleFileSelect(evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }
    //image
    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.imageBase64 = btoa(binaryString);
        this.imageSource = 'data:image/jpeg;base64,' + this.imageBase64;
    }
    //programm
    checkBoxChange(e, scoreID) {
        console.log("checkbox change: ", e.currentTarget.checked);
        if (e.currentTarget.checked) {
            this.newEvent.scores.push(scoreID);
        }
        else {
            for (var i = 0; i < this.newEvent.scores.length; i++) {
                if (this.newEvent.scores[i] === scoreID) {
                    this.newEvent.scores.splice(i, 1);
                }
            }
        }
        console.log("lenght: ", this.newEvent.scores.length);
        console.log("new event program: ", this.newEvent.scores);
    }
    //Alert
    handleButtonClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alert',
                header: 'Delete Event',
                subHeader: 'Information will be lost',
                message: 'You cannot undo this action',
                buttons: [
                    {
                        text: "Yes", handler: () => {
                            this.close();
                        }
                    },
                    {
                        text: "No"
                    }
                ]
            });
            alert.present();
        });
    }
    //modal close
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ModalCtrl.dismiss();
        });
    }
    //get location from the output of map component
    getLocation(event) {
        this.chosenLocation = event;
    }
    //saving new event
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.hasEnsemble) {
                this.newEvent.ensembleID = undefined;
            }
            if (this.newEvent.image != null) {
                this.newEvent.image = this.imageSource;
            }
            this.newEvent.location = this.chosenLocation;
            //save new event
            this.ensembleService.saveEvent("Events", this.newEvent);
            //reset temporary variable 
            this.newEvent = { id: 0, name: '', ensembleID: this.ensembleID, scores: [], description: '', type: '', date: '', time: '' };
            this.close();
        });
    }
};
NewEventComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService }
];
NewEventComponent.propDecorators = {
    ensembleID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    eventCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    hasEnsemble: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
NewEventComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-new-event',
        template: _new_event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_event_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewEventComponent);



/***/ }),

/***/ 48597:
/*!***************************************************************!*\
  !*** ./src/app/components/page-scale/page-scale.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageScaleComponent": () => (/* binding */ PageScaleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _page_scale_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-scale.component.html?ngResource */ 66533);
/* harmony import */ var _page_scale_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-scale.component.scss?ngResource */ 50320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_tools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tools.service */ 47526);





let PageScaleComponent = class PageScaleComponent {
    constructor(tools) {
        this.tools = tools;
    }
    ngOnInit() {
    }
    //rotation
    rotateLeft() {
        console.log("rotate left");
        this.tools.emitRotationChangeEvent('l');
    }
    rotateRight() {
        this.tools.emitRotationChangeEvent('r');
    }
    //zoom scale
    zoomScale(selection) {
        this.tools.emitScaleChangeEvent(selection);
    }
};
PageScaleComponent.ctorParameters = () => [
    { type: src_app_services_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService }
];
PageScaleComponent.propDecorators = {
    rotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PageScaleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-page-scale',
        template: _page_scale_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_scale_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageScaleComponent);



/***/ }),

/***/ 45661:
/*!****************************************************************************!*\
  !*** ./src/app/components/recordingConfirm/recording-confirm.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingConfirmComponent": () => (/* binding */ RecordingConfirmComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recording_confirm_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recording-confirm.component.html?ngResource */ 42942);
/* harmony import */ var _recording_confirm_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recording-confirm.component.scss?ngResource */ 96937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ensemble.service */ 98293);






let RecordingConfirmComponent = class RecordingConfirmComponent {
    constructor(ensembleSerivce, modalController) {
        this.ensembleSerivce = ensembleSerivce;
        this.modalController = modalController;
        this.recordingName = '';
    }
    ngOnInit() {
        console.log("current recording in confirm modal: ", this.currentRecording);
    }
    confirm() {
        console.log("change: ", this.recordingName);
        this.currentRecording.name = this.recordingName;
        //save
        this.ensembleSerivce.saveRecording("Recordings", this.currentRecording);
        this.modalController.dismiss();
    }
    ngOnDestroy() {
        this.currentRecording = undefined;
        this.recordingName = '';
    }
};
RecordingConfirmComponent.ctorParameters = () => [
    { type: src_app_services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
RecordingConfirmComponent.propDecorators = {
    currentRecording: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
RecordingConfirmComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-recording',
        template: _recording_confirm_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recording_confirm_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecordingConfirmComponent);



/***/ }),

/***/ 25490:
/*!*************************************************************!*\
  !*** ./src/app/components/recording/recording.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingComponent": () => (/* binding */ RecordingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _recording_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recording.component.html?ngResource */ 1871);
/* harmony import */ var _recording_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recording.component.scss?ngResource */ 9417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ensemble.service */ 98293);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);





;


let RecordingComponent = class RecordingComponent {
    constructor(domSanitizer, ensembleService, modalCtrl2) {
        this.domSanitizer = domSanitizer;
        this.ensembleService = ensembleService;
        this.modalCtrl2 = modalCtrl2;
        this.currentRecording = { id: 0, scoreID: 0, partID: 0, name: '', base64: '' };
        this.isRecording = false;
        this.sound = new Audio;
        this.start = true; // flags that you want the countdown to start
        this.stopIn = 2000; // how long the timer should run
        this.stopTime = 0; // used to hold the stop time
        this.stop = false; // flag to indicate that stop time has been reached
        this.timeTillStop = 0; // holds the display time
    }
    ngOnInit() {
        if (this.selectedPart) {
            this.partID = this.selectedPart.partID;
        }
        //recording length
        this.recordingCount = this.ensembleService.getRecordingsLength();
        console.log("recording Count ngOnInit: ", this.recordingCount);
        //get recordings by partID
        /* use this to get recording of the selected score but specific to the selected part
        this.recordings= this.ensembleService.getRecordingByPart(this.scoreID, this.selectedPart.partID);
        */
        this.recordings = this.ensembleService.getRecordingsByScoreID(this.scoreID);
        console.log('recording in score: ', this.recordings);
    }
    //play recording of selected recording by part
    playRec(recording) {
        if (this.sound) {
            this.sound.src = recording.base64;
            this.sound.play();
            console.log("Part ID of the audio played: ", recording.partID);
            console.log("sound playing: ", this.sound);
        }
        else {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    }
    closeModal() {
        this.modalCtrl2.dismiss("recordingClick");
        //requestAnimationFrame(this.update.bind(this));  // start the countdown
    }
    ngOnDestroy() {
        this.currentRecording = { id: 0, scoreID: 0, partID: 0, name: '', base64: '' };
        this.stop = true;
    }
};
RecordingComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer },
    { type: src_app_services_ensemble_service__WEBPACK_IMPORTED_MODULE_2__.EnsembleService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
RecordingComponent.propDecorators = {
    scoreID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    selectedPart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
RecordingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-recording',
        template: _recording_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recording_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecordingComponent);



/***/ }),

/***/ 1344:
/*!*****************************************************!*\
  !*** ./src/app/components/tuner/tuner.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerComponent": () => (/* binding */ TunerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tuner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tuner.component.html?ngResource */ 88581);
/* harmony import */ var _tuner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tuner.component.scss?ngResource */ 99652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ 66151);





let TunerComponent = class TunerComponent {
    constructor() {
        this.btnCheck = false;
        this.soundIsPlaying = false;
    }
    ngOnInit() { }
    //
    playNote(selectedNote) {
        //change background colour on ion-item which is currently selected 
        this.currentlySelected = selectedNote;
        this.btnCheck = true;
        if (this.soundIsPlaying) {
            this.soundIsPlaying = false;
            this.synth.triggerRelease("0");
        }
        //create a synth and connect it to the main output
        this.synth = new tone__WEBPACK_IMPORTED_MODULE_2__.Synth({ volume: 1 }).toDestination();
        //play note
        this.synth.triggerAttackRelease(selectedNote, 5);
        this.soundIsPlaying = true;
    }
    getBtnValue(value) {
        if (value.detail.checked) {
            this.btnCheck = true;
        }
        else {
            this.btnCheck = false;
            this.soundIsPlaying = false;
            this.currentlySelected = null;
            this.synth.triggerRelease("0");
        }
    }
};
TunerComponent.ctorParameters = () => [];
TunerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tuner',
        template: _tuner_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tuner_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TunerComponent);



/***/ }),

/***/ 65136:
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let BaseService = class BaseService {
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () { });
    }
};
BaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], BaseService);



/***/ }),

/***/ 98293:
/*!**********************************************!*\
  !*** ./src/app/services/ensemble.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnsembleService": () => (/* binding */ EnsembleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 18345);
/* harmony import */ var _struct_data_scores_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../struct/data/scores.data */ 36865);
/* harmony import */ var _struct_data_ensemble_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../struct/data/ensemble.data */ 5957);
/* harmony import */ var _struct_data_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../struct/data/user.data */ 2978);
/* harmony import */ var _struct_data_events_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../struct/data/events.data */ 76968);
/* harmony import */ var _struct_data_recordings_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../struct/data/recordings.data */ 18158);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.service */ 65136);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 86527);










let EnsembleService = class EnsembleService extends _base_service__WEBPACK_IMPORTED_MODULE_6__.BaseService {
    constructor(localStorageService) {
        super();
        this.localStorageService = localStorageService;
        this.STORAGE_KEY_Events = "Events";
        this.STORAGE_KEY_Recordings = "Recordings";
        this.ensemble = _struct_data_ensemble_data__WEBPACK_IMPORTED_MODULE_2__.ENSEMBLES;
        this.event = [];
        this.score = _struct_data_scores_data__WEBPACK_IMPORTED_MODULE_1__.SCORES;
        this.user = _struct_data_user_data__WEBPACK_IMPORTED_MODULE_3__.USERS;
        this.part = [];
        this.recording = [];
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.event = (yield this.localStorageService.get(this.STORAGE_KEY_Events)) || _struct_data_events_data__WEBPACK_IMPORTED_MODULE_4__.EVENTS;
            this.recording = (yield this.localStorageService.get(this.STORAGE_KEY_Recordings)) || _struct_data_recordings_data__WEBPACK_IMPORTED_MODULE_5__.RECORDINGS;
            console.log("hello from ensemble service");
            console.log("recording ensemble service: ", this.recording);
        });
    }
    //Ensemble
    getEnsembleByID(IDvalue) {
        if (this.ensemble.find(e => e.id == IDvalue)) {
            return this.ensemble.find(e => e.id == IDvalue);
        }
        else {
            return false;
        }
    }
    //Event
    getEventByID(IDvalue) {
        return this.event.find(e => e.id == IDvalue);
    }
    getEventsByScoreID(IDvalue) {
        var sample = [{ eventID: 1, scoreID: 3 }];
        const values = sample.filter(e => e.scoreID == IDvalue).map(e => e.eventID);
        return this.event.filter(s => values.indexOf(s.id) > -1);
    }
    getEventsByEnsembleID(IDvalue) {
        return this.event.filter(e => e.ensembleID == IDvalue);
    }
    getEventsByDate(dateValue) {
        var dateOnly = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(dateValue), 'yyyy-MM-dd');
        var timeOnly = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(dateValue), 'HH:mm:ss');
        console.log("date only:", dateOnly, " time: ", timeOnly);
        return this.event.filter(e => e.date == dateOnly);
    }
    getEventsLength() {
        return this.eventCount = Object.keys(this.event).length;
    }
    //Score
    getScoreByID(IDvalue) {
        return this.score.find(s => s.id == IDvalue);
    }
    getScoresByEnsembleID(IDvalue) {
        return this.score.filter(e => e.ensembleID == IDvalue);
    }
    //User
    getUserByID(IDvalue) {
        return this.user.find(u => u.id == IDvalue);
    }
    //recording
    getRecordingsLength() {
        return this.recordingLength = Object.keys(this.recording).length;
    }
    getRecordingsByScoreID(IDvalue) {
        console.log("scoreID ensemble service: ", IDvalue);
        return this.recording.filter(r => r.scoreID == IDvalue);
    }
    getRecordingsByPart(scoreID, IDvalue) {
        const currentRecording = this.recording.filter(r => r.scoreID == scoreID);
        return currentRecording.filter(r => r.partID == IDvalue);
    }
    //Save event
    saveEvent(eventPosition, newEvent) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            //add the new event
            this.event.push(newEvent);
            console.log("Before NEW: ", this.event);
            // write to local storage
            this.localStorageService.set((eventPosition.toString()), this.event);
            console.log("After NEW, EVENT ID 5: " + this.localStorageService.get("5"));
        });
    }
    //save recording
    saveRecording(recordingPosition, newRecording) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            //add the new recording
            this.recording.push(newRecording);
            //write to local storage
            this.localStorageService.set((recordingPosition.toString()), this.recording);
        });
    }
};
EnsembleService.ctorParameters = () => [
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService }
];
EnsembleService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root'
    })
], EnsembleService);



/***/ }),

/***/ 18345:
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let LocalStorageService = class LocalStorageService {
    constructor() { }
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (e) {
            console.log("Local Storage is full, Please empty data", e);
            // fires When localstorage gets full
            // you can handle error here or empty the local storage
        }
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
};
LocalStorageService.ctorParameters = () => [];
LocalStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ 47526:
/*!*******************************************!*\
  !*** ./src/app/services/tools.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsService": () => (/* binding */ ToolsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


let ToolsService = class ToolsService {
    constructor() {
        this.rotation = 0;
        this.zoomScale = 'page-width';
        this.newRotation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.newZoomScale = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    //rotation
    emitRotationChangeEvent(direction) {
        if (direction == 'l') {
            this.rotation = this.rotation - 90;
            this.newRotation.emit(this.rotation);
        }
        else if (direction == 'r') {
            this.rotation = this.rotation + 90;
            this.newRotation.emit(this.rotation);
        }
    }
    getRotationChangeEmitter() {
        return this.newRotation;
    }
    //zomm scale
    emitScaleChangeEvent(zoomScaleSelection) {
        if (zoomScaleSelection == 'page-width') {
            this.zoomScale = 'page-width';
            this.newZoomScale.emit(this.zoomScale);
        }
        else if (zoomScaleSelection == 'page-fit') {
            this.zoomScale = 'page-fit';
            this.newZoomScale.emit(this.zoomScale);
        }
        else if (zoomScaleSelection == 'page-height') {
            this.zoomScale = 'page-height';
            this.newZoomScale.emit(this.zoomScale);
        }
    }
    geZoomScaleChangeEmitter() {
        return this.newZoomScale;
    }
};
ToolsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    })
], ToolsService);



/***/ }),

/***/ 5957:
/*!**********************************************!*\
  !*** ./src/app/struct/data/ensemble.data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENSEMBLES": () => (/* binding */ ENSEMBLES)
/* harmony export */ });
const ENSEMBLES = [
    {
        id: 1,
        picture: "assets/images/ensemble/valette.jpg",
        name: "Societa Filarmonica Nazionale La Valette",
        visibility: "Public",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
        id: 2,
        picture: "assets/images/ensemble/antnin.jpg",
        name: "Socjeta Muzikali Sant' Antnin A.D. 1983 - B'Kara",
        visibility: "Private",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    },
    {
        id: 3,
        picture: "assets/images/ensemble/mpoLogo.png",
        name: "Malta Philharmonic Orchestra",
        visibility: "Private",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    }
];


/***/ }),

/***/ 76968:
/*!********************************************!*\
  !*** ./src/app/struct/data/events.data.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EVENTS": () => (/* binding */ EVENTS)
/* harmony export */ });
const EVENTS = [
    {
        id: 1,
        ensembleID: 1,
        name: "St Paul Feast",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Performance",
        location: { lat: 35.929777, lng: 14.441126 },
        date: "2022-03-24",
        time: "12:00:00"
    },
    {
        id: 2,
        ensembleID: 1,
        scores: [3],
        name: "Summer Concert",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Practice",
        location: { lat: 20, lng: 20 },
        date: "2022-03-24",
        time: "09:00:00"
    },
    {
        id: 3,
        ensembleID: 1,
        name: "Good Friday procession",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Performance",
        location: { lat: 20, lng: 150 },
        date: "2022-03-24",
        time: "18:15:00"
    },
    {
        id: 4,
        ensembleID: 2,
        name: "President Concert",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Performance",
        location: { lat: 20, lng: 20 },
        date: "2022-03-24",
        time: "10:30:00"
    },
    {
        id: 5,
        ensembleID: 3,
        name: "President Concert",
        description: "Event Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        type: "Performance",
        date: "2022-03-24",
        time: "15:45:00",
        location: { lat: 35.899526, lng: 14.518251 },
        scores: [4, 5]
    }
];


/***/ }),

/***/ 18158:
/*!************************************************!*\
  !*** ./src/app/struct/data/recordings.data.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECORDINGS": () => (/* binding */ RECORDINGS)
/* harmony export */ });
const RECORDINGS = [
    {
        id: 1,
        scoreID: 4,
        partID: 1,
        name: 'hard coded recording',
        base64: 'data:audio/wav;base64,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wAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGT5APEIGEjIoBIaAAAP8AAAAQXIoRs0gYAIAAA/woAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tQZPMAAxAyTP494AAAAA/wwAAABwzJLbyCgAAAAD/DgAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7IGT7gPFhKEtpACkyAAAP8AAAAQaotSOjjM/IAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk+YzxXivMaSEQegAAD/AAAAECIAMWIAAAAAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV'
    }
];


/***/ }),

/***/ 36865:
/*!********************************************!*\
  !*** ./src/app/struct/data/scores.data.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCORES": () => (/* binding */ SCORES)
/* harmony export */ });
const SCORES = [
    //A flat
    {
        id: 1,
        userID: 1,
        type: 'interactive',
        name: "Waltz in A flat",
        composer: "Shaun Mifsud",
        instruments: "Piano",
        fullScorePath: "/assets/musicXML/aflat.musicxml",
        videoPath: "Hv4Jylc_Kq4",
        videoStart: 5,
        videoEnd: 58 // to be removed
    },
    //G minor
    {
        id: 2,
        userID: 1,
        type: 'interactive',
        name: "G minor",
        composer: "Shaun Mifsud",
        instruments: "Piano",
        fullScorePath: "/assets/musicXML/G_Minor.xml",
        videoPath: "O8X-i_BKxa0",
        videoStart: 5,
        videoEnd: 52 // to be removed
    },
    //march 13
    {
        id: 3,
        userID: 1,
        ensembleID: 1,
        eventID: 2,
        type: 'static',
        name: "March Op.13",
        composer: "Shaun Mifsud",
        instruments: "Marching band",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
        fullScorePath: '/assets/pdf/march13/March13Fullscore.pdf',
        parts: [{
                partID: 1,
                partFamiliy: 'brass',
                partName: 'Trumpet I',
                partPath: "/assets/pdf/march13/March 13-Bb_Trumpet_1.pdf"
            },
            {
                partID: 2,
                partFamiliy: 'brass',
                partName: 'Trumpet II',
                partPath: "/assets/pdf/march13/March 13-Bb_Trumpet_2.pdf"
            },
            {
                partID: 3,
                partFamiliy: 'woodwind',
                partName: 'Alto Saxophone',
                partPath: "/assets/pdf/march13/March 13-Alto_Saxophone.pdf"
            },
            {
                partID: 4,
                partFamiliy: 'brass',
                partName: 'Baritone Horn',
                partPath: "/assets/pdf/march13/March 13-Baritone_Horn.pdf"
            },
            {
                partID: 5,
                partFamiliy: 'percussion',
                partName: 'Bass Drum',
                partPath: "/assets/pdf/march13/March 13-Bass_Drum.pdf"
            },
            {
                partID: 6,
                partFamiliy: 'woodwind',
                partName: 'Bb Clarinet 1',
                partPath: "/assets/pdf/march13/March 13-Bb_Clarinet_1.pdf"
            },
            {
                partID: 7,
                partFamiliy: 'woodwind',
                partName: 'Bb Clarinet 2',
                partPath: "/assets/pdf/march13/March 13-Bb_Clarinet_2.pdf"
            },
            {
                partID: 8,
                partFamiliy: 'brass',
                partName: 'Bb Tuba',
                partPath: "/assets/pdf/march13/March 13-Bb_Tuba.pdf"
            },
            {
                partID: 9,
                partFamiliy: 'percussion',
                partName: 'Cymbals',
                partPath: "/assets/pdf/march13/March 13-Cymbal.pdf"
            },
            {
                partID: 10,
                partFamiliy: 'brass',
                partName: 'Euphonium',
                partPath: "/assets/pdf/march13/March 13-Euphonium.pdf"
            },
            {
                partID: 11,
                partFamiliy: 'woodwind',
                partName: 'Flute',
                partPath: "/assets/pdf/march13/March 13-Flute.pdf"
            },
            {
                partID: 12,
                partFamiliy: 'brass',
                partName: 'Horn in F I',
                partPath: "/assets/pdf/march13/March 13-Horn_in_F_1.pdf"
            },
            {
                partID: 13,
                partFamiliy: 'brass',
                partName: 'Horn in F II',
                partPath: "/assets/pdf/march13/March 13-Horn_in_F_2.pdf"
            },
            {
                partID: 14,
                partFamiliy: 'percussion',
                partName: 'Snare Drum',
                partPath: "/assets/pdf/march13/March 13-Snare_Drum.pdf"
            },
            {
                partID: 15,
                partFamiliy: 'woodwind',
                partName: 'Tenor Saxophone',
                partPath: "/assets/pdf/march13/March 13-Tenor_Saxophone.pdf"
            },
            {
                partID: 16,
                partFamiliy: 'brass',
                partName: 'Trombone I',
                partPath: "/assets/pdf/march13/March 13-Trombone_1.pdf"
            },
            {
                partID: 17,
                partFamiliy: 'brass',
                partName: 'Trombone II',
                partPath: "/assets/pdf/march13/March 13-Trombone_2.pdf"
            },
            {
                partID: 18,
                partFamiliy: 'brass',
                partName: 'Trombone III',
                partPath: "/assets/pdf/march13/March 13-Trombone_3.pdf"
            },
            {
                partID: 19,
                partFamiliy: 'brass',
                partName: 'Horn in F III',
                partPath: "/assets/pdf/march13/March 13-Horn_in_F_3.pdf"
            }
        ]
    },
    // symphony No 5 - Beethoven
    {
        id: 4,
        userID: 1,
        ensembleID: 3,
        type: 'static',
        name: 'Symphony No. 5',
        composer: 'L.V Beethoven',
        instruments: 'Classical orchestra',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
        fullScorePath: '/assets/pdf/sympNo5/fullScore.pdf',
        parts: [{
                partID: 1,
                partFamiliy: 'string',
                partName: 'Violin I',
                partPath: "/assets/pdf/sympNo5/violin1.pdf",
            },
            {
                partID: 2,
                partFamiliy: 'string',
                partName: 'Violin II',
                partPath: "/assets/pdf/sympNo5/violin2.pdf"
            },
            {
                partID: 3,
                partFamiliy: 'string',
                partName: 'Viola',
                partPath: "/assets/pdf/sympNo5/viola.pdf",
            },
            {
                partID: 4,
                partFamiliy: 'string',
                partName: 'Cello',
                partPath: "/assets/pdf/sympNo5/cello.pdf"
            },
            {
                partID: 5,
                partFamiliy: 'string',
                partName: 'Double Bass',
                partPath: "/assets/pdf/sympNo5/cello.pdf"
            },
            {
                partID: 6,
                partFamiliy: 'brass',
                partName: 'Trumpet in C I',
                partPath: "/assets/pdf/sympNo5/trumpetC1.pdf"
            },
            {
                partID: 7,
                partFamiliy: 'brass',
                partName: 'Trumpet in C II',
                partPath: "/assets/pdf/sympNo5/trumpetC2.pdf"
            },
            {
                partID: 8,
                partFamiliy: 'brass',
                partName: 'Trumpet in Bb II',
                partPath: "/assets/pdf/sympNo5/trumpetB2.pdf"
            },
            {
                partID: 9,
                partFamiliy: 'brass',
                partName: 'Trumpet in Bb I',
                partPath: "/assets/pdf/sympNo5/trumpetB1.pdf"
            },
            {
                partID: 10,
                partFamiliy: 'percussion',
                partName: 'Timpani',
                partPath: "/assets/pdf/sympNo5/timpani.pdf"
            },
            {
                partID: 11,
                partFamiliy: 'woodwind',
                partName: 'Piccolo',
                partPath: "/assets/pdf/sympNo5/piccolo.pdf"
            },
            {
                partID: 12,
                partFamiliy: 'woodwind',
                partName: 'Oboe II',
                partPath: "/assets/pdf/sympNo5/oboe2.pdf"
            },
            {
                partID: 13,
                partFamiliy: 'woodwind',
                partName: 'Oboe I',
                partPath: "/assets/pdf/sympNo5/oboe1.pdf"
            },
            {
                partID: 14,
                partFamiliy: 'brass',
                partName: 'Horn in F II',
                partPath: "/assets/pdf/sympNo5/hornInF2.pdf"
            },
            {
                partID: 15,
                partFamiliy: 'brass',
                partName: 'Horn in F I',
                partPath: "/assets/pdf/sympNo5/hornInF1.pdf"
            },
            {
                partID: 16,
                partFamiliy: 'brass',
                partName: 'Horn in E I',
                partPath: "/assets/pdf/sympNo5/hornInE1.pdf"
            },
            {
                partID: 17,
                partFamiliy: 'brass',
                partName: 'Horn in E II',
                partPath: "/assets/pdf/sympNo5/hornInE2.pdf"
            },
            {
                partID: 18,
                partFamiliy: 'woodwind',
                partName: 'Flute II',
                partPath: "/assets/pdf/sympNo5/flute2.pdf"
            },
            {
                partID: 19,
                partFamiliy: 'woodwind',
                partName: 'Flute I',
                partPath: "/assets/pdf/sympNo5/flute1.pdf"
            },
            {
                partID: 20,
                partFamiliy: 'woodwind',
                partName: 'Contra Bassoon',
                partPath: "/assets/pdf/sympNo5/contraBassoon.pdf"
            },
            {
                partID: 21,
                partFamiliy: 'woodwind',
                partName: 'Clarinet in Bb II',
                partPath: "/assets/pdf/sympNo5/clarinetB2.pdf"
            },
            {
                partID: 22,
                partFamiliy: 'woodwind',
                partName: 'Clarient I',
                partPath: "/assets/pdf/sympNo5/clarinetB1.pdf"
            },
            {
                partID: 23,
                partFamiliy: 'woodwind',
                partName: 'Bassoon II',
                partPath: "/assets/pdf/sympNo5/bassoon2.pdf"
            },
            {
                partID: 24,
                partFamiliy: 'woodwind',
                partName: 'Bassoon I',
                partPath: "/assets/pdf/sympNo5/bassoon1.pdf"
            },
            {
                partID: 25,
                partFamiliy: 'brass',
                partName: 'Trombones',
                partPath: "/assets/pdf/sympNo5/trombones.pdf"
            },
        ]
    },
    // symphony No 40 - Mozart
    {
        id: 5,
        userID: 1,
        ensembleID: 3,
        type: 'static',
        name: 'Symphony No. 40',
        composer: 'W. A. Mozart',
        instruments: 'Classical orchestra',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
        fullScorePath: "/assets/pdf/mozartNo40/fullScore.pdf",
        parts: [
            {
                partID: 1,
                partFamiliy: 'string',
                partName: 'Violin I',
                partPath: "/assets/pdf/mozartNo40/violin1.pdf",
            },
            {
                partID: 2,
                partFamiliy: 'string',
                partName: 'Violin II',
                partPath: "/assets/pdf/mozartNo40/violin2.pdf",
            },
            {
                partID: 3,
                partFamiliy: 'string',
                partName: 'Viola',
                partPath: "/assets/pdf/mozartNo40/viola.pdf",
            },
            {
                partID: 4,
                partFamiliy: 'string',
                partName: 'cello',
                partPath: "/assets/pdf/mozartNo40/celloBass.pdf",
            },
            {
                partID: 5,
                partFamiliy: 'string',
                partName: 'Double bass',
                partPath: "/assets/pdf/mozartNo40/celloBass.pdf",
            },
            {
                partID: 6,
                partFamiliy: 'woodwind',
                partName: 'Clarinet I',
                partPath: "/assets/pdf/mozartNo40/clarinet1.pdf",
            },
            {
                partID: 7,
                partFamiliy: 'woodwind',
                partName: 'Clarinet II',
                partPath: "/assets/pdf/mozartNo40/clarinet2.pdf",
            },
            {
                partID: 8,
                partFamiliy: 'woodwind',
                partName: 'bassoon I',
                partPath: "/assets/pdf/mozartNo40/bassoon1.pdf",
            },
            {
                partID: 9,
                partFamiliy: 'woodwind',
                partName: 'bassoon II',
                partPath: "/assets/pdf/mozartNo40/bassoon2.pdf",
            },
            {
                partID: 10,
                partFamiliy: 'brass',
                partName: 'Horn in B flat',
                partPath: "/assets/pdf/mozartNo40/horn1.pdf",
            },
            {
                partID: 11,
                partFamiliy: 'brass',
                partName: 'Horn in G',
                partPath: "/assets/pdf/mozartNo40/horn2.pdf",
            },
        ]
    },
    // fur elise - Beethoven
    {
        id: 6,
        userID: 1,
        type: 'static',
        name: 'Fur Elise',
        composer: 'L.V Beethoven',
        instruments: 'piano',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
        fullScorePath: "/assets/pdf/furelise/furelise.pdf",
    },
    // The New Colonial March - 
    {
        id: 7,
        userID: 1,
        ensembleID: 2,
        type: 'static',
        name: 'The New Colonial March',
        composer: 'Hall, Robert B.',
        instruments: 'Marching band',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
        fullScorePath: "/assets/pdf/newColonial/fullScore.pdf",
        parts: [
            {
                partID: 1,
                partFamiliy: 'brass',
                partName: 'baritone I',
                partPath: "/assets/pdf/newColonial/1_2_baritone.pdf",
            },
            {
                partID: 2,
                partFamiliy: 'brass',
                partName: 'baritone II',
                partPath: "/assets/pdf/newColonial/1_2_baritone.pdf",
            },
            {
                partID: 3,
                partFamiliy: 'brass',
                partName: 'Trombone I',
                partPath: "/assets/pdf/newColonial/1_2_trombone.pdf",
            },
            {
                partID: 4,
                partFamiliy: 'brass',
                partName: 'Trombone II',
                partPath: "/assets/pdf/newColonial/1_2_trombone.pdf",
            },
            {
                partID: 5,
                partFamiliy: 'brass',
                partName: 'Cornet II',
                partPath: "/assets/pdf/newColonial/2_3_cornet.pdf",
            },
            {
                partID: 6,
                partFamiliy: 'brass',
                partName: 'Cornet III',
                partPath: "/assets/pdf/newColonial/2_3_cornet.pdf",
            },
            {
                partID: 7,
                partFamiliy: 'brass',
                partName: 'Bass Trombone',
                partPath: "/assets/pdf/newColonial/bassTrombone.pdf",
            },
            {
                partID: 8,
                partFamiliy: 'brass',
                partName: 'B flat bass',
                partPath: "/assets/pdf/newColonial/bFlatBass.pdf",
            },
            {
                partID: 9,
                partFamiliy: 'percussion',
                partName: 'Snare drums',
                partPath: "/assets/pdf/newColonial/drums.pdf",
            },
            {
                partID: 10,
                partFamiliy: 'brass',
                partName: 'E flat bass',
                partPath: "/assets/pdf/newColonial/eFlatBass.pdf",
            },
            {
                partID: 11,
                partFamiliy: 'brass',
                partName: 'E flat Horn II',
                partPath: "/assets/pdf/newColonial/eFlatHorn2.pdf",
            },
            {
                partID: 12,
                partFamiliy: 'brass',
                partName: 'Euphonium',
                partPath: "/assets/pdf/newColonial/euphonium.pdf",
            },
            {
                partID: 13,
                partFamiliy: 'brass',
                partName: 'Flugelhorn',
                partPath: "/assets/pdf/newColonial/Flugelhorn.pdf",
            },
            {
                partID: 14,
                partFamiliy: 'brass',
                partName: 'repiano Cornet',
                partPath: "/assets/pdf/newColonial/repianoCornet.pdf",
            },
            {
                partID: 15,
                partFamiliy: 'brass',
                partName: 'solo E flat horn',
                partPath: "/assets/pdf/newColonial/solo_1EflatHorn.pdf",
            },
            {
                partID: 16,
                partFamiliy: 'brass',
                partName: 'E flat horn I',
                partPath: "/assets/pdf/newColonial/solo_1EflatHorn.pdf",
            },
            {
                partID: 17,
                partFamiliy: 'brass',
                partName: 'Solo B flat cornet',
                partPath: "/assets/pdf/newColonial/soloBflatCornet.pdf",
            },
            {
                partID: 18,
                partFamiliy: 'brass',
                partName: 'Soprano cornet',
                partPath: "/assets/pdf/newColonial/sopranoCornet.pdf",
            },
            {
                partID: 19,
                partFamiliy: 'percussion',
                partName: 'Timpani, bells, triangle',
                partPath: "/assets/pdf/newColonial/timpaniTriangle.pdf",
            },
        ]
    }
];


/***/ }),

/***/ 2978:
/*!******************************************!*\
  !*** ./src/app/struct/data/user.data.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USERS": () => (/* binding */ USERS)
/* harmony export */ });
const USERS = [
    {
        id: 1,
        picture: "/assets/images/userPic.jpg",
        name: "Shaun Mifsud",
        email: "shaun@gmail.com",
        password: "79651245",
        instrument: ['piano', 'trumpet'],
    },
    {
        id: 2,
        picture: "/assets/images/userPic.jpg",
        name: "Redd Caruana",
        email: "redd@gmail.com",
        password: "yoyoyoyoyoyoyoyo",
        phoneNumber: 79651245,
    }
];


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 3406:
/*!****************************************!*\
  !*** ./slide-ruler/lib/slide-ruler.js ***!
  \****************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/lib/",n(n.s=1)}([function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function i(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.value="",this.options={canvasWidth:document.body.clientWidth||375,canvasHeight:83,boxColor:"#E4E4E4",scrollLeft:0,heightDecimal:35,heightDigit:18,lineWidth:2,colorDecimal:"#E4E4E4",colorDigit:"#E4E4E4",divide:10,precision:1,fontSize:20,fontColor:"#666",fontMarginTop:35,maxValue:230,minValue:100,currentValue:160},this.localState={startX:0,startY:0,isTouchEnd:!0,touchPoints:[]},this.browserEnv=window.hasOwnProperty("ontouchstart"),this.options=function(t){for(var e=1;e<arguments.length;e++)if(e%2){var n=null!=arguments[e]?arguments[e]:{};i(n,!0).forEach(function(e){a(t,e,n[e])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e])):i(n).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(arguments[e],n))});return t}({},this.options,{},e),this.init(this.options)}var e,n,r;return e=t,(n=[{key:"_renderBox",value:function(t){var e=document.createElement("div"),n=document.createElement("canvas");this.canvas=n,e.className=o.a.box,e.appendChild(n),t.appendChild(e),this._renderCanvas()}},{key:"_renderCanvas",value:function(){var t=this.options,e=t.canvasWidth,n=t.canvasHeight,r=this.canvas;r.width=2*e,r.height=2*n,r.style.width=e+"px",r.style.height=n+"px",r.className=o.a.canvas,this.browserEnv?(r.ontouchstart=this.touchStart.bind(this),r.ontouchmove=this.touchMove.bind(this),r.ontouchend=this.touchEnd.bind(this)):(r.onmousedown=this.touchStart.bind(this),r.onmousemove=this.touchMove.bind(this),r.onmouseup=this.touchEnd.bind(this)),this.dreawCanvas()}},{key:"touchStart",value:function(t){if(t.preventDefault(),t||this.localState.isTouchEnd){this.touchPoints(t);var e=t.touches&&t.touches[0]||t;this.localState.startX=e.pageX,this.localState.startY=e.pageY,this.localState.startT=(new Date).getTime(),this.localState.isTouchEnd=!1}}},{key:"touchMove",value:function(t){if(this.browserEnv||1===t.which&&0!==t.buttons){this.touchPoints(t);var e=t.touches&&t.touches[0]||t,n=e.pageX-this.localState.startX,r=e.pageY-this.localState.startY;if(Math.abs(n)>Math.abs(r)&&Math.abs(Math.round(n/this.options.divide))>0){if(this.browserEnv&&!this.rebound(n))return;this.moveDreaw(n),this.localState.startX=e.pageX,this.localState.startY=e.pageY}}}},{key:"touchEnd",value:function(){this.moveDreaw(this.browserEnv?this.inertialShift():0),this.localState.isTouchEnd=!0,this.localState.touchPoints=[],this.canvas.style.transform="translate3d(0, 0, 0)"}},{key:"touchPoints",value:function(t){var e=t.touches&&t.touches[0]||t,n=(new Date).getTime(),r=e.pageX;this.localState.touchPoints.push({time:n,shift:r})}},{key:"inertialShift",value:function(){var t=0;if(this.localState.touchPoints.length>=4){var e=this.localState.touchPoints.slice(-4),n=(e[3].shift-e[0].shift)/(e[3].time-e[0].time)*1e3;t=Math.sign(n)*Math.pow(n,2)/12e3}return t}},{key:"rebound",value:function(t){var e=this.options,n=e.currentValue,r=e.maxValue;if(n===e.minValue&&t>0||n===r&&t<0){var o=1.5988*Math.sign(t)*Math.pow(Math.abs(t),.7962);return this.canvas.style.transform="translate3d(".concat(o,"px, 0, 0)"),!1}return!0}},{key:"moveDreaw",value:function(t){var e=this,n=this.options,r=n.divide,o=n.precision,i=Math.round(-t/r),a=Math.abs(i);!function t(){a<1||(e.options.currentValue+=Math.sign(i)*o,e.dreawCanvas(),window.requestAnimationFrame(t),a--)}()}},{key:"dreawCanvas",value:function(){var t=this.canvas,e=t.getContext("2d");t.height=t.height;var n=this.options,r=n.canvasWidth,o=(n.canvasHeight,n.maxValue),i=n.minValue,a=n.currentValue,s=n.handleValue,c=n.precision,u=n.divide,l=n.heightDecimal,f=n.heightDigit,h=n.lineWidth,d=n.colorDecimal,p=n.colorDigit,v=n.fontSize,b=n.fontColor,m=n.fontMarginTop;a=a>i?a<o?a:o:i,a=Math.round(10*a/c)*c/10,this.options.currentValue=a,s&&s(a);var y=(a-i)*u/c,g=a-Math.floor(r/2/u)*c,w=(g=g>i?g<o?g:o:i)+r/u*c;w=w<o?w:o;var x=y>r/2?2*(r/2-(a-g)*u/c):2*(r/2-y);l*=2,f*=2,h*=2,v*=2,m*=2,u*=2;for(var S=1/c,O=Math.round(g/c*10)/10;O<=w/c;O++)e.beginPath(),e.moveTo(x+(O-g/c)*u,0),e.lineTo(x+(O-g/c)*u,O%10==0?l:f),e.lineWidth=h,e.strokeStyle=O%10==0?d:p,e.stroke(),e.fillStyle=b,e.textAlign="center",e.textBaseline="top",O%10==0&&(e.font="".concat(v,"px Arial"),e.fillText(Math.round(O/10)/(S/10),x+(O-g/c)*u,m)),e.closePath()}},{key:"init",value:function(t){this._renderBox(t.el)}}])&&s(e.prototype,n),r&&s(e,r),t}();e.default=c},function(t,e,n){(e=t.exports=n(3)(!1)).push([t.i,"* {}\n\n.slide-ruler_box_1Le {\n  position: relative; }\n  .slide-ruler_box_1Le:before {\n    position: absolute;\n    z-index: 1;\n    left: 50%;\n    top: 0;\n    transform: translateX(-50%);\n    content: '';\n    width: 3px;\n    height: 35px;\n    background-color: #00b0ab; }\n\n.slide-ruler_canvas_B8Y {\n  display: block;\n  transition-duration: 300ms; }\n",""]),e.locals={box:"slide-ruler_box_1Le",canvas:"slide-ruler_canvas_B8Y"}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,u=0,l=[],f=n(5);function h(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type,void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),p(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=c||(c=b(e)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");t.attrs.rel="stylesheet",m(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return h(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&h(d(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		14832,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 76398:
/*!******************************************************************!*\
  !*** ./src/app/components/image/image.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "img {\n  max-height: 100%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1ne1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 54325:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 63712:
/*!**************************************************************************!*\
  !*** ./src/app/components/metronome/metronome.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRyb25vbWUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 31830:
/*!**************************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-header {\n  color: #D7E2FF;\n}\n\n.eventFields {\n  padding: 2rem;\n}\n\n.eventFields ion-item {\n  border-radius: 20px;\n}\n\n.eventFields ion-item::part(native) {\n  padding-left: 0.8rem;\n  background-color: white;\n}\n\n.eventFields .newEventSection {\n  background-color: var(--ion-color-primary-light);\n  margin-top: 1rem;\n  border-radius: var(--card-border);\n  padding: 0.5rem;\n}\n\nion-col {\n  padding: 0 1rem 1rem 1rem;\n}\n\n#detailsInput {\n  min-height: 6rem;\n}\n\nh2 {\n  font-weight: 600;\n}\n\nh2, h5, p {\n  color: var(--ion-color-text);\n}\n\nion-button {\n  margin-top: 1rem;\n}\n\nimg {\n  max-width: 76%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFDSTtFQUNJLG1CQUFBO0FBQ1I7O0FBQ1E7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0FBQ1o7O0FBR0k7RUFDSSxnREFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBRFI7O0FBTUE7RUFDSSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjs7QUFPQTtFQUNJLGdCQUFBO0FBSko7O0FBT0E7RUFDSSw0QkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7QUFKSiIsImZpbGUiOiJuZXctZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgY29sb3I6ICNEN0UyRkY7XHJcbn1cclxuXHJcbi5ldmVudEZpZWxkc3tcclxuICAgIHBhZGRpbmc6MnJlbTtcclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6OnBhcnQobmF0aXZlKXtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmV3RXZlbnRTZWN0aW9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyKTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5pb24tY29se1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcclxufVxyXG5cclxuI2RldGFpbHNJbnB1dHtcclxuICAgIG1pbi1oZWlnaHQ6IDZyZW07XHJcbn1cclxuXHJcblxyXG5oMntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmgyLGg1LHB7XHJcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItdGV4dCk7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDc2JTtcclxufSJdfQ== */";

/***/ }),

/***/ 50320:
/*!****************************************************************************!*\
  !*** ./src/app/components/page-scale/page-scale.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXNjYWxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 96937:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/recordingConfirm/recording-confirm.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvcmRpbmctY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 9417:
/*!**************************************************************************!*\
  !*** ./src/app/components/recording/recording.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvcmRpbmcuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 99652:
/*!******************************************************************!*\
  !*** ./src/app/components/tuner/tuner.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-item.selected {\n  background-color: var(--ion-color-primary-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1bmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0RBQUE7QUFDSiIsImZpbGUiOiJ0dW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG59Il19 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 83547:
/*!******************************************************************!*\
  !*** ./src/app/components/image/image.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <img [src]=\"eventImage\" alt=\"\">\n\n</ion-content>\n";

/***/ }),

/***/ 55706:
/*!**************************************************************!*\
  !*** ./src/app/components/map/map.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<google-map width=\" 100%\" [options]=\"options\" (mapClick)=\"mapClick($event);\">\n  <div *ngIf=\"markerPosition\">\n    <map-marker  *ngFor=\"let markerPosition of markerPosition\" \n                [position]=\"markerPosition\"></map-marker>\n  </div>\n</google-map>";

/***/ }),

/***/ 11800:
/*!**************************************************************************!*\
  !*** ./src/app/components/metronome/metronome.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-toolbar class=\"Toolbar\">\n  <ion-label>\n    <h1>Metronome</h1>\n  </ion-label>\n  \n  <ion-buttons slot=\"end\">\n    <ion-toggle color=\"primary\" [checked]=\"btnCheck\" (ionChange)=\"getBtnValue($event)\"></ion-toggle>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content>\n  \n  <div id=\"timeSigniture\">\n    <ion-card color=\"light\" (click)=\"showPicker('beats')\">{{noOfBeats}}</ion-card>\n    <ion-card color=\"light\" (click)=\"showPicker('value')\">{{beatValue}}</ion-card>\n  </div>\n  \n  <ion-item>\n    <div #slideRuler></div>\n  <div id=\"values\"></div>\n  <div id=\"app\"></div>\n  </ion-item>\n\n\n</ion-content>\n";

/***/ }),

/***/ 85062:
/*!**************************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header color=\"light\">\r\n    <ion-toolbar>\r\n        <h2>Add Event</h2>\r\n        <h5>{{hasEnsemble? 'Create a new event for ' + ensembleName : 'Create new event'}} </h5>\r\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"handleButtonClick()\">\r\n            <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-grid class=\"eventFields\">\r\n        <!--image-->\r\n        <div class=\"newEventSection\">\r\n            <ion-row>\r\n                <ion-col size=\"8\">\r\n                    <h2>Image</h2>\r\n                    <p>Add an image for the event</p>                    \r\n                    <input type=\"file\" class=\"file-input\" (change)=\"handleFileSelect($event)\">\r\n                </ion-col>\r\n\r\n                <ion-col size=\"4\">\r\n                    <img src=\"{{imageSource}}\" alt=\"\">\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n\r\n        <!--Details-->\r\n        <div class=\"newEventSection\">\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <h2>Details</h2>\r\n                    <p>What is the event about?</p>\r\n                </ion-col>\r\n                <!--name-->\r\n                <ion-col size=\"6\">\r\n                    <ion-item fill=\"solid\">\r\n                        <ion-label position=\"floating\">Name</ion-label>\r\n                        <ion-input clearInput [(ngModel)]=\"newEvent.name\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n\r\n                <!--type-->\r\n                <ion-col size=\"6\">\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Type</ion-label>\r\n                            <ion-select interface=\"popover\" [(ngModel)]=\"newEvent.type\">\r\n                                <ion-select-option value=\"Performance\">Performance</ion-select-option>\r\n                                <ion-select-option value=\"Rehearsal\">Rehearsal</ion-select-option>\r\n                            </ion-select>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row> \r\n\r\n            <!--ensemble-->\r\n            <ion-row>\r\n                <ion-col size=\"12\" *ngIf=\"!hasEnsemble\">\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Ensemble</ion-label>\r\n                            <ion-select interface=\"popover\" [(ngModel)]=\"newEvent.ensembleID\">\r\n                                <ion-select-option value=0>Personal</ion-select-option>\r\n                                <ion-select-option *ngFor=\"let ensemble of ensembleService.ensemble\" value={{ensemble.id}}>{{ensemble.name}}</ion-select-option>\r\n                            </ion-select>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <!--description-->\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-item fill=\"solid\">\r\n                        <ion-label position=\"floating\">Details</ion-label>\r\n                        <ion-input id=\"detailsInput\" type=\"text\" inputmode=\"description\" [(ngModel)]=\"newEvent.description\"></ion-input>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>        \r\n\r\n        <!--location-->\r\n        <div class=\"newEventSection\">\r\n            \r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <h2>Location</h2>\r\n                    <p>Where will the event take place?</p>\r\n                    \r\n                    <app-map [writeMap]=true (chosenLocation)=\"getLocation($event)\" ></app-map>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        \r\n        <!--date & time-->\r\n        <div class=\"newEventSection\">\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <h2>Date</h2>\r\n                    <p>When will the event occur?</p>\r\n                    <ion-datetime \r\n                    #datetime\r\n                    [value]=\"dateValue\"\r\n                    presentation=\"date-time\"\r\n                    size=\"cover\"\r\n                    [min]=\"currentYear\"\r\n                    max=\"2099\"\r\n                    (ionChange)=\"dateChanged(datetime.value);\"></ion-datetime>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n\r\n        <!--programm-->\r\n        <div class=\"newEventSection\">\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <h2>Programm</h2>\r\n                    <p>Which Scores will be played?</p>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"hasEnsemble\">\r\n                <ion-list lines=\"none\">\r\n                    <!--list header-->\r\n                    <ion-item class=\"listHeader\">\r\n                        <ion-grid>\r\n                            <ion-row>\r\n                            <ion-col size=\"6\"><h6>Piece Title</h6></ion-col>\r\n                            <ion-col size=\"2\"><h6>Composer</h6></ion-col>\r\n                            <ion-col size=\"2\"><h6>Instrumentation</h6></ion-col>\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </ion-item>\r\n            \r\n                    <ion-item-sliding *ngFor=\"let score of ensembleService.getScoresByEnsembleID(ensembleID); let i = index;\" [routerLink]=\"['/score-detail/', score.id]\">\r\n                        <ion-item>\r\n                        <!--piece card-->\r\n                        <ion-card class=\"pieceCard\" color=\"light\">\r\n                            <ion-card-content>\r\n                            <ion-grid>\r\n                                <ion-row>\r\n                                    <ion-col size=\"6\"><h1>{{score.name}}</h1></ion-col>\r\n                                    <ion-col size=\"2\"><h3>{{score.composer}}</h3></ion-col>\r\n                                    <ion-col size=\"2\"><h3>{{score.instruments}}</h3></ion-col>\r\n                                    <ion-col size=\"2\">\r\n                                        <ion-checkbox (ionChange)=\"checkBoxChange($event,score.id);\"></ion-checkbox>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                        </ion-item>\r\n            \r\n                        <ion-item-options>\r\n                        <ion-item-option>\r\n                            <ion-icon name=\"trash\"></ion-icon>\r\n                        </ion-item-option>\r\n                        </ion-item-options>\r\n                    </ion-item-sliding>\r\n                    </ion-list>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"!hasEnsemble\">\r\n                <ion-list lines=\"none\">\r\n                    <!--list header-->\r\n                    <ion-item class=\"listHeader\">\r\n                        <ion-grid>\r\n                            <ion-row>\r\n                            <ion-col size=\"6\"><h6>Piece Title</h6></ion-col>\r\n                            <ion-col size=\"2\"><h6>Composer</h6></ion-col>\r\n                            <ion-col size=\"2\"><h6>Instrumentation</h6></ion-col>\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </ion-item>\r\n            \r\n                    <ion-item-sliding *ngFor=\"let score of ensembleService.getScoresByEnsembleID(undefined); let i = index;\">\r\n                        <ion-item>\r\n                        <!--piece card-->\r\n                        <ion-card class=\"pieceCard\" color=\"light\">\r\n                            <ion-card-content>\r\n                            <ion-grid>\r\n                                <ion-row>\r\n                                <ion-col size=\"6\"><h1>{{score.name}}</h1></ion-col>\r\n                                <ion-col size=\"2\"><h3>{{score.composer}}</h3></ion-col>\r\n                                <ion-col size=\"2\"><h3>{{score.instruments}}</h3></ion-col>\r\n                                <ion-col size=\"2\">\r\n                                    <ion-checkbox (ionChange)=\"checkBoxChange($event,score.id);\"></ion-checkbox>\r\n                                </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                        </ion-item>\r\n            \r\n                        <ion-item-options>\r\n                        <ion-item-option>\r\n                            <ion-icon name=\"trash\"></ion-icon>\r\n                        </ion-item-option>\r\n                        </ion-item-options>\r\n                    </ion-item-sliding>\r\n                    </ion-list>\r\n            </ion-row>\r\n        </div>\r\n\r\n        <!--create event button-->\r\n        <ion-row>\r\n            <ion-col size=\"12\">\r\n                <ion-button (click)=\"save()\" class=\"ion-float-end\" fill=\"solid\" color=\"primary\">Create Event</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    \r\n</ion-content>";

/***/ }),

/***/ 66533:
/*!****************************************************************************!*\
  !*** ./src/app/components/page-scale/page-scale.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-toolbar class=\"Toolbar\">\r\n  <ion-button slot=\"start\" (click)=\"rotateLeft();\">\r\n    <span class=\"iconify\" data-icon=\"ic:baseline-rotate-left\"></span>\r\n  </ion-button>\r\n\r\n  <ion-button slot=\"end\" (click)=\"rotateRight();\">\r\n    <span class=\"iconify\" data-icon=\"ic:baseline-rotate-right\"></span>\r\n  </ion-button>\r\n\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-item (click)=\"zoomScale('page-fit');\">\r\n    <ion-label>Fit to screen</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item (click)=\"zoomScale('page-width');\">\r\n    <ion-label>Fit to width</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item (click)=\"zoomScale('page-height');\">\r\n    <ion-label>Fit to height</ion-label>\r\n  </ion-item>\r\n</ion-content>";

/***/ }),

/***/ 42942:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/recordingConfirm/recording-confirm.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item id=\"nameInput\" fill=\"solid\">\r\n  <ion-label position=\"floating\">Name</ion-label>\r\n  <ion-input clearInput [(ngModel)]=\"recordingName\"></ion-input>\r\n\r\n</ion-item>\r\n\r\n<ion-footer id=\"saveButton\">\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"confirm();\">Save</ion-button>\r\n</ion-footer>";

/***/ }),

/***/ 1871:
/*!**************************************************************************!*\
  !*** ./src/app/components/recording/recording.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\r\n  <ion-item *ngFor=\"let recording of recordings\"> \r\n    <ion-label (click)=\"playRec(recording)\">{{recording.name}}</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n  <ion-item id=\"recording Buttons\" (click)=\"closeModal();\">\r\n    <ion-label>New recording</ion-label>\r\n  </ion-item>\r\n\r\n";

/***/ }),

/***/ 88581:
/*!******************************************************************!*\
  !*** ./src/app/components/tuner/tuner.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-toolbar>\n  <ion-toggle color=\"primary\" slot=\"end\" [checked]=\"btnCheck\" (ionChange)=\"getBtnValue($event)\"></ion-toggle>\n</ion-toolbar>\n\n<ion-list>\n  <ion-item [class.selected]=\" 'C4' === currentlySelected\" (click)=\"playNote('C4');\"> \n    <ion-label><h1>C</h1></ion-label>\n  </ion-item>\n\n  <ion-item [class.selected]=\" 'D#4' === currentlySelected\" (click)=\"playNote('D#4');\"> \n    <ion-label><h1>E♭</h1></ion-label>\n  </ion-item>\n\n  <ion-item [class.selected]=\" 'A5' === currentlySelected\"  (click)=\"playNote('A5');\"> \n    <ion-label><h1>A</h1></ion-label>\n  </ion-item>\n\n  <ion-item [class.selected]=\" 'A#5' === currentlySelected\"  (click)=\"playNote('A#5');\"> \n    <ion-label><h1>B♭</h1></ion-label>\n  </ion-item>\n</ion-list>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map