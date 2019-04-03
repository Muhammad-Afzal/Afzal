var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var BasketMgr = require('dw/order/BasketMgr');
function start() {
var basket=BasketMgr.currentBasket;
ISML.renderTemplate('showBasket.isml', {
	Basket:basket
		}
);
}
exports.Start = guard.ensure(['get'], start);