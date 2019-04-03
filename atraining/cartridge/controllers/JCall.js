/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JCall
*/

var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
	var myParam =request.httpParameterMap.param;
	if(myParam.stringValue!=null)
		{
		ISML.renderTemplate(
				'jnotEmpty.isml', {
					myParameteronISML:myParam.stringValue
					
				}
		);
		}
	else
		{
		ISML.renderTemplate(
				'jempty.isml'
				, {
					myParameteronISML:'Not Found'
					
					}
				);
		}
};
exports.Start = guard.ensure(['get'], start);