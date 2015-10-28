goog.provide('app.components.CPU.Template');
goog.require('app.components.Cardplayer.Template');



/**
 * @constructor
 * @extends {app.components.Cardplayer.Template}
 * 
 */
app.components.CPU.Template = function(){
	goog.base(this);
};
goog.inherits(app.components.CPU.Template, app.components.Cardplayer.Template);


/**
 * 
 * @override
 */
app.components.CPU.Template.prototype.templates_base = function(){
	return '<cpu data-bind="attr: {id: id}, foreach: {data: cards, as:\'card\'}">\
				<!-- ko component: {name: \'card-component\', params: {parent: $parent, card: card, index: $index}} --><!-- /ko -->\
			</cpu>';
};