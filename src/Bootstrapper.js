goog.provide('app.Bootstrapper');
goog.require('app.Application');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');



/**
 *  
 * 
 * @export
 *
 * Bootstrapper class includes things to do on startup.
 * @constructor
 */
app.Bootstrapper = function(){
	app.Application.getInstance();
};  


document.addEventListener('DOMContentLoaded', function(){
	new app.Bootstrapper();
});