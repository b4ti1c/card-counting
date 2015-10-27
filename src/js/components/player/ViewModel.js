goog.provide('app.components.Player.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.Player.ViewModel = function(params, element){
	goog.base(this, params, element);

	this.cards = app.gm.player.cards;
};
goog.inherits(app.components.Player.ViewModel, app.base.ViewModel);
