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

	this.posX = 154 * (this.card.number + 2);
	this.posY = -232 * this.card.color;

	if(this.card.number == 13) //its an ACE
		this.posX = 154 * 2;

	this.imgLocation = this.posX + 'px ' + this.posY + 'px';
};
goog.inherits(app.components.Card.ViewModel, app.base.ViewModel);


app.components.Card.ViewModel.prototype.show = function() {
	console.log(this.card);
};