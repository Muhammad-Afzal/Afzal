/**
* Description of the Controller and the logic it provides
*
* @module  controllers/VarTest
*/

var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
	ISML.renderTemplate(
			'Template1.isml', {
			myParameteronISML:
			"Hello from Controllers"
			}
			);
};
exports.Start = guard.ensure(['get'], start);;