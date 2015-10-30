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
	return '<tablecenter>\
				<!-- ko foreach: {data: cards, as: \'carditem\'} -->\
					<tablecard data-bind="attr: {class: $parent.winner() ? \'winner\' + $parent.winner() : carditem.id}">\
						<!-- ko component: {name: \'card-component\', params: {parent: $parent, card: carditem.card, open: ko.observable(true)}} --><!-- /ko -->\
					</tablecard>\
				<!-- /ko -->\
			</tablecenter>';
};
