goog.provide('app.components.Player.Template');
goog.require('app.components.Cardplayer.Template');



/**
 * @constructor
 * @extends {app.components.Cardplayer.Template}
 * 
 */
app.components.Player.Template = function(){
	goog.base(this);
};
goog.inherits(app.components.Player.Template, app.components.Cardplayer.Template);


/**
 * 
 * @override
 */
app.components.Player.Template.prototype.templates_base = function(){
	return '<player data-bind="style: {width: (cards().length - 1) * 40 + 77 + \'px\'}, css: {hasturn: moveAllowed(), mademymove: madeMyMove()}, foreach: {data: cards, as:\'card\'}">\
				<!-- ko component: {name: \'card-component\', params: {parent: $parent, card: card, open: ko.observable(true), inhand: ko.observable(true), index: $index}} --><!-- /ko -->\
			</player>';
};