goog.provide('app.components.Player.Component');
goog.require('app.components.Cardplayer.Component');
goog.require('app.components.Player.ViewModel');
goog.require('app.components.Player.Template');

 

/**
 * @constructor
 * @extends {app.components.Cardplayer.Component}
 * 
 */
app.components.Player.Component = function(){
	goog.base(this);
};
goog.inherits(app.components.Player.Component, app.components.Cardplayer.Component);


/**
 * @override
 */
app.components.Player.Component.prototype.name = 'player-component';


/**
 * @override
 */
app.components.Player.Component.prototype.viewModel = app.components.Player.ViewModel;


/**
 * @override
 */
app.components.Player.Component.prototype.template = (new app.components.Player.Template()).template;
