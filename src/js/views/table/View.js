goog.provide('app.views.Table.View');
goog.require('app.base.View');
goog.require('app.views.Table.Template');



/**
 * @constructor
 * @extends {app.base.View}
 *
 * @param {Object} products [description]
 */
app.views.Table.View = function(products){
	goog.base(this);


	this.hand = app.dm.deck.cards;

	this.export();
};
goog.inherits(app.views.Table.View, app.base.View);


/**
 * @override
 */
app.views.Table.View.prototype.name = 'table-view';



/**
 * @override
 */
app.views.Table.View.prototype.template = (new app.views.Table.Template()).template;
