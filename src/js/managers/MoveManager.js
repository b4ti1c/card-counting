goog.provide('app.managers.MoveManager');
goog.require('app.base.Manager');
goog.require('app.models.Tablecenter');
goog.require('app.utils.TurnMachine');
goog.require('app.utils.MovesOnTableHandler');


/**
 * @constructor
 * @extends {app.base.Manager}
 */
app.managers.MoveManager = function(){
	goog.base(this);

	this.tablecenter = new app.models.Tablecenter();
    this.tablecenter.setParentEventTarget(this);

	this.turnMachine = new app.utils.TurnMachine();
	this.turnMachine.setParentEventTarget(this);

	this.moth = new app.utils.MovesOnTableHandler();
	this.moth.setParentEventTarget(this);
};
goog.inherits(app.managers.MoveManager, app.base.Manager);
goog.addSingletonGetter(app.managers.MoveManager);


app.managers.MoveManager.prototype.bindModelEvents = function(){
	this.listeners.push(goog.events.listen(app.gm, app.components.Cardplayer.Events.MAKE_MOVE, this.resolveMove, false, this));
};


app.managers.MoveManager.prototype.init = function(){
	this.lastWinnerId = app.managers.GameManager.Id.PLAYER;
	this.tablecenter.removeCards();
};


app.managers.MoveManager.prototype.askNextMove = function(){
	this.dispatchEvent({
		type: app.managers.MoveManager.Events.TURN,
		id: this.turnMachine.whoseTurn()
	});
};


app.managers.MoveManager.prototype.startNewTurn = function(){
	this.turnMachine.init(this.lastWinnerId);
	this.askNextMove();
};


app.managers.MoveManager.prototype.resolveTurn = function(){
	this.lastWinnerId = this.moth.getWinner();

	console.log('winner of the turn:', this.lastWinnerId);

	this.moth.collectTable();
	setTimeout(this.dispatchEvent.bind(this, {
		type: app.managers.MoveManager.Events.TURN_WINNER,
		winner: this.lastWinnerId
	}), 1000);
};


app.managers.MoveManager.prototype.resolveMove = function(evt){
	if(evt.id != this.turnMachine.whoseTurn()) throw new Error('Invalid move in another one`s turn');
	setTimeout(this.tablecenter.load.bind(this.tablecenter, evt.card, evt.id), 500);

	if(!this.moth.recordMove(evt.id, evt.card)){
		this.turnMachine.endTurn();
		this.askNextMove();
	}
};


app.managers.MoveManager.Events = {
	TURN: 'new-turn',
	TURN_WINNER: 'turn-winner'
}
