(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GoogleApi"] = factory();
	else
		root["GoogleApi"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _google = __webpack_require__(1);

var _google2 = _interopRequireDefault(_google);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _google2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _maps = __webpack_require__(2);

var _maps2 = _interopRequireDefault(_maps);

var _autocomplete = __webpack_require__(3);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _places = __webpack_require__(4);

var _places2 = _interopRequireDefault(_places);

var _search = __webpack_require__(5);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Google = function () {
    function Google() {
        _classCallCheck(this, Google);
    }

    _createClass(Google, null, [{
        key: 'Size',


        // constructor(){
        //     this.Maps = Maps;
        //     this.Places = Places;
        //     this.Autocomplete = Autocomplete;
        //     this.search = search;
        //
        //     return this;
        // }

        value: function Size(w, h, wunit, hunit) {
            return new google.maps.Size(w, h, wunit, hunit);
        }
    }]);

    return Google;
}();

Google.Maps = _maps2.default;
Google.Places = _places2.default;
Google.Autocomplete = _autocomplete2.default;
Google.search = _search2.default;
exports.default = Google;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mapDefaults = {};

var markerDefaults = {};

var Maps = function () {
    function Maps(ele) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mapDefaults;

        _classCallCheck(this, Maps);

        this.markers = [];

        if (ele && options) {
            this.createMap(ele, options);
        }

        return this;
    }

    _createClass(Maps, [{
        key: "createMap",
        value: function createMap(ele) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mapDefaults;

            this.mapElm = ele;
            this.options = options;

            this.setMap(new google.maps.Map(this.mapElm, this.options));

            return this.map;
        }
    }, {
        key: "setMap",
        value: function setMap(map) {
            this.map = map;
        }
    }, {
        key: "clearMap",
        value: function clearMap() {
            this.mapElm.parentNode.removeChild(this.mapElm);
            this.map = null;
        }
    }, {
        key: "latLngBounds",
        value: function latLngBounds(se, nw) {
            return new google.maps.LatLngBounds(se, nw);
        }
    }, {
        key: "latLng",
        value: function latLng(lat, lng) {
            return new google.maps.LatLng(lat, lng);
        }
    }, {
        key: "addMarker",
        value: function addMarker(result, options, map) {
            var mapObj = void 0,
                markerArray = void 0,
                markerOptions = void 0,
                marker = void 0,
                labelOptions = void 0,
                currentMarkers = this.markers;

            if (!map && this.map) {
                mapObj = this.map;
            } else if (map) {
                this.setMap(map);
                this.addMarker(options);
            }

            var label = options.label;


            if (typeof label === "string") {
                // If label is a string, use the string as the label text
                labelOptions = _extends({
                    text: label
                }, markerDefaults.label);
            } else if ((typeof label === "undefined" ? "undefined" : _typeof(label)) === "object" && !Array.isArray(label)) {
                // Otherwise if label is an object, merge with the default configuration
                labelOptions = _extends({}, label, markerDefaults.label);
            } else {
                // Otherwise, use the default options
                labelOptions = _extends({}, markerDefaults.label);
            }

            markerOptions = _extends({}, markerDefaults, options, { label: _extends({}, labelOptions) });

            marker = new google.maps.Marker(markerOptions);

            marker.setPlace({
                location: result.geometry.location,
                placeId: result.id
            });

            markerArray = currentMarkers.concat(marker);

            this.markers = markerArray;
        }
    }, {
        key: "point",
        value: function point(x, y) {
            return new google.maps.Point(x, y);
        }
    }, {
        key: "dropMarker",
        value: function dropMarker(i) {
            var that = this;
            i = !i ? 0 : i;
            return function () {
                that.markers[i].setMap(that.map);
            };
        }
    }, {
        key: "dropAllMarkers",
        value: function dropAllMarkers() {
            var that = this;
            that.markers.forEach(function (v, k) {
                setTimeout(that.dropMarker(k), 100 * k);
            });
        }
    }, {
        key: "clearMarkers",
        value: function clearMarkers() {
            this.markers.forEach(function (v) {
                v.setMap(null);
            });

            this.markers = [];
        }
    }, {
        key: "clearMarker",
        value: function clearMarker(id) {
            var marker = this.markers.reduce(function (acc, val) {
                if (val.id === id) {
                    acc = val;
                }

                return acc;
            }, {});

            var filteredMarkers = this.markers.filter(function (v) {
                return v.id !== id;
            });

            marker.setMap(null);

            this.markers = filteredMarkers;
        }
    }, {
        key: "drawSearchRadius",
        value: function drawSearchRadius(options, location) {
            var map = this.map;
            var defaultOptions = {
                map: map
            };
            var center = location || map.getCenter();
            var circle = new google.maps.Circle(_extends({}, defaultOptions, options));
        }
    }]);

    return Maps;
}();

exports.default = Maps;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {};

var Autocomplete = function () {
    function Autocomplete(inputElm, options) {
        _classCallCheck(this, Autocomplete);

        var autocompleteOptions = _extends({}, defaultOptions, options);
        var node = void 0;

        if (inputElm) {
            if (typeof inputElm === "string") {
                node = document.getElementById(inputElm);
            } else {
                node = inputElm;
            }
            this.createAutocomplete(node, autocompleteOptions);
        } else {
            this.options = autocompleteOptions;
        }

        // this.getAutocomplete = this.getAutocomplete.bind(this);
        // this.addListener = this.addListener.bind(this);
        // this.getPlace = this.getPlace.bind(this);

        return this;
    }

    _createClass(Autocomplete, [{
        key: "createAutocomplete",
        value: function createAutocomplete(inputElm, options) {
            if (!inputElm) {
                throw new Error('input element required');
            }

            this.inputElm = inputElm;
            // some options are set in constructor so if options are passed, merge the options with the current options
            this.options = this.options ? _extends({}, this.options, options) : options;
            this.autocomplete = new google.maps.places.Autocomplete(inputElm, this.options);

            return this.autocomplete;
        }
    }, {
        key: "addListener",
        value: function addListener(event, callback) {
            return this.autocomplete.addListener(event, callback);
        }
    }, {
        key: "getPlace",
        value: function getPlace() {
            return this.autocomplete.getPlace();
        }
    }]);

    return Autocomplete;
}();

exports.default = Autocomplete;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {};

var Places = function Places(map) {
    _classCallCheck(this, Places);

    this.places = new google.maps.places.PlacesService(map);
};

exports.default = Places;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {};

var Search = function Search() {
    _classCallCheck(this, Search);
};

exports.default = Search;

/***/ })
/******/ ]);
});
//# sourceMappingURL=GoogleApi.js.map