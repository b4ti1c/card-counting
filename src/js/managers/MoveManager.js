goog.provide('app.managers.MoveManager');
goog.require('app.base.Manager');
goog.require('app.utils.TurnMachine');


/**
 * @constructor
 * @extends {app.base.Manager}
 */
app.managers.MoveManager = function(){
	goog.base(this);

	this.turnMachine = new app.utils.TurnMachine();

	this.init();
};
goog.inherits(app.managers.MoveManager, app.base.Manager);
goog.addSingletonGetter(app.managers.MoveManager);


app.managers.MoveManager.prototype.init = function(){
	this.turnMachine.init(app.managers.GameManager.Id.PLAYER);
};


app.managers.MoveManager.Events = {
	TURN: 'new-turn'
}
