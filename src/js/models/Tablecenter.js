goog.provide('app.models.Tablecenter');
goog.require('app.base.Model');
goog.require('app.models.Card');



/**
 * 
 * @constructor
 * @extends {app.base.Model}
 *
 */
app.models.Tablecenter = function() {
	goog.base(this);

	this.cards = ko.observableArray();
};
goog.inherits(app.models.Tablecenter, app.base.Model);


app.models.Tablecenter.prototype.load = function(card, id){
	this.cards.push({
		id: id,
		card: card
	});

	app.dm.collectCard(app.gm.cardplayers[id].retrieveCard(card));
};


app.models.Tablecenter.prototype.removeCardById = function(id){
	this.cards.remove(function(card){
		return card.id == id;
	});
};


app.models.Tablecenter.prototype.removeCards = function(){
	this.cards.removeAll();
};