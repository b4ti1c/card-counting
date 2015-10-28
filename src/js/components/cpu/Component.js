goog.provide('app.components.CPU.Component');
goog.require('app.components.Cardplayer.Component');
goog.require('app.components.CPU.ViewModel');
goog.require('app.components.CPU.Template');

 

/**
 * @constructor
 * @extends {app.components.Cardplayer.Component}
 * 
 */
app.components.CPU.Component = function(){
	goog.base(this);
};
goog.inherits(app.components.CPU.Component, app.components.Cardplayer.Component);


/**
 * @override
 */
app.components.CPU.Component.prototype.name = 'cpu-component';


/**
 * @override
 */
app.components.CPU.Component.prototype.viewModel = app.components.CPU.ViewModel;


/**
 * @override
 */
app.components.CPU.Component.prototype.template = (new app.components.CPU.Template()).template;
