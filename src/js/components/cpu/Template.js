goog.provide('app.components.CPU.Template');
goog.require('app.base.Template');



/**
 * @constructor
 * @extends {app.base.Template}
 * 
 */
app.components.CPU.Template = function(){
	goog.base(this);
};
goog.inherits(app.components.CPU.Template, app.base.Template);


/**
 * 
 * @override
 */
app.components.CPU.Template.prototype.templates_base = function(){
	return '<cpu data-bind="attr: {id: position}, foreach: {data: cards, as:\'card\'}">\
				<!-- ko component: {name: \'card-component\', params: {parent: $parent, card: card}} --><!-- /ko -->\
			</cpu>';
};