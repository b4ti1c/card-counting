goog.provide('app.components.Tablecenter.Component');
goog.require('app.base.Component');
goog.require('app.components.Tablecenter.ViewModel');
goog.require('app.components.Tablecenter.Template');

 

/**
 * @constructor
 * @extends {app.base.Component}
 * 
 */
app.components.Tablecenter.Component = function(){
	goog.base(this);
};
goog.inherits(app.components.Tablecenter.Component, app.base.Component);


/**
 * @override
 */
app.components.Tablecenter.Component.prototype.name = 'tablecenter-component';


/**
 * @override
 */
app.components.Tablecenter.Component.prototype.viewModel = app.components.Tablecenter.ViewModel;


/**
 * @override
 */
app.components.Tablecenter.Component.prototype.template = (new app.components.Tablecenter.Template()).template;
