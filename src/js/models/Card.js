goog.provide('app.models.Card');
goog.require('app.base.Model');



/**
 * 
 * @constructor
 * @extends {app.base.Model}
 *
 * @param {app.models.Card.Number} number [description]
 * @param {app.models.Card.Color} color [description]
 */
app.models.Card = function(number, color) {
	goog.base(this);

	this['number'] = this.number = number;
	this['color'] = this.color = color;

	this.validForMove = ko.observable(false);
};
goog.inherits(app.models.Card, app.base.Model);


/**
 * 
 * @enum {number}
 */
app.models.Card.Color = {
	DIAMOND: 0,
	HEART: 1,
	CLUB: 2,
	SPADE: 3,
}


/**
 * 
 * @enum {number}
 */
app.models.Card.Number = {
	2: 1,
	3: 2,
	4: 3,
	5: 4,
	6: 5,
	7: 6,
	8: 7,
	9: 8,
	10: 9,
	J: 10,
	Q: 11,
	K: 12,
	A: 13
}
