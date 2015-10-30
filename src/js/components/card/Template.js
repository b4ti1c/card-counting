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
	return '<card data-bind="css: {inhand: inhand(), moved: moved(), valid: card.validForMove()}, ' +
			   'style: {left: (index() - refArray().length/2) * 80 + 40 + \'px\'}, click: show">\
			    <!-- ko if: !card.validForMove() && parent.id == app.managers.GameManager.Id.PLAYER && !parent.madeMyMove() --><cardoverlay></cardoverlay><!-- /ko -->\
			    <cardimg data-bind="style: {\
					background: open() ? \'url(/rsc/img/cards.png) \' + imgLocation\
					: \'url(rsc/img/cards.png) 154px 0\'}">\
				</cardimg>\
			</card>';
};