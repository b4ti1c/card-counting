goog.provide('app.components.CPU.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.CPU.ViewModel = function(params, element){
	goog.base(this, params, element);

	this.cards = app.gm.cpu[this.position].cards;
};
goog.inherits(app.components.CPU.ViewModel, app.base.ViewModel);


app.components.CPU.ViewModel.prototype.bindModelEvents = function(){
	this.listeners = [];

	this.listeners.push(goog.events.listen(app.gm.mm, app.managers.MoveManager.Events.TURN, this.onTurnEvent, false, this));
};


app.components.CPU.ViewModel.prototype.onTurnEvent = function(evt){
	console.log(evt);
};
