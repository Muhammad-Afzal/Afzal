'use strict';

/**
 * This controller handles customer service related pages, such as the contact us form.
 *
 * @module controllers/CustomerService
 */

/* API Includes */
var Status = require('dw/system/Status');

/* Script Modules */
var app = require('app_sitegenesis_controllers/cartridge/scripts/app');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var URLUtils = require('dw/web/URLUtils');
var DriverMgr = require('dw/object/CustomObjectMgr');
/**
 * Provides a contact us form which sends an email to the configured customer service email address.
 */
function start() {
	app.getView({
	    ContinueURL: URLUtils.https('FirstFormService-HandleForm')
	    }).render('FirstForm');
}

function handleForm() {
    app.getForm('FirstForm').handleAction({
        cancel: function () {
            app.getForm('FirstForm').clear();
            response.redirect(URLUtils.https('FirstFormService-Start'));
        }, 
        submit: function (formgroup) {
  //      	DriverMgr.createCustomObject("Driver",dw.util.UUIDUtils.createUUID(),"Ahsan Saleem");
        	app.getView().render('Hello');
   //     	ISML.renderTemplate('Hello.isml')
        },
        error: function () {
            // No special error handling if the form is invalid.
            return null;
        }
        
    });   
}

/** Shows the template page. */
exports.Start = guard.ensure(['get'], start);
exports.HandleForm = guard.ensure(['post'], handleForm);
