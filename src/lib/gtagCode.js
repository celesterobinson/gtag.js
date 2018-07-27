'use strict';

var loadScript = require('@adobe/reactor-load-script');
var conversionId = turbine.getExtensionSettings().configId;

function loadGtag(conversionId) {
    var url = 'https://www.googletagmanager.com/gtag/js?id=' + conversionId;
    loadScript(url);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'conversionId');
}

module.exports = loadGtag(conversionId);