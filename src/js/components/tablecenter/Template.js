goog.provide('app.components.Tablecenter.Template');
goog.require('app.base.Template');



/**
 * @constructor
 * @extends {app.base.Template}
 * 
 */
app.components.Tablecenter.Template = function(){
	goog.base(this);
};
goog.inherits(app.components.Tablecenter.Template, app.base.Template);


/**
 * 
 * @override
 */
app.components.Tablecenter.Template.prototype.templates_base = function(){
	return '<tablecenter></tablecenter>';
};