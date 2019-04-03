var ISML = require('dw/template/ISML');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var OutPut = require('~/cartridge/scripts/ProductFinder');
function start() {
var output=OutPut();
		ISML.renderTemplate(
		'dscript.isml',{Out:output}
		);
}
exports.Start = guard.ensure(['get'], start);