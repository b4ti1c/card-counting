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


app.managers.MoveManager.prototype.init = function(){
	this.turnMachine.init(app.managers.GameManager.Id.PLAYER);
};


app.managers.MoveManager.prototype.askNextMove = function(){
	this.dispatchEvent({
		type: app.managers.MoveManager.Events.TURN,
		id: this.turnMachine.whoseTurn()
	});
};


app.managers.MoveManager.prototype.resolveTurn = function(){
	var winnerId = this.moth.getWinner();
	this.turnMachine.init(winnerId);

	this.moth.collectTable();

	app.dm.collectCard(this.cardplayers['bottom'].cards.pop());
};


app.managers.MoveManager.Events = {
	TURN: 'new-turn'
}
