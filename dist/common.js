(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/common/commonly.shared.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/common/commonly.shared.module.ts ***!
  \*********************************************************/
/*! exports provided: CommonlySharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonlySharedModule", function() { return CommonlySharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grace_modal_large_grace_modal_large_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grace-modal-large/grace-modal-large.component */ "./src/app/shared/grace-modal-large/grace-modal-large.component.ts");




var CommonlySharedModule = /** @class */ (function () {
    function CommonlySharedModule() {
    }
    CommonlySharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [
                _grace_modal_large_grace_modal_large_component__WEBPACK_IMPORTED_MODULE_3__["GraceModalLargeComponent"]
            ],
            exports: [
                _grace_modal_large_grace_modal_large_component__WEBPACK_IMPORTED_MODULE_3__["GraceModalLargeComponent"]
            ]
        })
    ], CommonlySharedModule);
    return CommonlySharedModule;
}());



/***/ }),

/***/ "./src/app/shared/grace-modal-large/grace-modal-large.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/grace-modal-large/grace-modal-large.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header justify-content-center\">\r\n      <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n          <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n      </button>\r\n      <h4 class=\"title title-up\">Modal title</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\r\n      </p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\r\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/shared/grace-modal-large/grace-modal-large.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/grace-modal-large/grace-modal-large.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ncmFjZS1tb2RhbC1sYXJnZS9ncmFjZS1tb2RhbC1sYXJnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/grace-modal-large/grace-modal-large.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/grace-modal-large/grace-modal-large.component.ts ***!
  \*************************************************************************/
/*! exports provided: GraceModalLargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraceModalLargeComponent", function() { return GraceModalLargeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var GraceModalLargeComponent = /** @class */ (function () {
    function GraceModalLargeComponent(modalService) {
        this.modalService = modalService;
    }
    GraceModalLargeComponent.prototype.ngOnInit = function () {
        this.open('classic', '', '');
    };
    GraceModalLargeComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    GraceModalLargeComponent.prototype.getDismissReason = function (reason) {
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
    GraceModalLargeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grace-modal-large',
            template: __webpack_require__(/*! ./grace-modal-large.component.html */ "./src/app/shared/grace-modal-large/grace-modal-large.component.html"),
            styles: [__webpack_require__(/*! ./grace-modal-large.component.scss */ "./src/app/shared/grace-modal-large/grace-modal-large.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], GraceModalLargeComponent);
    return GraceModalLargeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map