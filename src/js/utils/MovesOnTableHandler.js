goog.provide('app.utils.MovesOnTableHandler');
goog.require('app.base.EventTarget');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.utils.MovesOnTableHandler = function() {
    goog.base(this);

    this.playedMoves = {};
    Object.keys(app.managers.GameManager.Id).map(function(key){
    	this.playedMoves[app.managers.GameManager.Id[key]] = null;
    }, this);
};
goog.inherits(app.utils.MovesOnTableHandler, app.base.EventTarget);


app.utils.MovesOnTableHandler.prototype.clearMoves = function(){
	Object.keys(this.playedMoves).forEach(function(id){
		this.playedMoves[id] = null;
	});
};


app.utils.MovesOnTableHandler.prototype.bindModelEvents = function(){
	this.listeners = [];

	this.listeners.push(goog.events.listen(app.gm, app.components.Cardplayer.Events.MAKE_MOVE, this.recordMove, false, this));
};


app.utils.MovesOnTableHandler.prototype.recordMove = function(evt){
	this.playedMoves[evt.id] = evt.card;

	for(var id in this.playedMoves)
		if(!id) return;

	this.dispatchEvent(app.utils.MovesOnTableHandler.Events.MOVES_COMPLETE);
};


app.utils.MovesOnTableHandler.prototype.getWinner = function(){
	// TABLE LOGIC
	return app.managers.GameManager.Id.PLAYER;
};


app.utils.MovesOnTableHandler.prototype.collectTable = function(){
	Object.keys(this.playedMoves).forEach(function(id){
		var card = this.playedMoves[id];
		app.dm.collectCard(app.gm.cardplayers[id].retrieveCard(card));
		this.playedMoves[id] = null;
	});
};


app.utils.MovesOnTableHandler.Events = {
	MOVES_COMPLETE: 'moves-complete'
};