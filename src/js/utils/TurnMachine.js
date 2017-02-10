goog.provide('app.utils.TurnMachine');
goog.require('app.base.EventTarget');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.utils.TurnMachine = function() {
    goog.base(this);

    this.turns = Object.keys(app.managers.GameManager.Id).map(function(key){
    	return app.managers.GameManager.Id[key];
    });
};
goog.inherits(app.utils.TurnMachine, app.base.EventTarget);


/**
 * 
 * @param  {app.managers.GameManager.Id} auctionWinner [description]
 */
app.utils.TurnMachine.prototype.init = function(auctionWinner) {
	while(this.turns[0] != auctionWinner) this.endTurn();
};


app.utils.TurnMachine.prototype.endTurn = function(){
	this.turns.push(this.turns.shift());
	return this.whoseTurn();
};


app.utils.TurnMachine.prototype.whoseTurn = function(){
	return this.turns[0];
};