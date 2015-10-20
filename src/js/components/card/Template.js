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
	return '<cardimg data-bind="style: {background: \'url(rsc/img/cards.png) \' + imgLocation}, click: show"></cardimg>';
};