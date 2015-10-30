goog.provide('app.components.Card.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.Card.ViewModel = function(params, element){
	goog.base(this, params, element);

	if(!this.open) this.open = ko.observable(false);
	if(!this.inhand) this.inhand = ko.observable(false);
	if(!this.index) this.index = ko.observable(0); //middle of a 13-cards hand
	if(!this.refArray) this.refArray = this.parent.cards;

	this.moved = ko.observable(false);

	this.posX = 154 * (this.card.number + 2);
	this.posY = -232 * this.card.color;

	if(this.card.number == 13) //its an ACE
		this.posX = 154 * 2;

	this.imgLocation = this.posX + 'px ' + this.posY + 'px'; 
};
goog.inherits(app.components.Card.ViewModel, app.base.ViewModel);


app.components.Card.ViewModel.prototype.show = function() {
	if(this.parent.moveAllowed() && this.card.validForMove()){	
		this.open(true);
		this.move();
	}
};


app.components.Card.ViewModel.prototype.move = function(){
	this.moved(true);
	this.dispatchEvent({
		type: app.components.Card.ViewModel.Events.CARD_MOVE,
		card: this.card
	});
};


app.components.Card.ViewModel.Events = {
	CARD_MOVE: 'card-move'
};
