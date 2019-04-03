'use strict';

/* API Includes */
var Status = require('dw/system/Status');
/* Script Modules */

var app = require('app_sitegenesis_controllers/cartridge/scripts/app');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var DriverMgr = require('dw/object/CustomObjectMgr');
var txn = require('dw/system/Transaction');
var URLUtils = require('dw/web/URLUtils');
var ProductMgr = require('dw/customer/CustomerMgr');

//var basket=BasketMgr.currentBasket;

//	DriverMgr.getCustomObject('Driver',1);	
	function start() {
		app.getView({
		    ContinueURL: URLUtils.https('DriverController-HandleForm')
		    }).render('FirstForm');
	}
	
	function handleForm() {
	    app.getForm('FirstForm').handleAction({
	        cancel: function () {
	            app.getForm('FirstForm').clear();
	            response.redirect(URLUtils.https('DriverController-HandleForm'));
	        }, 
	        submit: function (formgroup) {
	        	txn.wrap(function(){
	        		var driver=DriverMgr.createCustomObject("Students",15);
	        		driver.custom.StudentFirstName=formgroup.DriverName.value;
	        		driver.custom.StudentLastName=formgroup.PhoneNumber.value;
	        		//driver.custom.PhoneNumber=formgroup.DriverCatagory.value;
	        		//var customer=ProductMgr.createCustomer("ahsan871@gmail.com","ahsansab149A@");
	        		//customer.firstName="Ahsan Warraich";
	        	});
	        },
	        error: function () {
	            // No special error handling if the form is invalid.
	            return null;
	        }
	        
	    });
	}
	
exports.Start = guard.ensure(['get'], start);
exports.HandleForm = guard.ensure(['post'], handleForm);