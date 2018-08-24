'use strict';

var loadScript = require('@adobe/reactor-load-script');
var conversionIdList = turbine.getExtensionSettings().conversionIdList;

var url = 'https://www.googletagmanager.com/gtag/js?id=' + conversionIdList[0];
loadScript(url);
window.dataLayer = window.dataLayer || [];
window.gtag = function () {
    dataLayer.push(arguments);
};
gtag('js', new Date());
conversionIdList.forEach(function (conversionId) {
    gtag('config', conversionId);
});