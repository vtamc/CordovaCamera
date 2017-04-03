(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = exports.Camera = function Camera() {
    _classCallCheck(this, Camera);
};

},{}],2:[function(require,module,exports){
'use strict';

var _camera = require('./camera');

var app = {
    // Application Constructor
    initialize: function initialize() {
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

        document.querySelector('.take_picture').addEventListener('click', function () {

            var success = function success(data) {

                var imageContainer = document.querySelector('.image');

                imageContainer.style.backgroundImage = "url(data:image/jpeg;base64," + data + ")";
            };

            var error = function error() {
                console.log('error');
            };

            var options = {
                destinationType: navigator.camera.DestinationType.DATA_URL,
                sourceType: navigator.camera.PictureSourceType.CAMERA
            };

            navigator.camera.getPicture(success, error, options);
        });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function onDeviceReady() {}
}; /*
    * Licensed to the Apache Software Foundation (ASF) under one
    * or more contributor license agreements.  See the NOTICE file
    * distributed with this work for additional information
    * regarding copyright ownership.  The ASF licenses this file
    * to you under the Apache License, Version 2.0 (the
    * "License"); you may not use this file except in compliance
    * with the License.  You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing,
    * software distributed under the License is distributed on an
    * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    * KIND, either express or implied.  See the License for the
    * specific language governing permissions and limitations
    * under the License.
    */

app.initialize();

},{"./camera":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2FtZXJhLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7SUNDYSxNLFdBQUEsTTs7Ozs7OztBQ2tCYjs7QUFFQSxJQUFJLE1BQU07QUFDTjtBQUNBLGdCQUFZLHNCQUFXO0FBQ25COztBQUVBLGlCQUFTLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFLFlBQU07O0FBRXBFLGdCQUFJLFVBQVUsU0FBVixPQUFVLENBQUMsSUFBRCxFQUFVOztBQUVwQixvQkFBSSxpQkFBaUIsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQXJCOztBQUVBLCtCQUFlLEtBQWYsQ0FBcUIsZUFBckIsR0FBdUMsZ0NBQWdDLElBQWhDLEdBQXVDLEdBQTlFO0FBQ0gsYUFMRDs7QUFPQSxnQkFBSSxRQUFRLFNBQVIsS0FBUSxHQUFNO0FBQ2Qsd0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDSCxhQUZEOztBQUlBLGdCQUFJLFVBQVU7QUFDVixpQ0FBaUIsVUFBVSxNQUFWLENBQWlCLGVBQWpCLENBQWlDLFFBRHhDO0FBRVYsNEJBQVksVUFBVSxNQUFWLENBQWlCLGlCQUFqQixDQUFtQztBQUZyQyxhQUFkOztBQUtBLHNCQUFVLE1BQVYsQ0FBaUIsVUFBakIsQ0FBNEIsT0FBNUIsRUFBcUMsS0FBckMsRUFBNEMsT0FBNUM7QUFDSCxTQW5CRDtBQW9CSCxLQXpCSzs7QUEyQk47QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBZSx5QkFBVyxDQUd6QjtBQWxDSyxDQUFWLEMsQ0FyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBSSxVQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuZXhwb3J0IGNsYXNzIENhbWVyYSB7XG4gICAgXG59IiwiLypcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICcuL2NhbWVyYSc7XG5cbnZhciBhcHAgPSB7XG4gICAgLy8gQXBwbGljYXRpb24gQ29uc3RydWN0b3JcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VyZWFkeScsIHRoaXMub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpLCBmYWxzZSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRha2VfcGljdHVyZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgc3VjY2VzcyA9IChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKGRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgKyBkYXRhICsgXCIpXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25UeXBlOiBuYXZpZ2F0b3IuY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5EQVRBX1VSTCxcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBuYXZpZ2F0b3IuY2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2FtZXJhLmdldFBpY3R1cmUoc3VjY2VzcywgZXJyb3IsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxuICAgIC8vXG4gICAgLy8gQmluZCBhbnkgY29yZG92YSBldmVudHMgaGVyZS4gQ29tbW9uIGV2ZW50cyBhcmU6XG4gICAgLy8gJ3BhdXNlJywgJ3Jlc3VtZScsIGV0Yy5cbiAgICBvbkRldmljZVJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgXG5cbiAgICB9XG59O1xuXG5hcHAuaW5pdGlhbGl6ZSgpOyJdfQ==
