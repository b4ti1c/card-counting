goog.provide('app.components.Card.Template');
goog.require('app.base.Template');



/**
 * @constructor
 * @extends {app.base.Template}
 * 
 */
app.components.Card.Template = function(){
	goog.base(this);
};
goog.inherits(app.components.Card.Template, app.base.Template);


/**
 * 
 * @override
 */
app.components.Card.Template.prototype.templates_base = function(){
	return '<div>Hello</div>';
};