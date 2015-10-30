goog.provide('app.utils.MovesOnTableHandler');
goog.require('app.base.EventTarget');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.utils.MovesOnTableHandler = function() {
    goog.base(this);

    this.firstMover = null;

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
	if(!this.firstMover) 
		this.firstMover = {
			id: id,
			color: card.color
		};

	this.playedMoves[id] = card;

	var endTurn = true;

	Object.keys(this.playedMoves).forEach(function(pid){
		if(!this.playedMoves[pid]) endTurn = false;
	}, this);

	if(endTurn)	this.dispatchEvent(app.utils.MovesOnTableHandler.Events.MOVES_COMPLETE);

	return endTurn;
};


app.utils.MovesOnTableHandler.prototype.getWinner = function(){
	var winner = this.firstMover.id;

	Object.keys(this.playedMoves).forEach(function(id){
		var candidateCard = this.playedMoves[id];
		var winnerCard = this.playedMoves[winner];

		if(winnerCard.color == app.gm.trump){
			if(candidateCard.color == app.gm.trump && candidateCard.number > winnerCard.number)
				winner = id;
		} else {
			if(candidateCard.color == app.gm.trump)
				winner = id;
			else if(candidateCard.color == this.firstMover.color && candidateCard.number > winnerCard.number)
				winner = id;
		}

	}, this);

	// TABLE LOGIC
	return winner;
};


app.utils.MovesOnTableHandler.prototype.collectTable = function(){
	Object.keys(this.playedMoves).forEach(function(id){
		this.playedMoves[id] = null;
	}, this);

	this.firstMover = null;
};


app.utils.MovesOnTableHandler.Events = {
	MOVES_COMPLETE: 'moves-complete'
};