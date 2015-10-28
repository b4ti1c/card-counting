goog.provide('app.models.Hand');
goog.require('app.base.Model');



/**
 * 
 * @constructor
 * @extends {app.base.Model}
 *
 * @param {app.managers.GameManager.Id}  [description]
 */
app.models.Hand = function(owner) {
	goog.base(this);

	this.id = owner;

	this.cards = ko.observableArray([]);
};
goog.inherits(app.models.Hand, app.base.Model);


/**
 * 
 * @param  {Array<app.models.Card>|app.models.Cards} card [description]
 */
app.models.Hand.prototype.load = function(cards){
	if(Object.prototype.toString.call(cards) == '[object Array]') 
		cards.forEach(function(card){
			this.cards.push(card);
		});
	else this.cards.push(cards);

	this.sort();
};


app.models.Hand.prototype.sort = function(){
	this.cards.sort(function(card1, card2){
		if(card1.color == card2.color) return card1.number - card2.number;
		return app.models.Hand.ColorRegression(card1.color) - app.models.Hand.ColorRegression(card2.color);
	});
};


/**
 * @param  {number|app.models.Card=} card [description]
 */
app.models.Hand.prototype.retrieveCard = function(card){
	card = card || 0;

	if(typeof card == 'number')
		if(card >= this.cards.length) throw new Error('Card index greater than hand'); 
		else {
			var cardAtIndex = this.cards()[cardAtIndex];
			this.cards.splice(card, 1);
			return cardAtIndex;
		}
	else
		if(this.cards.indexOf(card) == -1) throw new Error('Card not existing in hand');
		else {
			this.cards.splice(this.cards.indexOf(card), 1);
			return card;
		}
};


/**
 * 
 * @param  {app.models.Card|app.models.Card.Color} info        [description]
 * @param  {boolean=} opt_largest [description]
 */
app.models.Hand.prototype.askCard = function(info, opt_largest){
	if(Object.prototype.toString.call(info) == '[object Object]')
		return this.cards.indexOf(info) != -1;

	var stack = this.cards.filter(function(card){
		return card.color == info;
	});

	if(!stack.length) return -1;

	if(!opt_largest) return stack[0];
	return stack[stack.length - 1];
};


/**
 * 
 * @param {app.models.Card.Color} color 
 */
app.models.Hand.ColorRegression = function(color){
	return 1.666 * Math.pow(color, 3) + -7.5 * Math.pow(color, 2) + 7.833 * color + 1;
};
