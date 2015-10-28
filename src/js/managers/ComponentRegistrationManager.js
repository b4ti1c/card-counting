goog.provide('app.managers.ComponentRegistrationManager');
goog.require('app.base.Manager');
goog.require('app.components.Card.Component');
goog.require('app.components.Cardplayer.Component');
goog.require('app.components.Player.Component');
goog.require('app.components.CPU.Component');
goog.require('app.components.Tablecenter.Component');



/**
 * @constructor
 * @extends {app.base.Manager}
 */
app.managers.ComponentRegistrationManager = function(){
	goog.base(this);

	this.register(new app.components.Card.Component());
	this.register(new app.components.Cardplayer.Component());
	this.register(new app.components.Player.Component());
	this.register(new app.components.CPU.Component());
	this.register(new app.components.Tablecenter.Component());
};
goog.inherits(app.managers.ComponentRegistrationManager, app.base.Manager);
goog.addSingletonGetter(app.managers.ComponentRegistrationManager);


app.managers.ComponentRegistrationManager.prototype.register = function(component){
	ko.components.register(component.name, {
		'viewModel': {
			'createViewModel': function(params, componentInfo){
				return new component.viewModel(params, componentInfo.element);
			}
		},
		'template': component.template
	});
};
