goog.provide('app.components.Cardplayer.Component');
goog.require('app.base.Component');
goog.require('app.components.Cardplayer.ViewModel');
goog.require('app.components.Cardplayer.Template');

 

/**
 * @constructor
 * @extends {app.base.Component}
 * 
 */
app.components.Cardplayer.Component = function(){
	goog.base(this);
};
goog.inherits(app.components.Cardplayer.Component, app.base.Component);


/**
 * @override
 */
app.components.Cardplayer.Component.prototype.name = 'cardplayer-component';


/**
 * @override
 */
app.components.Cardplayer.Component.prototype.viewModel = app.components.Cardplayer.ViewModel;


/**
 * @override
 */
app.components.Cardplayer.Component.prototype.template = (new app.components.Cardplayer.Template()).template;
