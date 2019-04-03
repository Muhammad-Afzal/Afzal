/**
* A hello world controller. This file is in cartridge/controllers folder
* @module controllers JHelloWorld
*/
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');

var loger=require('dw/system/Logger');
function start() {
	ISML.renderTemplate(
			'helloworld1.isml', {
			myParameteronISML:
			"Hello from Controllers"
			}
			);
};


var looger=loger.getLogger("RaoAfzal","myfolder");


function start2() {
	try
	{
	ISML.renderTemplate(
			'a1.isml'
			);
	}
	catch(e)
	{

	looger.debug("message show for template",e.causeMessage);
	}
};





exports.Start = guard.ensure(['get'], start);
exports.Start2 = guard.ensure(['get'], start2);