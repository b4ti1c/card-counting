goog.provide('app.components.Player.ViewModel');
goog.require('app.components.Cardplayer.ViewModel');



/**
 * @constructor
 * @extends {app.components.Cardplayer.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.Player.ViewModel = function(params, element){
	goog.base(this, params, element);
};
goog.inherits(app.components.Player.ViewModel, app.components.Cardplayer.ViewModel);
