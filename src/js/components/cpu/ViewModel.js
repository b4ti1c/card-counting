goog.provide('app.components.CPU.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.CPU.ViewModel = function(params, element){
	goog.base(this, params, element);

	this.cards = app.gm.cpu[this.position].cards;
};
goog.inherits(app.components.CPU.ViewModel, app.base.ViewModel);
