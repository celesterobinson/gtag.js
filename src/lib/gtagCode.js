'use strict';

var loadScript = require('@adobe/reactor-load-script');
var gtagLoaded = false;

function loadGtag(conversionId) {
    if(!gtagLoaded) {
        var url = 'https://www.googletagmanager.com/gtag/js?id=' +  conversionId;
        loadScript(url);
        window.dataLayer = window.dataLayer || [];;
        window.gtag = function(args) {
            dataLayer.push(args);
        };
        gtag(arguments);
        gtag('js', new Date());
        gtagLoaded = true;
    }
}

module.exports = loadGtag;