goog.provide('app.components.Player.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.Player.ViewModel = function(params, element){
	goog.base(this, params, element);

	this.id = app.managers.GameManager.Id.PLAYER;

	this.cards = app.gm.player.cards;
};
goog.inherits(app.components.Player.ViewModel, app.base.ViewModel);


app.components.Player.ViewModel.prototype.bindModelEvents = function(){
	this.listeners = [];

	this.listeners.push(goog.events.listen(app.gm.mm, app.managers.MoveManager.Events.TURN, this.onTurnEvent, false, this));
};


app.components.Player.ViewModel.prototype.onTurnEvent = function(evt){
	console.log(evt);
};