goog.provide('app.components.Cardplayer.Template');
goog.require('app.base.Template');



/**
 * @constructor
 * @extends {app.base.Template}
 * 
 */
app.components.Cardplayer.Template = function(){
	goog.base(this);
};
goog.inherits(app.components.Cardplayer.Template, app.base.Template);


/**
 * 
 * @override
 */
app.components.Cardplayer.Template.prototype.templates_base = function(){
	return '<cardplayer data-bind="foreach: {data: cards, as:\'card\'}">\
				<!-- ko component: {name: \'card-component\', params: {parent: $parent, card: card}} --><!-- /ko -->\
			</cardplayer>';
};