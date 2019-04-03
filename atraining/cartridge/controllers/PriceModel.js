/**
* Description of the Controller and the logic it provides
*
* @module  controllers/GetProductVarient
*/

'use strict';

// HINT: do not put all require statements at the top of the file
// unless you really need them for all functions

/**
* Description of the function
*
* @return {String} The string 'myFunction'
*/
// var myFunction = function(){
//     return 'myFunction';
// }

/* Exports of the controller */
///**
// * @see {@link module:controllers/GetProductVarient~myFunction} */
//exports.MyFunction = myFunction;

/* API Includes */
var Status = require('dw/system/Status');
/* Script Modules */

var app = require('app_sitegenesis_controllers/cartridge/scripts/app');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var ProductMgr=require('dw/catalog/ProductMgr');
var catalog=require('dw/catalog/ProductVariationModel');

function start() {
	
	var product=ProductMgr.getProduct("P0048"); //here is get product atribute
	
	//var varatribute=catalog.getProductVariationAttributes();
	app.getView({
		Product:product                 //send object to template
	    
	    }).render('PriceModel');     //execute the render the template
	
	
	
	
	
	
}

exports.Start = guard.ensure(['get'], start);












