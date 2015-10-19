goog.provide('app.models.Deck');
goog.require('app.base.Model');
goog.require('app.models.Card');



/**
 * 
 * @constructor
 * @extends {app.base.Model}
 *
 */
app.models.Deck = function() {
	goog.base(this);

	this.cards = _.flatten(Object.keys(app.models.Card.Color).map(function(color){
		return _.range(1, 14).map(function(number){
			return new app.models.Card(number, color);
		});
	}));
};
goog.inherits(app.models.Deck, app.base.Model);

