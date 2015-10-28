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
	}, this);
};


app.utils.MovesOnTableHandler.prototype.recordMove = function(id, card){
	this.playedMoves[id] = card;

	var endTurn = true;

	Object.keys(this.playedMoves).forEach(function(pid){
		if(!this.playedMoves[pid]) endTurn = false;
	}, this);

	if(endTurn)	this.dispatchEvent(app.utils.MovesOnTableHandler.Events.MOVES_COMPLETE);

	return endTurn;
};


app.utils.MovesOnTableHandler.prototype.getWinner = function(){
	// TABLE LOGIC
	return app.managers.GameManager.Id.PLAYER;
};


app.utils.MovesOnTableHandler.prototype.collectTable = function(){
	Object.keys(this.playedMoves).forEach(function(id){
		this.playedMoves[id] = null;
	}, this);
};


app.utils.MovesOnTableHandler.Events = {
	MOVES_COMPLETE: 'moves-complete'
};