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


var Mail = require('dw/net/Mail');
var Site = require('dw/system/Site');
var Template = require('dw/util/Template');
 
function start() {
	app.getView({
	    ContinueURL: URLUtils.https('InsertCustomData-HandleForm')
	    }).render('CustomObjectVale');
}


function handleForm() {
    app.getForm('CustomObjectValue').handleAction({
        cancel: function () {
        	
        	    
        	     var mail: Mail = new dw.net.Mail();
        	     mail.addTo("afzalr871@gmail.com");
        	     mail.setFrom("afzalr871@gmail.com");
        	     mail.setSubject("Example Email");
        	     // sets the content of the mail as plain string
        	     mail.setContent("my name is afzal rao");
        	     mail.send();
        	
            app.getForm('CustomObjectValue').clear();
            response.redirect(URLUtils.https('InsertCustomData-Start'));
        }, 
        submit: function (formgroup) {
        	txn.wrap(function(){
        		var driver=DriverMgr.createCustomObject("Students",24);
        		driver.custom.StudentFirstName=formgroup.FirstName.value;
        		driver.custom.StudentLastName=formgroup.LastName.value;
        		driver.custom.StudentEmail=formgroup.Mail.value;
        		driver.custom.StudentStatus=formgroup.StudentStatus.value;
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