(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/api-ai-javascript/es6/ApiAiClient.js":
/*!***********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/ApiAiClient.js ***!
  \***********************************************************/
/*! exports provided: ApiAiConstants, ApiAiClient, IStreamClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiClient", function() { return ApiAiClient; });
/* harmony import */ var _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiAiConstants */ "./node_modules/api-ai-javascript/es6/ApiAiConstants.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./node_modules/api-ai-javascript/es6/Errors.js");
/* harmony import */ var _Request_EventRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Request/EventRequest */ "./node_modules/api-ai-javascript/es6/Request/EventRequest.js");
/* harmony import */ var _Request_TextRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Request/TextRequest */ "./node_modules/api-ai-javascript/es6/Request/TextRequest.js");
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Interfaces */ "./node_modules/api-ai-javascript/es6/Interfaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IStreamClient", function() { return _Interfaces__WEBPACK_IMPORTED_MODULE_4__["IStreamClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiAiConstants", function() { return _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"]; });







class ApiAiClient {
    constructor(options) {
        if (!options || !options.accessToken) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__["ApiAiClientConfigurationError"]("Access token is required for new ApiAi.Client instance");
        }
        this.accessToken = options.accessToken;
        this.apiLang = options.lang || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_CLIENT_LANG;
        this.apiVersion = options.version || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_BASE_URL;
        this.sessionId = options.sessionId || this.guid();
    }
    textRequest(query, options = {}) {
        if (!query) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__["ApiAiClientConfigurationError"]("Query should not be empty");
        }
        options.query = query;
        return new _Request_TextRequest__WEBPACK_IMPORTED_MODULE_3__["default"](this, options).perform();
    }
    eventRequest(eventName, eventData = {}, options = {}) {
        if (!eventName) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__["ApiAiClientConfigurationError"]("Event name can not be empty");
        }
        options.event = { name: eventName, data: eventData };
        return new _Request_EventRequest__WEBPACK_IMPORTED_MODULE_2__["EventRequest"](this, options).perform();
    }
    // @todo: implement local tts request
    /*public ttsRequest(query) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        return new TTSRequest(this).makeTTSRequest(query);
    }*/
    /*public userEntitiesRequest(options: IRequestOptions = {}): UserEntitiesRequest {
        return new UserEntitiesRequest(this, options);
    }*/
    getAccessToken() {
        return this.accessToken;
    }
    getApiVersion() {
        return (this.apiVersion) ? this.apiVersion : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_API_VERSION;
    }
    getApiLang() {
        return (this.apiLang) ? this.apiLang : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_CLIENT_LANG;
    }
    getApiBaseUrl() {
        return (this.apiBaseUrl) ? this.apiBaseUrl : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_BASE_URL;
    }
    setSessionId(sessionId) {
        this.sessionId = sessionId;
    }
    getSessionId() {
        return this.sessionId;
    }
    /**
     * generates new random UUID
     * @returns {string}
     */
    guid() {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    }
}


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/ApiAiConstants.js":
/*!**************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/ApiAiConstants.js ***!
  \**************************************************************/
/*! exports provided: ApiAiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiConstants", function() { return ApiAiConstants; });
var ApiAiConstants;
(function (ApiAiConstants) {
    let AVAILABLE_LANGUAGES;
    (function (AVAILABLE_LANGUAGES) {
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["EN"] = "en"] = "EN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["DE"] = "de"] = "DE";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ES"] = "es"] = "ES";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT_BR"] = "pt-BR"] = "PT_BR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_HK"] = "zh-HK"] = "ZH_HK";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_CN"] = "zh-CN"] = "ZH_CN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_TW"] = "zh-TW"] = "ZH_TW";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["NL"] = "nl"] = "NL";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["FR"] = "fr"] = "FR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["IT"] = "it"] = "IT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["JA"] = "ja"] = "JA";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["KO"] = "ko"] = "KO";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT"] = "pt"] = "PT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["RU"] = "ru"] = "RU";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["UK"] = "uk"] = "UK";
    })(AVAILABLE_LANGUAGES = ApiAiConstants.AVAILABLE_LANGUAGES || (ApiAiConstants.AVAILABLE_LANGUAGES = {}));
    ApiAiConstants.VERSION = "2.0.0-beta.20";
    ApiAiConstants.DEFAULT_BASE_URL = "https://api.api.ai/v1/";
    ApiAiConstants.DEFAULT_API_VERSION = "20150910";
    ApiAiConstants.DEFAULT_CLIENT_LANG = AVAILABLE_LANGUAGES.EN;
})(ApiAiConstants || (ApiAiConstants = {}));


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Errors.js":
/*!******************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Errors.js ***!
  \******************************************************/
/*! exports provided: ApiAiBaseError, ApiAiClientConfigurationError, ApiAiRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiBaseError", function() { return ApiAiBaseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiClientConfigurationError", function() { return ApiAiClientConfigurationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiRequestError", function() { return ApiAiRequestError; });
class ApiAiBaseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.stack = new Error().stack;
    }
}
class ApiAiClientConfigurationError extends ApiAiBaseError {
    constructor(message) {
        super(message);
        this.name = "ApiAiClientConfigurationError";
    }
}
class ApiAiRequestError extends ApiAiBaseError {
    constructor(message, code = null) {
        super(message);
        this.message = message;
        this.code = code;
        this.name = "ApiAiRequestError";
    }
}


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Interfaces.js":
/*!**********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Interfaces.js ***!
  \**********************************************************/
/*! exports provided: IStreamClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IStreamClient", function() { return IStreamClient; });
var IStreamClient;
(function (IStreamClient) {
    let ERROR;
    (function (ERROR) {
        ERROR[ERROR["ERR_NETWORK"] = 0] = "ERR_NETWORK";
        ERROR[ERROR["ERR_AUDIO"] = 1] = "ERR_AUDIO";
        ERROR[ERROR["ERR_SERVER"] = 2] = "ERR_SERVER";
        ERROR[ERROR["ERR_CLIENT"] = 3] = "ERR_CLIENT";
    })(ERROR = IStreamClient.ERROR || (IStreamClient.ERROR = {}));
    let EVENT;
    (function (EVENT) {
        EVENT[EVENT["MSG_WAITING_MICROPHONE"] = 0] = "MSG_WAITING_MICROPHONE";
        EVENT[EVENT["MSG_MEDIA_STREAM_CREATED"] = 1] = "MSG_MEDIA_STREAM_CREATED";
        EVENT[EVENT["MSG_INIT_RECORDER"] = 2] = "MSG_INIT_RECORDER";
        EVENT[EVENT["MSG_RECORDING"] = 3] = "MSG_RECORDING";
        EVENT[EVENT["MSG_SEND"] = 4] = "MSG_SEND";
        EVENT[EVENT["MSG_SEND_EMPTY"] = 5] = "MSG_SEND_EMPTY";
        EVENT[EVENT["MSG_SEND_EOS_OR_JSON"] = 6] = "MSG_SEND_EOS_OR_JSON";
        EVENT[EVENT["MSG_WEB_SOCKET"] = 7] = "MSG_WEB_SOCKET";
        EVENT[EVENT["MSG_WEB_SOCKET_OPEN"] = 8] = "MSG_WEB_SOCKET_OPEN";
        EVENT[EVENT["MSG_WEB_SOCKET_CLOSE"] = 9] = "MSG_WEB_SOCKET_CLOSE";
        EVENT[EVENT["MSG_STOP"] = 10] = "MSG_STOP";
        EVENT[EVENT["MSG_CONFIG_CHANGED"] = 11] = "MSG_CONFIG_CHANGED";
    })(EVENT = IStreamClient.EVENT || (IStreamClient.EVENT = {}));
})(IStreamClient || (IStreamClient = {}));


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/EventRequest.js":
/*!********************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/EventRequest.js ***!
  \********************************************************************/
/*! exports provided: EventRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRequest", function() { return EventRequest; });
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./node_modules/api-ai-javascript/es6/Request/Request.js");

class EventRequest extends _Request__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/Request.js":
/*!***************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/Request.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Errors */ "./node_modules/api-ai-javascript/es6/Errors.js");
/* harmony import */ var _XhrRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../XhrRequest */ "./node_modules/api-ai-javascript/es6/XhrRequest.js");


class Request {
    constructor(apiAiClient, options) {
        this.apiAiClient = apiAiClient;
        this.options = options;
        this.uri = this.apiAiClient.getApiBaseUrl() + "query?v=" + this.apiAiClient.getApiVersion();
        this.requestMethod = _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].Method.POST;
        this.headers = {
            Authorization: "Bearer " + this.apiAiClient.getAccessToken(),
        };
        this.options.lang = this.apiAiClient.getApiLang();
        this.options.sessionId = this.apiAiClient.getSessionId();
    }
    static handleSuccess(xhr) {
        return Promise.resolve(JSON.parse(xhr.responseText));
    }
    static handleError(xhr) {
        let error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](null);
        try {
            const serverResponse = JSON.parse(xhr.responseText);
            if (serverResponse.status && serverResponse.status.errorDetails) {
                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](serverResponse.status.errorDetails, serverResponse.status.code);
            }
            else {
                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](xhr.statusText, xhr.status);
            }
        }
        catch (e) {
            error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](xhr.statusText, xhr.status);
        }
        return Promise.reject(error);
    }
    perform(overrideOptions = null) {
        const options = overrideOptions ? overrideOptions : this.options;
        return _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(this.requestMethod, this.uri, options, this.headers)
            .then(Request.handleSuccess.bind(this))
            .catch(Request.handleError.bind(this));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Request);


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/TextRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/TextRequest.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextRequest; });
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./node_modules/api-ai-javascript/es6/Request/Request.js");

class TextRequest extends _Request__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/XhrRequest.js":
/*!**********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/XhrRequest.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * quick ts implementation of example from
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * with some minor improvements
 * @todo: test (?)
 * @todo: add node.js implementation with node's http inside. Just to make SDK cross-platform
 */
class XhrRequest {
    // Method that performs the ajax request
    static ajax(method, url, args = null, headers = null, options = {}) {
        // Creating a promise
        return new Promise((resolve, reject) => {
            // Instantiates the XMLHttpRequest
            const client = XhrRequest.createXMLHTTPObject();
            let uri = url;
            let payload = null;
            // Add given payload to get request
            if (args && (method === XhrRequest.Method.GET)) {
                uri += "?";
                let argcount = 0;
                for (const key in args) {
                    if (args.hasOwnProperty(key)) {
                        if (argcount++) {
                            uri += "&";
                        }
                        uri += encodeURIComponent(key) + "=" + encodeURIComponent(args[key]);
                    }
                }
            }
            else if (args) {
                if (!headers) {
                    headers = {};
                }
                headers["Content-Type"] = "application/json; charset=utf-8";
                payload = JSON.stringify(args);
            }
            for (const key in options) {
                if (key in client) {
                    client[key] = options[key];
                }
            }
            // hack: method[method] is somewhat like .toString for enum Method
            // should be made in normal way
            client.open(XhrRequest.Method[method], uri, true);
            // Add given headers
            if (headers) {
                for (const key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        client.setRequestHeader(key, headers[key]);
                    }
                }
            }
            payload ? client.send(payload) : client.send();
            client.onload = () => {
                if (client.status >= 200 && client.status < 300) {
                    // Performs the function "resolve" when this.status is equal to 2xx
                    resolve(client);
                }
                else {
                    // Performs the function "reject" when this.status is different than 2xx
                    reject(client);
                }
            };
            client.onerror = () => {
                reject(client);
            };
        });
    }
    static get(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.GET, url, payload, headers, options);
    }
    static post(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.POST, url, payload, headers, options);
    }
    static put(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.PUT, url, payload, headers, options);
    }
    static delete(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.DELETE, url, payload, headers, options);
    }
    static createXMLHTTPObject() {
        let xmlhttp = null;
        for (const i of XhrRequest.XMLHttpFactories) {
            try {
                xmlhttp = i();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    }
}
XhrRequest.XMLHttpFactories = [
    () => new XMLHttpRequest(),
    () => new window["ActiveXObject"]("Msxml2.XMLHTTP"),
    () => new window["ActiveXObject"]("Msxml3.XMLHTTP"),
    () => new window["ActiveXObject"]("Microsoft.XMLHTTP")
];
(function (XhrRequest) {
    let Method;
    (function (Method) {
        Method[Method["GET"] = "GET"] = "GET";
        Method[Method["POST"] = "POST"] = "POST";
        Method[Method["PUT"] = "PUT"] = "PUT";
        Method[Method["DELETE"] = "DELETE"] = "DELETE";
    })(Method = XhrRequest.Method || (XhrRequest.Method = {}));
})(XhrRequest || (XhrRequest = {}));
/* harmony default export */ __webpack_exports__["default"] = (XhrRequest);


/***/ }),

/***/ "./src/app/constants/app.constants.ts":
/*!********************************************!*\
  !*** ./src/app/constants/app.constants.ts ***!
  \********************************************/
/*! exports provided: popUpTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popUpTime", function() { return popUpTime; });
var popUpTime = 5000;


/***/ }),

/***/ "./src/app/layout/coming-soon/coming-soon.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/coming-soon/coming-soon.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"soon-container \">\n    <div class=\"content \">\n      <div class=\"content-title text-center soon-title \">\n        <h1 class=\"stand-alone\">Coming Soon</h1>\n        <h3> Our website is under construction follow us for updates</h3>\n        <div class=\"button-container\">\n            <a href=\"https://www.facebook.com/Graceful-Beginnings-Doula-and-Lactation-Educator-2170529909700235/\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Connect with  us on Twitter\">\n              <i class=\"fab fa-facebook\"></i>\n            </a>\n            <a href=\"https://www.instagram.com/gracefulbeginningsraleigh/?utm_source=ig_profile_share&igshid=1t8ti4vur9am1&fbclid=IwAR2cyZZJWuQJQ6L9pXPRBVXNi_teLWczaf_yG7vJVCV7yKcXMmULueSndEI\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Connect with us on Instagram\">\n              <i class=\"fab fa-instagram\"></i>\n            </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/layout/coming-soon/coming-soon.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/coming-soon/coming-soon.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".soon-container {\n  background: rgba(0, 0, 0, 0.75);\n  height: 90vh; }\n\n.soon-title {\n  padding-top: 20vh;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbWluZy1zb29uL0M6XFxVc2Vyc1xccnJqb2hcXERvY3VtZW50c1xcSlNXYXJlXFxHcmFjZSBXZWJzaXRlIEZFL3NyY1xcYXBwXFxsYXlvdXRcXGNvbWluZy1zb29uXFxjb21pbmctc29vbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFnQztFQUNoQyxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21pbmctc29vbi9jb21pbmctc29vbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb29uLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IC43NSk7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuLnNvb24tdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHZoOyBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/coming-soon/coming-soon.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/coming-soon/coming-soon.component.ts ***!
  \*************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent() {
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
    };
    ComingSoonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coming-soon',
            template: __webpack_require__(/*! ./coming-soon.component.html */ "./src/app/layout/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon.component.scss */ "./src/app/layout/coming-soon/coming-soon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/layout/contact/contact.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/contact/contact.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\r\n        <div class=\"content row justify-content-center \">\r\n          <div class=\"content-title text-center col-8 \">\r\n            <h5 class=\"stand-alone\">Contact Me</h5>\r\n            <a>thegracefuldoula1@yahoo.com</a><br>\r\n            <a>(336-686-5859)</a>\r\n          </div>\r\n          <form [formGroup]=\"contactForm\" (ngSubmit)=sendMessage() class=\" row justify-content-center col-8 form-body\" >\r\n                <div class=\"col-10 form_input \">\r\n                        <div class=\"form-group \">\r\n                            <input formControlName=\"name\" type=\"text\" placeholder=\"Name\" class=\"form-control form-control-success\" />\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-10 form_input\">\r\n                        <div class=\"form-group \">\r\n                            <input formControlName=\"email\"type=\"text\" placeholder=\"Email\" class=\"form-control form-control-success\" />\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-10 form_input\">\r\n                        <div class=\"form-group \">\r\n                            <input formControlName=\"phonenumber\" type=\"text\" placeholder=\"Phone Number\" class=\"form-control form-control-success\" />\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-10\">\r\n                        <div class=\"form-group \">\r\n                                <textarea class=\"form-control\" placeholder=\"Tell Me What's On Your Mind...\" formControlName=\"message\" id=\"exampleFormControlTextarea5\" rows=\"3\"></textarea>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-12 text-center\">\r\n                        <button [disabled]=\"!contactForm.valid\"  placement=\"top\" ngbTooltip=\"Send Message\" \r\n                                class=\"btn btn-primary btn-icon btn-round\" type=\"submit\">\r\n                                <i class=\"now-ui-icons ui-1_send\"></i>\r\n                        </button>\r\n                </div>\r\n        </form>\r\n        </div>\r\n      </div>\r\n\r\n      <app-grace-notification></app-grace-notification>"

/***/ }),

/***/ "./src/app/layout/contact/contact.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/contact/contact.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var app_shared_grace_notification_grace_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/grace-notification/grace-notification.component */ "./src/app/shared/grace-notification/grace-notification.component.ts");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(globalservice) {
        this.globalservice = globalservice;
        this.alerts = {
            pass: {
                id: 1,
                type: 'success',
                strong: 'Message Delivered',
                message: 'Grace Will Contact You As Soon As Possible.',
                icon: 'ui-2_like'
            },
            fail: {
                id: 2,
                type: 'danger',
                strong: 'Oh snap!',
                message: 'Something Went Wrong.',
                icon: 'objects_support-17'
            }
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.createContactForm();
    };
    ContactComponent.prototype.createContactForm = function () {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            phonenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])
        });
    };
    ContactComponent.prototype.sendMessage = function () {
        var _this = this;
        this.contructSmsMessage();
        var sms = {
            message: this.sms_message,
            phone_number: '3366865859'
        };
        this.globalservice.send(sms).subscribe(function (data) {
            _this.nfComp.addAlert(_this.alerts.pass);
            _this.contactForm.reset();
        }, function (error) {
            _this.nfComp.addAlert(_this.alerts.fail);
        });
    };
    ContactComponent.prototype.contructSmsMessage = function () {
        this.name = this.contactForm.get('name').value;
        this.email = this.contactForm.get('email').value;
        this.phonenumber = this.contactForm.get('phonenumber').value;
        this.message = this.contactForm.get('message').value;
        this.sms_message =
            "\n    \n\n    Name: " + this.name + "\n\n    Email: " + this.email + "\n\n    Phone: " + this.phonenumber + "\n\n    Message: " + this.message + "\n    ";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(app_shared_grace_notification_grace_notification_component__WEBPACK_IMPORTED_MODULE_4__["GraceNotificationComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", app_shared_grace_notification_grace_notification_component__WEBPACK_IMPORTED_MODULE_4__["GraceNotificationComponent"])
    ], ContactComponent.prototype, "nfComp", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/layout/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/layout/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_services_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/layout/faq/faq.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/faq/faq.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container standout\">\r\n  <div class=\"content \">\r\n    <div class=\"content-title text-center \">\r\n      <h1 class=\"stand-alone\">FAQ</h1>\r\n      <h3>Answering Your Questions</h3>\r\n    </div>\r\n    <div class=\"content-body row justify-content-center \" >\r\n      <div class=\"row col-10 questions justify-content-center\">\r\n        <div *ngFor=\"let dialog of qna\" class=\"row justify-content-center\">\r\n          <div class=\"card-faq card col-11 text-center\">\r\n            <div class=\"card-header question-header\"><h3>Question</h3>{{dialog.question}}</div>\r\n            <div class=\"card-body \"><h5>Answer</h5>{{dialog.answer}}</div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/faq/faq.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/faq/faq.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/faq/faq.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/faq/faq.component.ts ***!
  \*********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
        this.qna = [
            {
                question: "WHO NEEDS A DOULA?",
                answer: "Anyone who is interested regardless of birth plan or outcome. We all need advocacy, support, information, and compassion!"
            },
            {
                question: "WHAT DOES A LABOR DOULA DO?",
                answer: "A doula is trained in childbirth and provides emotional physical and educational support to a mother who is expecting, in labor, or recently given birth. The purpose is to help women have a safe, memorable, and empowering birthing experience.\n       - americanpregnancy.org "
            },
            {
                question: "WHAT ARE THE BENEFITS TO HAVING A DOULA?",
                answer: "Cochran's Collaboration released a review of 21 studies of 15000 woman around the world a found the following benefits to having a doula: \n      - more likely to have a vaginal birth - less likely to have narcotics/epidural- more likely to have shorter labors - less likely to have a cesarean - more than a quarter were  less likely to be disastisfied with their birth- significantly less likely to feel a loss of control in labor -imprtoved breastfeeding- decreased postpartum depression"
            },
            {
                question: "DOES A DOULA REPLACE THE PARTNER OR MEDICAL PROVIDER?",
                answer: "Nope! As a doula I work with your partner and birth team. I refer to your doctor regarding all medical matters and refer you to healthcare professionals for additional support, assessment, prescriptions, or diagnosis where needed. I work with your birth partner to support them as well as you. No one can replace a husband in the birthing room! "
            }
        ];
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/layout/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/layout/faq/faq.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-gracenavbar></app-gracenavbar>\r\n\r\n<section class=\"layout\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n\r\n<app-chatbot></app-chatbot>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_gracenavbar_gracenavbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/gracenavbar/gracenavbar.component */ "./src/app/shared/gracenavbar/gracenavbar.component.ts");







var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        var browserRefresh = !router.navigated &&
            (this.router.url === '/contact' ||
                this.router.url === '/faq' ||
                this.router.url === '/coming-soon');
        if (browserRefresh) {
            this._transparent = false;
        }
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this.navbar.sidebarClose();
        if (!this._transparent) {
            navbar.classList.remove('navbar-transparent');
        }
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            var _location = _this.location.path();
            var transparent = _location === '/faq' ||
                _location === '/contact' ||
                _location === '/coming-soon';
            //_location = _location.split('/')[2];
            if (number > 150 || window.pageYOffset > 150) {
                navbar.classList.remove('navbar-transparent');
            }
            else if (!transparent) {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_gracenavbar_gracenavbar_component__WEBPACK_IMPORTED_MODULE_6__["GracenavbarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_gracenavbar_gracenavbar_component__WEBPACK_IMPORTED_MODULE_6__["GracenavbarComponent"])
    ], LayoutComponent.prototype, "navbar", void 0);
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], LayoutComponent);
    return LayoutComponent;
}());

//_location !== 'login' && this.location.path() !== '/nucleoicons'


/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.routing.module */ "./src/app/layout/layout.routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_gracenavbar_gracenavbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/gracenavbar/gracenavbar.component */ "./src/app/shared/gracenavbar/gracenavbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/layout/faq/faq.component.ts");
/* harmony import */ var app_shared_common_commonly_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/common/commonly.shared.module */ "./src/app/shared/common/commonly.shared.module.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/layout/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_grace_notification_grace_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/grace-notification/grace-notification.component */ "./src/app/shared/grace-notification/grace-notification.component.ts");
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ "./src/app/layout/coming-soon/coming-soon.component.ts");
/* harmony import */ var app_shared_chatbot_chatbot_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/chatbot/chatbot.module */ "./src/app/shared/chatbot/chatbot.module.ts");















var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _shared_gracenavbar_gracenavbar_component__WEBPACK_IMPORTED_MODULE_5__["GracenavbarComponent"],
                app_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                app_shared_grace_notification_grace_notification_component__WEBPACK_IMPORTED_MODULE_12__["GraceNotificationComponent"],
                _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_13__["ComingSoonComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                app_shared_common_commonly_shared_module__WEBPACK_IMPORTED_MODULE_9__["CommonlySharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                app_shared_chatbot_chatbot_module__WEBPACK_IMPORTED_MODULE_14__["ChatbotModule"]
            ],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout.routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/layout/faq/faq.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/layout/contact/contact.component.ts");
/* harmony import */ var _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coming-soon/coming-soon.component */ "./src/app/layout/coming-soon/coming-soon.component.ts");








var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"] },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
            { path: 'coming-soon', component: _coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_7__["ComingSoonComponent"] },
            { path: 'store', redirectTo: 'coming-soon', pathMatch: 'prefix' },
            { path: 'portal', redirectTo: 'coming-soon', pathMatch: 'prefix' },
            { path: '**', redirectTo: 'home', pathMatch: 'prefix' },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/chatbot/chatbot.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/chatbot/chatbot.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatbot-container row\">\n\n  <div *ngIf=\"open | async \" (change)=\"scrollToBottom(content)\" class=\"chatbot-content card col-md-6 col-lg-6 col-sm-12\">\n      <div class=\"card-header text-center \">\n        <h5>Chat Bot</h5>\n      </div>\n    <div #content class=\"message-content card-body \">\n      <div *ngFor=\"let mgs of messages | async \">\n          <div class=\"bot-message\" *ngIf=\"mgs.sender==='bot'\">\n            <div class=\"col-8 text-left\">\n                <div class=\"badge badge-primary message-badge\">\n                    {{mgs.content}}\n                </div>\n            </div>\n          </div>\n    \n          <div class=\" row justify-content-right  usr-message text-right\" *ngIf=\"mgs.sender==='usr'\">\n            <div class=\"col-4 unused\">unusedtext</div>\n            <div class=\"col-8\">\n              <div class=\"badge badge-success message-badge\">\n                  {{mgs.content}}\n              </div>\n            </div>\n          </div>\n    </div>\n  </div>\n\n    <div class=\"col-12 card-footer-custom\">\n      <form [formGroup]=\"sendForm\" (ngSubmit)=send(content)>\n        <input formControlName=\"message\" type=\"text\" placeholder=\"Ask the bot a question..\" class=\" col-12 form-control form-control-success\" />          \n      </form>\n    </div>\n\n  </div>\n\n  <div class=\"chatbot-controller col-8 text-right\">\n    <button (click)=\"toogleChatWindow()\" class=\"btn btn-primary btn-lg\" type=\"button\">Open Chat Bot</button>\n  </div>\n</div>\n\n\n\n\n\n<!-- <div class=\"messages-container\">\n  <div *ngFor=\"let mgs of messages | async \">\n    <div class=\"message-content\">\n      \n      <div class=\"bot-message\" *ngIf=\"mgs.sender==='bot'\">\n        <p>Bot: {{mgs.content}}</p>\n      </div>\n\n      <div class=\"usr-message\" *ngIf=\"mgs.sender==='usr'\">\n        <p>User: {{mgs.content}}</p>\n      </div>\n\n    </div>\n  </div>\n</div>\n<div class=\"messaage-form\">\n  <button (click)=\"send('hey')\"></button>\n</div> -->\n"

/***/ }),

/***/ "./src/app/shared/chatbot/chatbot.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/chatbot/chatbot.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jaGF0Ym90L2NoYXRib3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/chatbot/chatbot.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/chatbot/chatbot.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chatbot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatbot.service */ "./src/app/shared/chatbot/chatbot.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ChatbotComponent = /** @class */ (function () {
    function ChatbotComponent(chatService) {
        this.chatService = chatService;
        this.openBoolean = true;
        this.openSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.openBoolean);
    }
    ChatbotComponent.prototype.ngOnInit = function () {
        this.messages = this.chatService.convseration.asObservable();
        this.setOpen();
        this.createSendForm();
    };
    ChatbotComponent.prototype.createSendForm = function () {
        this.sendForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
        });
    };
    ChatbotComponent.prototype.send = function () {
        var mgs = this.sendForm.get('message').value;
        this.chatService.converse(mgs);
        this.messages = this.chatService.convseration.asObservable();
        this.sendForm.reset();
    };
    ChatbotComponent.prototype.setOpen = function () {
        this.openSubject.next(this.openBoolean);
        this.open = this.openSubject.asObservable();
    };
    ChatbotComponent.prototype.toogleChatWindow = function () {
        this.openBoolean = !this.openBoolean;
        this.setOpen();
    };
    ChatbotComponent.prototype.scrollToBottom = function (el) {
        console.log(el.scrollTop);
        console.log(el.scrollHeight);
        el.scrollTop = el.scrollHeight;
        console.log(el.scrollTop);
        console.log(el.scrollHeight);
    };
    ChatbotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatbot',
            template: __webpack_require__(/*! ./chatbot.component.html */ "./src/app/shared/chatbot/chatbot.component.html"),
            styles: [__webpack_require__(/*! ./chatbot.component.scss */ "./src/app/shared/chatbot/chatbot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chatbot_service__WEBPACK_IMPORTED_MODULE_2__["ChatbotService"]])
    ], ChatbotComponent);
    return ChatbotComponent;
}());



/***/ }),

/***/ "./src/app/shared/chatbot/chatbot.module.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/chatbot/chatbot.module.ts ***!
  \**************************************************/
/*! exports provided: ChatbotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotModule", function() { return ChatbotModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chatbot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatbot.component */ "./src/app/shared/chatbot/chatbot.component.ts");
/* harmony import */ var _chatbot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatbot.service */ "./src/app/shared/chatbot/chatbot.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ChatbotModule = /** @class */ (function () {
    function ChatbotModule() {
    }
    ChatbotModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_chatbot_component__WEBPACK_IMPORTED_MODULE_3__["ChatbotComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            exports: [_chatbot_component__WEBPACK_IMPORTED_MODULE_3__["ChatbotComponent"]],
            providers: [
                _chatbot_service__WEBPACK_IMPORTED_MODULE_4__["ChatbotService"]
            ]
        })
    ], ChatbotModule);
    return ChatbotModule;
}());



/***/ }),

/***/ "./src/app/shared/chatbot/chatbot.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/chatbot/chatbot.service.ts ***!
  \***************************************************/
/*! exports provided: ChatbotService, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotService", function() { return ChatbotService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api-ai-javascript/es6/ApiAiClient */ "./node_modules/api-ai-javascript/es6/ApiAiClient.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ChatbotService = /** @class */ (function () {
    function ChatbotService() {
        this.welcome = new Message('bot', "Welcome to my corner of the internet! Providing support to families throughout pregnancy is truly a passion of mine! As your doula and advocate my goal is to empower you with unbiased information, non-judgement encouragement, and professional support. I will always be respectful and inclusive as I guide you through this physical and emotional journey. Women with doulas report having a more positive childbirth experience as well as decrease in cesarean rate by 50%, the length of labor by 25%, and requests for epidural by 60%, (Source: Continuous Support for Women. Cochrane Database). I am trained with CAPPA and servicing the Raleigh, Triangle, and Wake County Areas.");
        this.prev_convo = [this.welcome];
        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dialogflow.angularBot;
        this.client = new api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__["ApiAiClient"]({
            accessToken: this.token
        });
        this.convseration = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.prev_convo);
    }
    ChatbotService.prototype.updateConversation = function (message) {
        this.prev_convo.push(message);
        this.convseration.next(this.prev_convo);
    };
    ChatbotService.prototype.converse = function (mgs) {
        var _this = this;
        this.updateConversation(new Message('usr', mgs));
        return this.client.textRequest(mgs).then(function (data) {
            var speech = data.result.fulfillment.speech;
            _this.updateConversation(new Message('bot', speech));
        });
    };
    ChatbotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatbotService);
    return ChatbotService;
}());

var Message = /** @class */ (function () {
    function Message(sender, content) {
        this.sender = sender;
        this.content = content;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer footer-default\">\r\n    <div class=\"container\">\r\n        <nav>\r\n            <ul>\r\n                <li>\r\n                    <a  [routerLink]=\"['/faq']\">\r\n                       FAQs\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/contact']\">\r\n                        Contact\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"copyright\">\r\n            &copy;\r\n            {{current | date: 'yyyy'}}, Created by JsWare\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.current = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/grace-notification/grace-notification.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/grace-notification/grace-notification.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\">\n  <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n      <div class=\"container\">\n          <div class=\"alert-wrapper\">\n              \n              <div class=\"message\">\n                  <ng-container *ngIf=\"alert.icon\">\n                    <div class=\"alert-icon\">\n                        <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                    </div>\n                  </ng-container>\n                  <strong>{{alert.strong}} </strong>{{ alert.message }}\n              </div>\n          </div>\n      </div>\n  </ngb-alert>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/grace-notification/grace-notification.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/grace-notification/grace-notification.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ncmFjZS1ub3RpZmljYXRpb24vZ3JhY2Utbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/grace-notification/grace-notification.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/grace-notification/grace-notification.component.ts ***!
  \***************************************************************************/
/*! exports provided: GraceNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraceNotificationComponent", function() { return GraceNotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/app.constants */ "./src/app/constants/app.constants.ts");



var GraceNotificationComponent = /** @class */ (function () {
    function GraceNotificationComponent() {
        this.alerts = [];
    }
    GraceNotificationComponent.prototype.ngOnInit = function () {
    };
    GraceNotificationComponent.prototype.addAlert = function (alert) {
        var _this = this;
        this.alerts.push(alert);
        setTimeout(function () {
            _this.closeAlert(alert);
        }, app_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["popUpTime"]);
    };
    GraceNotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    GraceNotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grace-notification',
            template: __webpack_require__(/*! ./grace-notification.component.html */ "./src/app/shared/grace-notification/grace-notification.component.html"),
            styles: [__webpack_require__(/*! ./grace-notification.component.scss */ "./src/app/shared/grace-notification/grace-notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraceNotificationComponent);
    return GraceNotificationComponent;
}());



/***/ }),

/***/ "./src/app/shared/gracenavbar/gracenavbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/gracenavbar/gracenavbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n  <div class=\"container\">\r\n    <div class=\"dropdown button-dropdown\">\r\n      <div ngbDropdown>\r\n        <a class=\"dropdown-toggle\" ngbDropdownToggle>\r\n            <span class=\"button-bar\"></span>\r\n            <span class=\"button-bar\"></span>\r\n            <span class=\"button-bar\"></span>\r\n        </a>\r\n         <div ngbDropdownMenu>\r\n           <a class=\"dropdown-header\">Navigation</a>\r\n           <div class=\"dropdown-divider\"></div>\r\n           <a class=\"dropdown-item\" [routerLink]=\"['/home']\">Home</a>\r\n           <div class=\"dropdown-divider\"></div>\r\n           <a class=\"dropdown-item\" [routerLink]=\"['/store']\">Store</a>\r\n           <div class=\"dropdown-divider\"></div>\r\n           <a class=\"dropdown-item\" [routerLink]=\"['/portal']\">Client Portal</a>\r\n         </div>\r\n       </div>\r\n    </div>\r\n      <div class=\"navbar-translate\">\r\n          <a class=\"navbar-brand\" [routerLink]=\"['/home']\"placement=\"bottom\" ngbTooltip=\"Home\">\r\n              The Graceful Doula\r\n          </a>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n              <span class=\"navbar-toggler-bar bar1\"></span>\r\n              <span class=\"navbar-toggler-bar bar2\"></span>\r\n              <span class=\"navbar-toggler-bar bar3\"></span>\r\n          </button>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n          <ul class=\"navbar-nav ml-auto\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" rel=\"tooltip\" title=\"Store\" data-placement=\"bottom\" [routerLink]=\"['/store']\" >\r\n                  <i class=\" now-ui-icons  shopping_shop\"></i>\r\n                  <p class=\"d-lg-none d-xl-none\">Store</p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Client Portal\" data-placement=\"bottom\" [routerLink]=\"['/portal']\">\r\n                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                    <p class=\"d-lg-none d-xl-none\">Client Portal</p>\r\n                  </a>\r\n                </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" rel=\"tooltip\" title=\"Connect with us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/Graceful-Beginnings-Doula-and-Lactation-Educator-2170529909700235/\" target=\"_blank\">\r\n                  <i class=\"fab fa-facebook-square\"></i>\r\n                  <p class=\"d-lg-none d-xl-none\">Facebook</p>\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" rel=\"tooltip\" title=\"Connect with  us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/gracefulbeginningsraleigh/?utm_source=ig_profile_share&igshid=1t8ti4vur9am1&fbclid=IwAR2cyZZJWuQJQ6L9pXPRBVXNi_teLWczaf_yG7vJVCV7yKcXMmULueSndEI\" target=\"_blank\">\r\n                  <i class=\"fab fa-instagram\"></i>\r\n                  <p class=\"d-lg-none d-xl-none\">Instagram</p>\r\n                </a>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/gracenavbar/gracenavbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/gracenavbar/gracenavbar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ncmFjZW5hdmJhci9ncmFjZW5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/gracenavbar/gracenavbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/gracenavbar/gracenavbar.component.ts ***!
  \*************************************************************/
/*! exports provided: GracenavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GracenavbarComponent", function() { return GracenavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var GracenavbarComponent = /** @class */ (function () {
    function GracenavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    GracenavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    GracenavbarComponent.prototype.sidebarOpen = function () {
        // const toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            //  toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    GracenavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        //this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    GracenavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    GracenavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    GracenavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gracenavbar',
            template: __webpack_require__(/*! ./gracenavbar.component.html */ "./src/app/shared/gracenavbar/gracenavbar.component.html"),
            styles: [__webpack_require__(/*! ./gracenavbar.component.scss */ "./src/app/shared/gracenavbar/gracenavbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], GracenavbarComponent);
    return GracenavbarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map