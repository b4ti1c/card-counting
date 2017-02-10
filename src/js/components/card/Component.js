goog.provide('app.components.Card.Component');
goog.require('app.base.Component');
goog.require('app.components.Card.ViewModel');
goog.require('app.components.Card.Template');

 

/**
 * @constructor
 * @extends {app.base.Component}
 * 
 */
app.components.Card.Component = function(){
	goog.base(this);
};
goog.inherits(app.components.Card.Component, app.base.Component);


/**
 * @override
 */
app.components.Card.Component.prototype.name = 'card-component';


/**
 * @override
 */
app.components.Card.Component.prototype.viewModel = app.components.Card.ViewModel;


/**
 * @override
 */
app.components.Card.Component.prototype.template = (new app.components.Card.Template()).template;
