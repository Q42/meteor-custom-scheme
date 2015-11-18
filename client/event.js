'use strict';

var events = [];

Meteor.onCustomScheme = function(callback) {
    events.push(callback);
};

const onStart = function(){
    alert("on resume");
    setTimeout(() => {
        if(window.customSchemeUrl) {
            events.forEach((callback) => {
                if(typeof callback == 'function') {
                    callback(window.customSchemeUrl);
                }
            });
        }
    }, 0);
};

Meteor.startup(function () {
    if (Meteor.isCordova) {
        document.addEventListener('deviceready', onStart, false);
        document.addEventListener('resume', onStart, false);
    }
});