/**
* A hello world controller. This file is in cartridge/controllers folder
* @module controllers JHelloWorld
*/
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');

var loger=require('dw/system/Logger');

var weatherServiceObj = require("~/cartridge/scripts/service.ds");


function service() {
	var service = weatherServiceObj.WeatherStatus; 
	var sitePort= dw.system.Site.getCurrent().getCustomPreferenceValue('Storefront Configurations');
	var url = service.URL;

	service.setURL(url);
	var response = service.call();
	var dataj=JSON.parse(response.object.text);
	ISML.renderTemplate('Service.isml',{
		wdata:dataj,
		url:url,
		timeout:sitePort,
		
	});
		
};



exports.Service = guard.ensure(['get'], service);

