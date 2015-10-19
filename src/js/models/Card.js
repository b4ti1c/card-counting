goog.provide('app.models.Card');
goog.require('app.base.Model');



/**
 * 
 * @constructor
 * @extends {app.base.Model}
 *
 * @param {number} number [description]
 * @param {app.models.Card.Color} color [description]
 */
app.models.Card = function(number, color) {
	goog.base(this);

	this['number'] = this.number = number;
	this['color'] = this.color = color;
};
goog.inherits(app.models.Card, app.base.Model);


/**
 * 
 * @enum {number}
 */
app.models.Card.Color = {
	HEART: 0,
	DIAMOND: 1,
	SPADE: 2,
	CLUB: 3,
}
