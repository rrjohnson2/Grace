(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/layout/home/cover-photo/cover-photo.component.html":
/*!********************************************************************!*\
  !*** ./src/app/layout/home/cover-photo/cover-photo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header page-header-small\">\r\n    <div class=\"page-header-image\" style=\"background-image: url('assets/img/grace_cover_photo.jpg');\">\r\n    </div>\r\n    <div class=\"container cover-container\">\r\n        <div class=\"content-center cover \">\r\n            <h1 class=\"title \">The Graceful Doula</h1>\r\n            <h5 class=\"sub-title\">Believe in Women & Trust in Birth</h5>  \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/home/cover-photo/cover-photo.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/home/cover-photo/cover-photo.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ob21lL2NvdmVyLXBob3RvL2NvdmVyLXBob3RvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/home/cover-photo/cover-photo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/home/cover-photo/cover-photo.component.ts ***!
  \******************************************************************/
/*! exports provided: CoverPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverPhotoComponent", function() { return CoverPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoverPhotoComponent = /** @class */ (function () {
    function CoverPhotoComponent() {
    }
    CoverPhotoComponent.prototype.ngOnInit = function () {
    };
    CoverPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cover-photo',
            template: __webpack_require__(/*! ./cover-photo.component.html */ "./src/app/layout/home/cover-photo/cover-photo.component.html"),
            styles: [__webpack_require__(/*! ./cover-photo.component.scss */ "./src/app/layout/home/cover-photo/cover-photo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoverPhotoComponent);
    return CoverPhotoComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/grace-services/grace-services.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/layout/home/grace-services/grace-services.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper grace-services\">\r\n  <div class=\"section\" id=\"carousel\">\r\n    <div class=\"container content-center\">\r\n      <div class=\"title text-center\">\r\n        <h3>Services</h3>\r\n      </div>\r\n      <div class=\"slide row justify-content-center\">\r\n        \r\n        <div class=\"card card-content card-serve card-height col-sm-8 col-md-8 col-lg-6 text-center\">\r\n          <div (click)=\"openModal(tagged)\" class=\"card-header row justify-content-center\">\r\n              <div class=\"col-8\" >{{tagged.title}}</div>\r\n              <i class=\" col-8 now-ui-icons travel_info\"></i>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n              <ngb-carousel #carousel (slide)=\"updateContent($event)\" class=\"\">\r\n                  <ng-template  [id]=\"service.id\" class=\"service-slide\" *ngFor=\"let service of services\" ngbSlide>\r\n                    <img class=\"d-block carousel-image\" [src]=\"service.image\" alt=\"First slide\">\r\n                  </ng-template>\r\n              </ngb-carousel>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-grace-modal (resume)=\"resume($event)\" #modal></app-grace-modal>"

/***/ }),

/***/ "./src/app/layout/home/grace-services/grace-services.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layout/home/grace-services/grace-services.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ob21lL2dyYWNlLXNlcnZpY2VzL2dyYWNlLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/home/grace-services/grace-services.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/home/grace-services/grace-services.component.ts ***!
  \************************************************************************/
/*! exports provided: GraceServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraceServicesComponent", function() { return GraceServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_shared_grace_modal_grace_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/grace-modal/grace-modal.component */ "./src/app/shared/grace-modal/grace-modal.component.ts");




var GraceServicesComponent = /** @class */ (function () {
    function GraceServicesComponent() {
        this.services = [
            {
                id: "free",
                title: "FREE CONSULTATION",
                image: "assets/img/freecon.jpg",
                content: {
                    goal: "\n        My goal is for us to get to know each other and answer any questions . \n        If I am not the best fit for your family,\n        I can refer you to a doula who may better fit your needs.",
                    points: [
                        'Includes: 1 free in person meetup.'
                    ]
                }
            },
            {
                id: "preg",
                title: "PREGNANCY SUPPORT",
                image: "assets/img/pregosup.jpg",
                content: {
                    goal: "\n        My goal is for you to feel heard, supported, and ready to bring your baby into the world.\n        Together we will work through any fears or past trauma leading up to your childbirth.\n        We will build a birth \u201Cplan\u201D as I provide unbiased evidence-based information where needed.\n        We will learn comfort measures and rebozo techniques",
                    points: [
                        "2-3 prenatal visits covering the basics and comfort measures.",
                        "Help building a birth plan.",
                        "Unlimited phone and email support throughout pregnancy."
                    ]
                }
            },
            {
                id: "lact",
                title: "FEEDING SUPPORT",
                image: "assets/img/lactation1.jpg",
                content: {
                    goal: "My goal is to help guide and support you however you choose to feed your infant.",
                    points: [
                        "Breastfeeding- Breastfeeding can be magical and dang hard! Having adequate support in those first weeks is vital to building a successful breastfeeding relationship. As a trained CAPPA lactation educator, I can provide evidence-based information about lactation and breastfeeding. From initial breastfeeding through weaning I can provide education and encouragement to reach your goals.",
                        "Bottle Feeding/Pumping- Balancing bottles, breast, and pump can be difficult. I can provide the necessary evidence-based information so that you can successfully reach your goals and feed your baby how you feel best.",
                        "Formula Feeding- I have knowledge on formula-feeding and can provide the evidence-based information necessary to support this decision."
                    ]
                }
            },
            {
                id: "birth",
                title: "BIRTHING DOULA",
                image: "assets/img/birth.jpg",
                content: {
                    goal: "\n        My goal is to work with alongside your birth team to give you a positive experience through by providing the following.",
                    points: [
                        "Unbiased Evidence Based Information-Interpreting situations and providing information to help you make the best decisions for your family.",
                        "Comfort Measures- Working with your partner to keep you as comfortable as possible. No matter the type of birth you choose there are many comfort measures we can employ.",
                        "Emotional Support- Supporting you through fears and previous birth traumas. Encouraging you to birth the way you want to.",
                        "Advocacy- Help you to communicate and advocate for your desires. Make sure that you are respected and heard.",
                        "Includes: 2-3 untimed prenatal visits. Unlimited phone and email support. Continuous labor support. Immediate postpartum support. Resource referrals"
                    ]
                }
            },
        ];
    }
    GraceServicesComponent.prototype.ngOnInit = function () {
        this.tagged = this.services[0];
    };
    GraceServicesComponent.prototype.updateContent = function (slide) {
        var active;
        switch (slide.current) {
            case "free":
                active = this.services[0];
                break;
            case "preg":
                active = this.services[1];
                break;
            case "lact":
                active = this.services[2];
                break;
            case "birth":
                active = this.services[3];
                break;
        }
        this.tagged = active;
    };
    GraceServicesComponent.prototype.openModal = function (tagged) {
        this.modal.populateOpen(tagged.title, tagged.content);
        this.carousel.pause();
    };
    GraceServicesComponent.prototype.resume = function (event) {
        if (event) {
            console.log("hit");
            this.carousel.cycle();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("carousel"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"])
    ], GraceServicesComponent.prototype, "carousel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modal"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", app_shared_grace_modal_grace_modal_component__WEBPACK_IMPORTED_MODULE_3__["GraceModalComponent"])
    ], GraceServicesComponent.prototype, "modal", void 0);
    GraceServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grace-services',
            template: __webpack_require__(/*! ./grace-services.component.html */ "./src/app/layout/home/grace-services/grace-services.component.html"),
            styles: [__webpack_require__(/*! ./grace-services.component.scss */ "./src/app/layout/home/grace-services/grace-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraceServicesComponent);
    return GraceServicesComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cover-photo></app-cover-photo>\r\n<app-meet-grace></app-meet-grace>\r\n<app-grace-services></app-grace-services>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/layout/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/layout/home/home.routing.module.ts");
/* harmony import */ var _cover_photo_cover_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cover-photo/cover-photo.component */ "./src/app/layout/home/cover-photo/cover-photo.component.ts");
/* harmony import */ var _meet_grace_meet_grace_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meet-grace/meet-grace.component */ "./src/app/layout/home/meet-grace/meet-grace.component.ts");
/* harmony import */ var _grace_services_grace_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grace-services/grace-services.component */ "./src/app/layout/home/grace-services/grace-services.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_shared_common_commonly_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/commonly.shared.module */ "./src/app/shared/common/commonly.shared.module.ts");
/* harmony import */ var app_shared_grace_modal_grace_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/grace-modal/grace-modal.component */ "./src/app/shared/grace-modal/grace-modal.component.ts");











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _cover_photo_cover_photo_component__WEBPACK_IMPORTED_MODULE_5__["CoverPhotoComponent"],
                _meet_grace_meet_grace_component__WEBPACK_IMPORTED_MODULE_6__["MeetGraceComponent"],
                _grace_services_grace_services_component__WEBPACK_IMPORTED_MODULE_7__["GraceServicesComponent"],
                app_shared_grace_modal_grace_modal_component__WEBPACK_IMPORTED_MODULE_10__["GraceModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                app_shared_common_commonly_shared_module__WEBPACK_IMPORTED_MODULE_9__["CommonlySharedModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/layout/home/home.routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/home/home.routing.module.ts ***!
  \****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/layout/home/home.component.ts");





var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: []
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/home/meet-grace/meet-grace.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/home/meet-grace/meet-grace.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper meet-grace\">\r\n  <div class=\"container\">\r\n    <div class=\" content-center meet-grace-content\">\r\n      <h3 class=\" text-center title\">\r\n        Grace Johnson\r\n      </h3>\r\n      <div class=\"text-center\">\r\n        <div class=\"profile-picture\">\r\n          <img src=\"assets/img/grace_profile.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\r\n        </div>\r\n        <div class=\"about-content\">\r\n          Hey Y’all! I am born and raised in NC and graduated locally from UNC.\r\n          I have been with my partner, Roice since we were 15 and we were married\r\n          in 2015. I am a proud mama to a toddler, Maven-Beau and two dogs, Buddy\r\n          and Pablo. As a little girl my family always told me I came from a line of\r\n          \"good birthers\". When I became pregnant I had the privilege of not being fearful\r\n          abor. I knew my body could do it! I went on to have the most wonderful unmedicated\r\n          water birth where I felt respected, heard, and powerful. I wanted to shout from a\r\n          roof top! I realize that so many of don't get that experience. We often carry fears\r\n          into our births. In a world with so much opinion we are sometimes lost looking for\r\n          evidence and fact. And unfortunately, women are not always respected, trusted, or\r\n          advocated for during childbirth. That's why I decided to start my CAPPA training to\r\n          become a doula! I want you to have the birth you want, whatever that means to you.\r\n          ed cesarean, home birth, epidural, or water birth. You know how to birth your baby.\r\n          I will advocate for you, support you, and help you have a birth you can shout from\r\n          the roof top about!\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/home/meet-grace/meet-grace.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/home/meet-grace/meet-grace.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".meet-grace {\n  background: rgba(192, 232, 255, 0.175);\n  padding: 0; }\n\n.meet-grace-content {\n  padding-top: 5vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hvbWUvbWVldC1ncmFjZS9DOlxcVXNlcnNcXHJyam9oXFxEb2N1bWVudHNcXEpTV2FyZVxcR3JhY2UgV2Vic2l0ZSBGRS9zcmNcXGFwcFxcbGF5b3V0XFxob21lXFxtZWV0LWdyYWNlXFxtZWV0LWdyYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQXNDO0VBQ3RDLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hvbWUvbWVldC1ncmFjZS9tZWV0LWdyYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lZXQtZ3JhY2V7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgMjMyLCAyNTUsIDAuMTc1KTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLm1lZXQtZ3JhY2UtY29udGVudHtcclxuICAgIHBhZGRpbmctdG9wOiA1dmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/home/meet-grace/meet-grace.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/home/meet-grace/meet-grace.component.ts ***!
  \****************************************************************/
/*! exports provided: MeetGraceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetGraceComponent", function() { return MeetGraceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MeetGraceComponent = /** @class */ (function () {
    function MeetGraceComponent() {
    }
    MeetGraceComponent.prototype.ngOnInit = function () {
    };
    MeetGraceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meet-grace',
            template: __webpack_require__(/*! ./meet-grace.component.html */ "./src/app/layout/home/meet-grace/meet-grace.component.html"),
            styles: [__webpack_require__(/*! ./meet-grace.component.scss */ "./src/app/layout/home/meet-grace/meet-grace.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MeetGraceComponent);
    return MeetGraceComponent;
}());



/***/ }),

/***/ "./src/app/shared/grace-modal/grace-modal.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/grace-modal/grace-modal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-template class=\"row\" #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <div class=\" text-center\">\n            <div>{{title}}</div>\n        </div>\n    </div>\n    <div class=\"modal-body text-left\">\n        <div class=\"content-modal\">\n            <div class=\"modal-goal\">{{content.goal}}</div>\n            <ul *ngFor=\"let point of content.points\">\n                <li class=\"point\">{{point}}</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"modal-footer row justify-content-center\">\n            <button type=\"button\" class=\" close-text btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n        </div>\n    \n</ng-template>\n"

/***/ }),

/***/ "./src/app/shared/grace-modal/grace-modal.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/grace-modal/grace-modal.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ncmFjZS1tb2RhbC9ncmFjZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/grace-modal/grace-modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/grace-modal/grace-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: GraceModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraceModalComponent", function() { return GraceModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var GraceModalComponent = /** @class */ (function () {
    function GraceModalComponent(modalService) {
        this.modalService = modalService;
        this.resume = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GraceModalComponent.prototype.ngOnInit = function () {
    };
    GraceModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.resume.emit(true);
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.resume.emit(true);
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    GraceModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    GraceModalComponent.prototype.populateOpen = function (title, content) {
        this.title = title;
        this.content = content;
        this.open(this.classic);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('classic'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GraceModalComponent.prototype, "classic", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], GraceModalComponent.prototype, "resume", void 0);
    GraceModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grace-modal',
            template: __webpack_require__(/*! ./grace-modal.component.html */ "./src/app/shared/grace-modal/grace-modal.component.html"),
            styles: [__webpack_require__(/*! ./grace-modal.component.scss */ "./src/app/shared/grace-modal/grace-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], GraceModalComponent);
    return GraceModalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map