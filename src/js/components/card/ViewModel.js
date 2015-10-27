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

	this.moved = ko.observable(false);

	this.posX = 154 * (this.card.number + 2);
	this.posY = -232 * this.card.color;

	if(this.card.number == 13) //its an ACE
		this.posX = 154 * 2;

	this.imgLocation = this.posX + 'px ' + this.posY + 'px'; 
};
goog.inherits(app.components.Card.ViewModel, app.base.ViewModel);


app.components.Card.ViewModel.prototype.show = function() {
	this.open(true);
	console.log(this.card);
	this.move();
};


app.components.Card.ViewModel.prototype.move = function(){
	this.moved(true);
};