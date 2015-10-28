goog.provide('app.managers.MoveManager');
goog.require('app.base.Manager');
goog.require('app.utils.TurnMachine');
goog.require('app.utils.MovesOnTableHandler');


/**
 * @constructor
 * @extends {app.base.Manager}
 */
app.managers.MoveManager = function(){
	goog.base(this);

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
	//this.turnMachine.init(app.managers.GameManager.Id.PLAYER);
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

	this.moth.collectTable();
};


app.managers.MoveManager.prototype.resolveMove = function(evt){
	if(evt.id != this.turnMachine.whoseTurn()) new Error('Invalid move in another one`s turn');
	if(!this.moth.recordMove(evt.id, evt.card)){
		this.turnMachine.endTurn();
		this.askNextMove();
	}
};


app.managers.MoveManager.Events = {
	TURN: 'new-turn'
}
