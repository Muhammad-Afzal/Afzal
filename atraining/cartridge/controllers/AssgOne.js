'use strict';

/* API Includes Hello Afzal */
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
	    ContinueURL: URLUtils.https('AssgOne-HandleForm')
	    }).render('Assgone');
}


function handleForm() {
    app.getForm('Assgone').handleAction({
        cancel: function () {
            app.getForm('Assgone').clear();
            response.redirect(URLUtils.https('AssgOne-Start'));
        }, 
        submit: function (formgroup) {
        	txn.wrap(function(){
var addto=formgroup.email.value;
var content=formgroup.content.value;
var password=formgroup.password.value;
        		 var mail: Mail = new dw.net.Mail();
   	     mail.addTo(addto);
   	     mail.setFrom("afzalr871@gmail.com");
   	     mail.setSubject("Example Email");
   	     // sets the content of the mail as plain string
   	     mail.setContent(content);
   	     mail.send();
   	     
   	app.getView({
  	    ContinueURL: URLUtils.https('JHelloWorld-HandleForm')
  	    });
        	});
        },
        error: function () {
            // No special error handling if the form is invalid.
        	
        	app.getView({
        	    ContinueURL: URLUtils.https('AssgOne-HandleForm')
        	    }).render('Assgone');
            return null;
        }
        
    });
}

exports.Start = guard.ensure(['get'], start);
exports.HandleForm = guard.ensure(['post'], handleForm);