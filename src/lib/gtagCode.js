'use strict';

var loadScript = require('@adobe/reactor-load-script');
var gtagLoaded = false;

function loadGtag(conversionId) {
    if(!gtagLoaded) {
        var url = 'https://www.googletagmanager.com/gtag/js?id=' +  conversionId;
        loadScript(url);
        window.dataLayer = window.dataLayer || [];
        gtag(arguments);
        gtag('js', new Date());
        gtagLoaded = true;
    }
}

function gtag(layer){
    dataLayer.push(layer);
}


module.exports = loadGtag;