;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var atropa = {};

/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>

/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global XPathResult */
// end header

/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa;
atropa = {};
/**
 * Checks whether this class has been marked as unsupported and throws an 
 *  error if it has.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130308
 * @param {String} className The name of the class.
 * @param {String} errorMessage Optional. A custom error message. Defaults to
 *  atropa.data[className].error
 */
atropa.supportCheck = function (className, errorMessage) {
    "use strict";
    className = String(className);
    errorMessage = errorMessage || atropa.data[className].error;
    errorMessage = String(errorMessage);
    
    if(atropa.data[className].support === 'unsupported') {
        throw new Error(errorMessage);
    }
};
/**
 * Pushes a requirement check into atropa.data.requirements. The test
 *  tests whether the class is supported in this environment. Sets
 *  atropa.data[className]'s support to unsupported and error to errorMessage
 *  if the requirementFn returns false. The requirement checks will all be run
 *  after the library has loaded.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130308
 * @param {String} className The name of the class.
 * @param {Function} requirementFn A function to test whether or not the class
 *  is supported in this environment. If supported, returns true otherwise
 *  return false.
 * @param {String} errorMessage The error message to use when this class or its
 *  methods are called in unsupported environments. Defaults to:
 *  'The atropa.' + className + ' class is unsupported in this environment.';
 */
atropa.requires = function (className, requirementFn, errorMessage) {
    "use strict";
    var check = function () {
        var test = false;
        if(typeof className !== 'string') {
            throw new Error('atropa.requires requires the class name to be ' +
                'specified');
        }
        
        if(atropa.data[className] === undefined) {
            atropa.data[className] = {};
            
            if(typeof requirementFn !== 'function') {
                requirementFn = false;
            }
            errorMessage = errorMessage || 'The atropa.' + className +
                    ' class is unsupported in this environment.';
            try {
                test = requirementFn();
            } catch (e) {
                test = false;
            }
            
            atropa.data[className].error = errorMessage;
            
            if(test === false) {
                atropa.data[className].support = 'unsupported';
            }
        }
    };
    
    atropa.data.requirements.push(check);
};
/**
 * Container for gobal data related to the classes and functions.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for gobal data related to the classes and functions.
 */
atropa.data = {};

atropa.data.requirements = [];

atropa.nop = function nop () {
    "use strict";
    return null;
};
module.exports = atropa;


},{}],2:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Set default values for optional function parameters.
 * @example
 * <pre>
 *   // To set a default value for an optional parameter
 *   function(optionalArg) {
 *       var defaultVal = 'hello there!';
 *       optionalArg = atropa.setAsOptionalArg(defaultVal, optionalArg);
 *       return optionalArg;
 *   }
 * </pre>
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} defaultVal The default value to set.
 * @param {Mixed} optionalArg A reference to the optional argument.
 * @returns {Mixed} Returns the default value supplied when the optional
 * argument is undefined or null. Otherwise, the supplied optional argument
 * is returned.
 */
atropa.setAsOptionalArg = function (defaultVal, optionalArg) {
    "use strict";
    if (optionalArg === undefined || optionalArg === null) {
        optionalArg = defaultVal;
    }
    return optionalArg;
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":1}],3:[function(require,module,exports){
var waitFor = require('../src/atropa-waitFor.js');

try {
    Object.keys(waitFor).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = waitFor[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-waitFor.js');
}

Object.keys(waitFor.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = waitFor.data[prop];
    }
);

},{"../src/atropa-waitFor.js":4}],4:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/**
 * Required module, the docs for it are in the <code>
 *  atropa-setAsOptionalArg/docs</code> directory where this module 
 *  is located.
 * @see <a href="../../../node_modules/atropa-setAsOptionalArg/docs/jsdoc/index.html">
 * ../../../node_modules/atropa-setAsOptionalArg/docs/jsdoc/index.html</a>,
 *  unless you installed this dependency manually.
 */
atropa.setAsOptionalArg = require('atropa-setAsOptionalArg').setAsOptionalArg;
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Polling functions for quick and sloppy work.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace Polling functions for quick and sloppy work.
 */
atropa.waitFor = {};
/**
 * Generic Wait for true.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Function} testFn A function to tell when the wait is over. Must
 *  return true on success, false on failure.
 * @param {Function} onSuccessCallback Optional. The function to run when testFn
 *  returns true. Defaults to <code>function () {} </code>
 * @param {function} onMaxPollCallback Optional. The function to run when testFn
 *  has been run maxPoll times and the wait is being given up.
 * Defaults to <code>function () {}</code>
 * @param {Integer} pollInterval Optional. The amount of time in ms between
 *  polling testFn to see if it returns true. Defaults to 200ms.
 * @param {Integer} maxPoll Optional. The quantity of polls at which it makes
 *  sense to give up waiting. Defaults to 50.
 */
atropa.waitFor.test = function test(
    testFn, onSuccessCallback, onMaxPollCallback, pollInterval, maxPoll
) {
    "use strict";
    pollInterval = atropa.setAsOptionalArg(200, pollInterval);
    maxPoll = atropa.setAsOptionalArg(50, maxPoll);
    onMaxPollCallback = atropa.setAsOptionalArg(atropa.nop, onMaxPollCallback);
    onSuccessCallback = atropa.setAsOptionalArg(atropa.nop, onSuccessCallback);
    var myInt;
    var myCounter = 0;
    function waitForTestRecursor () {
        myCounter++;
        if (testFn()) {
            clearInterval(myInt);
            onSuccessCallback();
        }
        if (myCounter === maxPoll) {
            clearInterval(myInt);
            onMaxPollCallback();
        }
    }
    myInt = setInterval(waitForTestRecursor, pollInterval);
};
/**
 * Wait for Element
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Function} testFn A function which returns a reference to an HTML
 *  Element.
 * @param {Function} Optional. onSuccessCallback
 * @param {function} Optional. onMaxPollCallback 
 * @param {Integer} Optional. pollInterval
 * @param {Integer} Optional. maxPoll
 * @see atropa.waitFor.test for more information and default values for the
 *  optional parameters.
 */
atropa.waitFor.element = function (
    testFn, onSuccessCallback, onMaxPollCallback, pollInterval, maxPoll
) {
    "use strict";
    /**
     * Creates an HTML DOM Document and puts it in the document
     * queue, then executes the callback given.
     * @author <a href="mailto:matthewkastor@gmail.com">
     *  Matthew Christopher Kastor-Inare III </a><br />
     *  ☭ Hial Atropa!! ☭
     * @version 20120909
     * @methodOf atropa.waitFor.element-
     * @private
     * @returns {Boolean} Returns true or false depending on whether the object
     *  has a tag name property.
     */
    function elementTest () {
        return atropa.inquire.hasProperty(testFn(), 'tagName');
    }
    atropa.waitFor.test(
        elementTest, onSuccessCallback, onMaxPollCallback, pollInterval, maxPoll
    );
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":1,"atropa-setAsOptionalArg":2}]},{},[3])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcZXhwZXJpbWVudHNcXGF0cm9wYS1jb21wb25lbnRzXFxub2RlX21vZHVsZXNcXGF0cm9wYS1oZWFkZXJcXHNyY1xcYXRyb3BhLWhlYWRlci5qcyIsIkM6XFxVc2Vyc1xca2FzdG9yXFxEZXNrdG9wXFxleHBlcmltZW50c1xcYXRyb3BhLWNvbXBvbmVudHNcXG5vZGVfbW9kdWxlc1xcYXRyb3BhLXNldEFzT3B0aW9uYWxBcmdcXHNyY1xcYXRyb3BhLXNldEFzT3B0aW9uYWxBcmcuanMiLCJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcZXhwZXJpbWVudHNcXGF0cm9wYS1jb21wb25lbnRzXFxub2RlX21vZHVsZXNcXGF0cm9wYS13YWl0Rm9yXFxkZXZcXGJyb3dzZXJNYWluLmpzIiwiQzpcXFVzZXJzXFxrYXN0b3JcXERlc2t0b3BcXGV4cGVyaW1lbnRzXFxhdHJvcGEtY29tcG9uZW50c1xcbm9kZV9tb2R1bGVzXFxhdHJvcGEtd2FpdEZvclxcc3JjXFxhdHJvcGEtd2FpdEZvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBhdHJvcGEgPSB7fTtcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9kb2NzL3ZzZG9jL09wZW5MYXllcnNBbGwuanNcIi8+XHJcblxyXG4vKmpzbGludFxyXG4gICAgaW5kZW50OiA0LFxyXG4gICAgbWF4ZXJyOiA1MCxcclxuICAgIHdoaXRlOiB0cnVlLFxyXG4gICAgYnJvd3NlcjogdHJ1ZSxcclxuICAgIGRldmVsOiB0cnVlLFxyXG4gICAgcGx1c3BsdXM6IHRydWUsXHJcbiAgICByZWdleHA6IHRydWVcclxuKi9cclxuLypnbG9iYWwgWFBhdGhSZXN1bHQgKi9cclxuLy8gZW5kIGhlYWRlclxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICovXHJcbnZhciBhdHJvcGE7XHJcbmF0cm9wYSA9IHt9O1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhpcyBjbGFzcyBoYXMgYmVlbiBtYXJrZWQgYXMgdW5zdXBwb3J0ZWQgYW5kIHRocm93cyBhbiBcclxuICogIGVycm9yIGlmIGl0IGhhcy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMzA4XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgVGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JNZXNzYWdlIE9wdGlvbmFsLiBBIGN1c3RvbSBlcnJvciBtZXNzYWdlLiBEZWZhdWx0cyB0b1xyXG4gKiAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5lcnJvclxyXG4gKi9cclxuYXRyb3BhLnN1cHBvcnRDaGVjayA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBjbGFzc05hbWUgPSBTdHJpbmcoY2xhc3NOYW1lKTtcclxuICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSB8fCBhdHJvcGEuZGF0YVtjbGFzc05hbWVdLmVycm9yO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gU3RyaW5nKGVycm9yTWVzc2FnZSk7XHJcbiAgICBcclxuICAgIGlmKGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uc3VwcG9ydCA9PT0gJ3Vuc3VwcG9ydGVkJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUHVzaGVzIGEgcmVxdWlyZW1lbnQgY2hlY2sgaW50byBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMuIFRoZSB0ZXN0XHJcbiAqICB0ZXN0cyB3aGV0aGVyIHRoZSBjbGFzcyBpcyBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4gU2V0c1xyXG4gKiAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXSdzIHN1cHBvcnQgdG8gdW5zdXBwb3J0ZWQgYW5kIGVycm9yIHRvIGVycm9yTWVzc2FnZVxyXG4gKiAgaWYgdGhlIHJlcXVpcmVtZW50Rm4gcmV0dXJucyBmYWxzZS4gVGhlIHJlcXVpcmVtZW50IGNoZWNrcyB3aWxsIGFsbCBiZSBydW5cclxuICogIGFmdGVyIHRoZSBsaWJyYXJ5IGhhcyBsb2FkZWQuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDMwOFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVxdWlyZW1lbnRGbiBBIGZ1bmN0aW9uIHRvIHRlc3Qgd2hldGhlciBvciBub3QgdGhlIGNsYXNzXHJcbiAqICBpcyBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4gSWYgc3VwcG9ydGVkLCByZXR1cm5zIHRydWUgb3RoZXJ3aXNlXHJcbiAqICByZXR1cm4gZmFsc2UuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlcnJvck1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhpcyBjbGFzcyBvciBpdHNcclxuICogIG1ldGhvZHMgYXJlIGNhbGxlZCBpbiB1bnN1cHBvcnRlZCBlbnZpcm9ubWVudHMuIERlZmF1bHRzIHRvOlxyXG4gKiAgJ1RoZSBhdHJvcGEuJyArIGNsYXNzTmFtZSArICcgY2xhc3MgaXMgdW5zdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4nO1xyXG4gKi9cclxuYXRyb3BhLnJlcXVpcmVzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgcmVxdWlyZW1lbnRGbiwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGVzdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHR5cGVvZiBjbGFzc05hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXRyb3BhLnJlcXVpcmVzIHJlcXVpcmVzIHRoZSBjbGFzcyBuYW1lIHRvIGJlICcgK1xyXG4gICAgICAgICAgICAgICAgJ3NwZWNpZmllZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihhdHJvcGEuZGF0YVtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodHlwZW9mIHJlcXVpcmVtZW50Rm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVtZW50Rm4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgfHwgJ1RoZSBhdHJvcGEuJyArIGNsYXNzTmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJyBjbGFzcyBpcyB1bnN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50Lic7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gcmVxdWlyZW1lbnRGbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uZXJyb3IgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0ZXN0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5zdXBwb3J0ID0gJ3Vuc3VwcG9ydGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wdXNoKGNoZWNrKTtcclxufTtcclxuLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgZ29iYWwgZGF0YSByZWxhdGVkIHRvIHRoZSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgZ29iYWwgZGF0YSByZWxhdGVkIHRvIHRoZSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5hdHJvcGEuZGF0YSA9IHt9O1xyXG5cclxuYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzID0gW107XHJcblxyXG5hdHJvcGEubm9wID0gZnVuY3Rpb24gbm9wICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG5cclxuIiwiLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICovXHJcbnZhciBhdHJvcGEgPSByZXF1aXJlKCdhdHJvcGEtaGVhZGVyJyk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9kb2NzL3ZzZG9jL09wZW5MYXllcnNBbGwuanNcIi8+XHJcbi8qanNsaW50XHJcbiAgICBpbmRlbnQ6IDQsXHJcbiAgICBtYXhlcnI6IDUwLFxyXG4gICAgd2hpdGU6IHRydWUsXHJcbiAgICBicm93c2VyOiB0cnVlLFxyXG4gICAgZGV2ZWw6IHRydWUsXHJcbiAgICBwbHVzcGx1czogdHJ1ZSxcclxuICAgIHJlZ2V4cDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbCBhdHJvcGEgKi9cclxuLy8gZW5kIGhlYWRlclxyXG5cclxuLyoqXHJcbiAqIFNldCBkZWZhdWx0IHZhbHVlcyBmb3Igb3B0aW9uYWwgZnVuY3Rpb24gcGFyYW1ldGVycy5cclxuICogQGV4YW1wbGVcclxuICogPHByZT5cclxuICogICAvLyBUbyBzZXQgYSBkZWZhdWx0IHZhbHVlIGZvciBhbiBvcHRpb25hbCBwYXJhbWV0ZXJcclxuICogICBmdW5jdGlvbihvcHRpb25hbEFyZykge1xyXG4gKiAgICAgICB2YXIgZGVmYXVsdFZhbCA9ICdoZWxsbyB0aGVyZSEnO1xyXG4gKiAgICAgICBvcHRpb25hbEFyZyA9IGF0cm9wYS5zZXRBc09wdGlvbmFsQXJnKGRlZmF1bHRWYWwsIG9wdGlvbmFsQXJnKTtcclxuICogICAgICAgcmV0dXJuIG9wdGlvbmFsQXJnO1xyXG4gKiAgIH1cclxuICogPC9wcmU+XHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAcGFyYW0ge01peGVkfSBkZWZhdWx0VmFsIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHNldC5cclxuICogQHBhcmFtIHtNaXhlZH0gb3B0aW9uYWxBcmcgQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbmFsIGFyZ3VtZW50LlxyXG4gKiBAcmV0dXJucyB7TWl4ZWR9IFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUgc3VwcGxpZWQgd2hlbiB0aGUgb3B0aW9uYWxcclxuICogYXJndW1lbnQgaXMgdW5kZWZpbmVkIG9yIG51bGwuIE90aGVyd2lzZSwgdGhlIHN1cHBsaWVkIG9wdGlvbmFsIGFyZ3VtZW50XHJcbiAqIGlzIHJldHVybmVkLlxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi8uLi9BdHJvcGFUb29sYm94VGVzdHMuaHRtbD9zcGVjPWF0cm9wYS5zZXRBc09wdGlvbmFsQXJnXCI+dGVzdHM8L2E+XHJcbiAqL1xyXG5hdHJvcGEuc2V0QXNPcHRpb25hbEFyZyA9IGZ1bmN0aW9uIChkZWZhdWx0VmFsLCBvcHRpb25hbEFyZykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBpZiAob3B0aW9uYWxBcmcgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25hbEFyZyA9PT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbmFsQXJnID0gZGVmYXVsdFZhbDtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25hbEFyZztcclxufTtcclxuXHJcblxyXG5cclxuXHJcbndoaWxlKGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMucG9wKCkoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGF0cm9wYTtcclxuIiwidmFyIHdhaXRGb3IgPSByZXF1aXJlKCcuLi9zcmMvYXRyb3BhLXdhaXRGb3IuanMnKTtcclxuXHJcbnRyeSB7XHJcbiAgICBPYmplY3Qua2V5cyh3YWl0Rm9yKS5mb3JFYWNoKFxyXG4gICAgICAgIGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgIGlmKCFhdHJvcGFbcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgIGF0cm9wYVtwcm9wXSA9IHdhaXRGb3JbcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG59IGNhdGNoIChpZ25vcmUpIHtcclxuICAgIGF0cm9wYSA9IHJlcXVpcmUoJy4uL3NyYy9hdHJvcGEtd2FpdEZvci5qcycpO1xyXG59XHJcblxyXG5PYmplY3Qua2V5cyh3YWl0Rm9yLmRhdGEpLmZpbHRlcihcclxuICAgIGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3AgIT09ICdyZXF1aXJlbWVudHMnO1xyXG4gICAgfVxyXG4pLmZvckVhY2goXHJcbiAgICBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgIGF0cm9wYS5kYXRhW3Byb3BdID0gd2FpdEZvci5kYXRhW3Byb3BdO1xyXG4gICAgfVxyXG4pO1xyXG4iLCIvKipcclxuICogQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKi9cclxudmFyIGF0cm9wYSA9IHJlcXVpcmUoJ2F0cm9wYS1oZWFkZXInKTtcclxuLyoqXHJcbiAqIFJlcXVpcmVkIG1vZHVsZSwgdGhlIGRvY3MgZm9yIGl0IGFyZSBpbiB0aGUgPGNvZGU+XHJcbiAqICBhdHJvcGEtc2V0QXNPcHRpb25hbEFyZy9kb2NzPC9jb2RlPiBkaXJlY3Rvcnkgd2hlcmUgdGhpcyBtb2R1bGUgXHJcbiAqICBpcyBsb2NhdGVkLlxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYXRyb3BhLXNldEFzT3B0aW9uYWxBcmcvZG9jcy9qc2RvYy9pbmRleC5odG1sXCI+XHJcbiAqIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdHJvcGEtc2V0QXNPcHRpb25hbEFyZy9kb2NzL2pzZG9jL2luZGV4Lmh0bWw8L2E+LFxyXG4gKiAgdW5sZXNzIHlvdSBpbnN0YWxsZWQgdGhpcyBkZXBlbmRlbmN5IG1hbnVhbGx5LlxyXG4gKi9cclxuYXRyb3BhLnNldEFzT3B0aW9uYWxBcmcgPSByZXF1aXJlKCdhdHJvcGEtc2V0QXNPcHRpb25hbEFyZycpLnNldEFzT3B0aW9uYWxBcmc7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9kb2NzL3ZzZG9jL09wZW5MYXllcnNBbGwuanNcIi8+XHJcbi8qanNsaW50XHJcbiAgICBpbmRlbnQ6IDQsXHJcbiAgICBtYXhlcnI6IDUwLFxyXG4gICAgd2hpdGU6IHRydWUsXHJcbiAgICBicm93c2VyOiB0cnVlLFxyXG4gICAgZGV2ZWw6IHRydWUsXHJcbiAgICBwbHVzcGx1czogdHJ1ZSxcclxuICAgIHJlZ2V4cDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbCBhdHJvcGEgKi9cclxuLy8gZW5kIGhlYWRlclxyXG5cclxuLyoqXHJcbiAqIFBvbGxpbmcgZnVuY3Rpb25zIGZvciBxdWljayBhbmQgc2xvcHB5IHdvcmsuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAbmFtZXNwYWNlIFBvbGxpbmcgZnVuY3Rpb25zIGZvciBxdWljayBhbmQgc2xvcHB5IHdvcmsuXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL0F0cm9wYVRvb2xib3hUZXN0cy5odG1sP3NwZWM9YXRyb3BhLndhaXRGb3JcIj50ZXN0czwvYT5cclxuICovXHJcbmF0cm9wYS53YWl0Rm9yID0ge307XHJcbi8qKlxyXG4gKiBHZW5lcmljIFdhaXQgZm9yIHRydWUuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0ZXN0Rm4gQSBmdW5jdGlvbiB0byB0ZWxsIHdoZW4gdGhlIHdhaXQgaXMgb3Zlci4gTXVzdFxyXG4gKiAgcmV0dXJuIHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25TdWNjZXNzQ2FsbGJhY2sgT3B0aW9uYWwuIFRoZSBmdW5jdGlvbiB0byBydW4gd2hlbiB0ZXN0Rm5cclxuICogIHJldHVybnMgdHJ1ZS4gRGVmYXVsdHMgdG8gPGNvZGU+ZnVuY3Rpb24gKCkge30gPC9jb2RlPlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbk1heFBvbGxDYWxsYmFjayBPcHRpb25hbC4gVGhlIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRlc3RGblxyXG4gKiAgaGFzIGJlZW4gcnVuIG1heFBvbGwgdGltZXMgYW5kIHRoZSB3YWl0IGlzIGJlaW5nIGdpdmVuIHVwLlxyXG4gKiBEZWZhdWx0cyB0byA8Y29kZT5mdW5jdGlvbiAoKSB7fTwvY29kZT5cclxuICogQHBhcmFtIHtJbnRlZ2VyfSBwb2xsSW50ZXJ2YWwgT3B0aW9uYWwuIFRoZSBhbW91bnQgb2YgdGltZSBpbiBtcyBiZXR3ZWVuXHJcbiAqICBwb2xsaW5nIHRlc3RGbiB0byBzZWUgaWYgaXQgcmV0dXJucyB0cnVlLiBEZWZhdWx0cyB0byAyMDBtcy5cclxuICogQHBhcmFtIHtJbnRlZ2VyfSBtYXhQb2xsIE9wdGlvbmFsLiBUaGUgcXVhbnRpdHkgb2YgcG9sbHMgYXQgd2hpY2ggaXQgbWFrZXNcclxuICogIHNlbnNlIHRvIGdpdmUgdXAgd2FpdGluZy4gRGVmYXVsdHMgdG8gNTAuXHJcbiAqL1xyXG5hdHJvcGEud2FpdEZvci50ZXN0ID0gZnVuY3Rpb24gdGVzdChcclxuICAgIHRlc3RGbiwgb25TdWNjZXNzQ2FsbGJhY2ssIG9uTWF4UG9sbENhbGxiYWNrLCBwb2xsSW50ZXJ2YWwsIG1heFBvbGxcclxuKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHBvbGxJbnRlcnZhbCA9IGF0cm9wYS5zZXRBc09wdGlvbmFsQXJnKDIwMCwgcG9sbEludGVydmFsKTtcclxuICAgIG1heFBvbGwgPSBhdHJvcGEuc2V0QXNPcHRpb25hbEFyZyg1MCwgbWF4UG9sbCk7XHJcbiAgICBvbk1heFBvbGxDYWxsYmFjayA9IGF0cm9wYS5zZXRBc09wdGlvbmFsQXJnKGF0cm9wYS5ub3AsIG9uTWF4UG9sbENhbGxiYWNrKTtcclxuICAgIG9uU3VjY2Vzc0NhbGxiYWNrID0gYXRyb3BhLnNldEFzT3B0aW9uYWxBcmcoYXRyb3BhLm5vcCwgb25TdWNjZXNzQ2FsbGJhY2spO1xyXG4gICAgdmFyIG15SW50O1xyXG4gICAgdmFyIG15Q291bnRlciA9IDA7XHJcbiAgICBmdW5jdGlvbiB3YWl0Rm9yVGVzdFJlY3Vyc29yICgpIHtcclxuICAgICAgICBteUNvdW50ZXIrKztcclxuICAgICAgICBpZiAodGVzdEZuKCkpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteUludCk7XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzc0NhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChteUNvdW50ZXIgPT09IG1heFBvbGwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteUludCk7XHJcbiAgICAgICAgICAgIG9uTWF4UG9sbENhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbXlJbnQgPSBzZXRJbnRlcnZhbCh3YWl0Rm9yVGVzdFJlY3Vyc29yLCBwb2xsSW50ZXJ2YWwpO1xyXG59O1xyXG4vKipcclxuICogV2FpdCBmb3IgRWxlbWVudFxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMjA5MDlcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gdGVzdEZuIEEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHJlZmVyZW5jZSB0byBhbiBIVE1MXHJcbiAqICBFbGVtZW50LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBPcHRpb25hbC4gb25TdWNjZXNzQ2FsbGJhY2tcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gT3B0aW9uYWwuIG9uTWF4UG9sbENhbGxiYWNrIFxyXG4gKiBAcGFyYW0ge0ludGVnZXJ9IE9wdGlvbmFsLiBwb2xsSW50ZXJ2YWxcclxuICogQHBhcmFtIHtJbnRlZ2VyfSBPcHRpb25hbC4gbWF4UG9sbFxyXG4gKiBAc2VlIGF0cm9wYS53YWl0Rm9yLnRlc3QgZm9yIG1vcmUgaW5mb3JtYXRpb24gYW5kIGRlZmF1bHQgdmFsdWVzIGZvciB0aGVcclxuICogIG9wdGlvbmFsIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5hdHJvcGEud2FpdEZvci5lbGVtZW50ID0gZnVuY3Rpb24gKFxyXG4gICAgdGVzdEZuLCBvblN1Y2Nlc3NDYWxsYmFjaywgb25NYXhQb2xsQ2FsbGJhY2ssIHBvbGxJbnRlcnZhbCwgbWF4UG9sbFxyXG4pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIEhUTUwgRE9NIERvY3VtZW50IGFuZCBwdXRzIGl0IGluIHRoZSBkb2N1bWVudFxyXG4gICAgICogcXVldWUsIHRoZW4gZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIGdpdmVuLlxyXG4gICAgICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAgICAgKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICAgICAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICAgICAqIEB2ZXJzaW9uIDIwMTIwOTA5XHJcbiAgICAgKiBAbWV0aG9kT2YgYXRyb3BhLndhaXRGb3IuZWxlbWVudC1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBvYmplY3RcclxuICAgICAqICBoYXMgYSB0YWcgbmFtZSBwcm9wZXJ0eS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZWxlbWVudFRlc3QgKCkge1xyXG4gICAgICAgIHJldHVybiBhdHJvcGEuaW5xdWlyZS5oYXNQcm9wZXJ0eSh0ZXN0Rm4oKSwgJ3RhZ05hbWUnKTtcclxuICAgIH1cclxuICAgIGF0cm9wYS53YWl0Rm9yLnRlc3QoXHJcbiAgICAgICAgZWxlbWVudFRlc3QsIG9uU3VjY2Vzc0NhbGxiYWNrLCBvbk1heFBvbGxDYWxsYmFjaywgcG9sbEludGVydmFsLCBtYXhQb2xsXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxud2hpbGUoYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wb3AoKSgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG4iXX0=
;