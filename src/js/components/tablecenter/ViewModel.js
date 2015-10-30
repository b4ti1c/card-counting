goog.provide('app.components.Tablecenter.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.Tablecenter.ViewModel = function(params, element){
	goog.base(this, params, element);

	this.winner = ko.observable(null);
	this.turnCount = ko.observable(app.gm.turn);

	this.refArray = ko.observableArray(['dummy']);
};
goog.inherits(app.components.Tablecenter.ViewModel, app.base.ViewModel);


app.components.Tablecenter.ViewModel.prototype.bindModelEvents = function(){
	this.listeners.push(goog.events.listen(app.gm, app.managers.MoveManager.Events.TURN_WINNER, this.onTurnWinner, false, this));
};


app.components.Tablecenter.ViewModel.prototype.onTurnWinner = function(evt){
	this.winner(evt.winner);
	setTimeout(function(){
		this.cards.removeAll();
		this.winner(null);
		this.turnCount(app.gm.turn);
	}.bind(this), 700);
};
