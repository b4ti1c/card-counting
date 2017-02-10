goog.provide('app.components.CPU.ViewModel');
goog.require('app.components.Cardplayer.ViewModel');



/**
 * @constructor
 * @extends {app.components.Cardplayer.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.CPU.ViewModel = function(params, element){
	goog.base(this, params, element);
};
goog.inherits(app.components.CPU.ViewModel, app.components.Cardplayer.ViewModel);

