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
};
goog.inherits(app.components.Cardplayer.ViewModel, app.base.ViewModel);


app.components.Cardplayer.ViewModel.prototype.bindModelEvents = function(){
	this.listeners = [];

	this.listeners.push(goog.events.listen(app.gm, app.managers.MoveManager.Events.TURN, this.onTurnEvent, false, this));
};


app.components.Cardplayer.ViewModel.prototype.onTurnEvent = function(evt){
	if(evt.id == this.id)
		console.log('My turn:', this.id);
};


app.components.Cardplayer.Events = {
	MAKE_MOVE: 'make-a-move'
};