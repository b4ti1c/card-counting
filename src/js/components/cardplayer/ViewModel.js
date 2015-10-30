goog.provide('app.components.Cardplayer.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.Cardplayer.ViewModel = function(params, element){
	goog.base(this, params, element);

	this.cards = app.gm.cardplayers[this.id].cards;
	this.moveAllowed = ko.observable(false);
};
goog.inherits(app.components.Cardplayer.ViewModel, app.base.ViewModel);


app.components.Cardplayer.ViewModel.prototype.bindModelEvents = function(){
	this.listeners.push(goog.events.listen(app.gm, app.managers.MoveManager.Events.TURN, this.onTurnEvent, false, this));
	this.listeners.push(goog.events.listen(this, app.components.Card.ViewModel.Events.CARD_MOVE, this.onCardMove, false, this));
};


app.components.Cardplayer.ViewModel.prototype.onTurnEvent = function(evt){
	this.moveAllowed(evt.id == this.id);
	if(this.moveAllowed())
		console.log('My turn:', this.id);
};


app.components.Cardplayer.ViewModel.prototype.onCardMove = function(evt){
	evt.stopPropagation();

	this.dispatchEvent({
		type: app.components.Cardplayer.Events.MAKE_MOVE,
		id: this.id,
		card: evt.card
	});
	//console.log(this.id, evt.card);
};


app.components.Cardplayer.Events = {
	MAKE_MOVE: 'make-a-move'
};