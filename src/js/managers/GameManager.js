goog.provide('app.managers.GameManager');
goog.require('app.base.Manager');
goog.require('app.models.Hand');
goog.require('app.managers.MoveManager');


/**
 * @constructor
 * @extends {app.base.Manager}
 */
app.managers.GameManager = function(){
	goog.base(this);

	this.mm = app.managers.MoveManager.getInstance();
	this.mm.setParentEventTarget(this);
	this.setTrump(app.models.Card.Color.SPADE);


	this.cardplayers = {};
	Object.keys(app.managers.GameManager.Id).forEach(function(key){
		var id = app.managers.GameManager.Id[key];
		this.cardplayers[id] = new app.models.Hand(id);
	}, this);

	this.init();
};
goog.inherits(app.managers.GameManager, app.base.Manager);
goog.addSingletonGetter(app.managers.GameManager);


app.managers.GameManager.prototype.bindModelEvents = function(){
	this.listeners = [];

	this.listeners.push(goog.events.listen(this, app.utils.MovesOnTableHandler.Events.MOVES_COMPLETE, this.onMovesComplete, false, this));
};


app.managers.GameManager.prototype.init = function(){
	app.dm.shuffle();

	while(app.dm.deck.cards.length)
		Object.keys(this.cardplayers).forEach(function(id){
			this.cardplayers[id].load(app.dm.getCard());
		}, this)
	

	this.mm.init();
};


app.managers.GameManager.prototype.restart = function(){
	Object.keys(this.cardplayers).forEach(function(id){
		while(this.cardplayers[id].cards().length) 
			app.dm.collectCard(this.cardplayers[id].cards.pop());
	}, this);

	this.init();
};


app.managers.GameManager.prototype.onMovesComplete = function(){
	this.mm.resolveTurn();
};


/**
 * 
 * @param {app.models.Card.Color} color [description]
 */
app.managers.GameManager.prototype.setTrump = function(color){
	this.trump = color;
};


app.managers.GameManager.prototype.forceMove = function(){

};


app.managers.GameManager.Id = {
	CPU_LEFT: 'left',
	CPU_TOP: 'top',
	CPU_RIGHT: 'right',
	PLAYER: 'bottom'
};