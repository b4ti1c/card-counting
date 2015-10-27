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
	return '<card data-bind="css: {inhand: inhand(), moved: moved()}, click: show">\
				<cardimg data-bind="style: {\
					background: open() ? \'url(/rsc/img/cards.png) \' + imgLocation\
					: \'url(rsc/img/cards.png) 154px 0\'}">\
				</cardimg>\
			</card>';
};