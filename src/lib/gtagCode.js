'use strict';

var loadScript = require('@adobe/reactor-load-script');
var conversionIdList = turbine.getExtensionSettings().conversionIdList;
// var dataLayer = turbine.getExtensionSettings().renamedDataLayer || 'dataLayer';

var url = 'https://www.googletagmanager.com/gtag/js?id=' + conversionIdList[0];
loadScript(url);

if (window.dataLayer && !Array.isArray(window.dataLayer)) {
    console.log('window.dataLayer already exists and is not an array. Visit your extension configuration in Launch, and' +
        'reconfigure the dataLayer variable to something else of your choosing.')
}

window.dataLayer = window.dataLayer || [];
window.gtag = function () {
    dataLayer.push(arguments);
};
gtag('js', new Date());
conversionIdList.forEach(function (conversionId) {
    gtag('config', conversionId);
});