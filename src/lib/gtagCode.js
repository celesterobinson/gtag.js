'use strict';

var loadScript = require('@adobe/reactor-load-script');
var extensionSettings = turbine.getExtensionSettings();
var conversionIdList = extensionSettings.conversionIdList;
var dataLayerName = extensionSettings.dataLayerName;
var url;

if (dataLayerName) {
    url = 'https://www.googletagmanager.com/gtag/js?id=' + conversionIdList[0] + '&l=' + dataLayerName;
} else {
    url = 'https://www.googletagmanager.com/gtag/js?id=' + conversionIdList[0];
}


loadScript(url);

if ((window.dataLayer && !Array.isArray(window.dataLayer)) && !dataLayerName) {
    console.log('window.dataLayer already exists and is not an array. Visit the gtag extension configuration in ' +
        'Launch and provide a custom data layer name of your choosing.');
}

if (dataLayerName) {
    window[dataLayerName] = window[dataLayerName] || [];
    window.gtag = function () {
        window[dataLayerName].push(arguments);
    };
} else {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        dataLayer.push(arguments);
    };
}

gtag('js', new Date());
conversionIdList.forEach(function (conversionId) {
    gtag('config', conversionId);
});