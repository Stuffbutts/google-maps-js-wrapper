!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.GoogleApi=t():e.GoogleApi=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=r.default},function(e,t,n){n(0),e.exports=n(0)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=o(a),u=n(4),s=o(u),l=n(5),c=o(l),f=n(6),p=o(f),d=function e(){r(this,e),this.Maps=i.default,this.Places=c.default,this.Autocomplete=s.default,this.search=p.default},h=new d;t.default=h},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u={},s={},l=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;o(this,e),this.markers=[],t&&n&&this.createMap(t,n)}return i(e,[{key:"createMap",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;this.mapElm=e,this.options=t,this.setMap(new google.maps.Map(this.mapElm,this.options))}},{key:"setMap",value:function(e){this.map=e}},{key:"clearMap",value:function(){this.mapElm.parentNode.removeChild(this.mapElm),this.map=null}},{key:"latLngBounds",value:function(e,t){return new google.maps.LatLngBounds(e,t)}},{key:"latLng",value:function(e,t){return new google.maps.LatLng(e,t)}},{key:"addMarker",value:function(e,t,n){var o=void 0,i=void 0,u=void 0,l=void 0,c=this.markers;!n&&this.map?this.map:n&&(this.setMap(n),this.addMarker(t));var f=t.label;l="string"==typeof f?a({text:f},s.label):"object"!==(void 0===f?"undefined":r(f))||Array.isArray(f)?a({},s.label):a({},f,s.label),i=a({},s,t,{label:a({},l)}),u=new google.maps.Marker(i),u.setPlace({location:e.geometry.location,placeId:e.id}),o=c.concat(u),this.markers=o}},{key:"dropMarker",value:function(e){var t=this;return e=e||0,function(){t.markers[e].setMap(t.map)}}},{key:"dropAllMarkers",value:function(){var e=this;e.markers.forEach(function(t,n){setTimeout(e.dropMarker(n),100*n)})}},{key:"clearMarkers",value:function(){this.markers.forEach(function(e){e.setMap(null)}),this.markers=[]}},{key:"clearMarker",value:function(e){var t=this.markers.reduce(function(t,n){return n.id===e&&(t=n),t},{}),n=this.markers.filter(function(t){return t.id!==e});t.setMap(null),this.markers=n}},{key:"drawSearchRadius",value:function(e,t){var n=this.map,o={map:n};t||n.getCenter(),new google.maps.Circle(a({},o,e))}}]),e}();t.default=l},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i={},u=function(){function e(t,n){o(this,e);var a=r({},i,n);t?this.createAutocomplete(t,a):this.options=a}return a(e,[{key:"createAutocomplete",value:function(e,t){if(!e)throw new Error("input element required");this.inputElm=e,this.options=this.options?r({},this.options,t):t,this.autocomplete=new google.maps.places.Autocomplete(e,this.options)}},{key:"addListener",value:function(e,t){this.autocomplete.addListener(e,t)}},{key:"getPlace",value:function(){return this.autocomplete.getPlace()}}]),e}();t.default=u},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t){o(this,e),this.places=new google.maps.places.PlacesService(t)};t.default=r},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(){o(this,e)};t.default=r}])});