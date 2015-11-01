goog.provide('app.components.Cardplayer.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.Cardplayer.ViewModel = function(params, element){
	goog.base(this, params, element);

	this.cards = app.gm.cardplayers[this.id].cards;
	this.moveAllowed = ko.observable(false);

	this.madeMyMove = ko.observable(false);

	console.log(this.id, app.gm.aa.getBid(app.gm.cardplayers[this.id]));
};
goog.inherits(app.components.Cardplayer.ViewModel, app.base.ViewModel);


app.components.Cardplayer.ViewModel.prototype.bindModelEvents = function(){
	this.listeners.push(goog.events.listen(app.gm, app.managers.MoveManager.Events.TURN, this.onTurnEvent, false, this));
	this.listeners.push(goog.events.listen(app.gm, app.managers.MoveManager.Events.NEW_TURN, this.onNewTurn, false, this));
	this.listeners.push(goog.events.listen(this, app.components.Card.ViewModel.Events.CARD_MOVE, this.onCardMove, false, this));
};


app.components.Cardplayer.ViewModel.prototype.onTurnEvent = function(evt){
	this.moveAllowed(evt.id == this.id);
	if(this.moveAllowed()){
		console.log('My turn:', this.id);
		console.log(evt);
	}



	this.cards().forEach(function(card){
		if(!evt.firstMover) return card.validForMove(true);
		else {
			var hasSameColor = app.gm.cardplayers[this.id].askCard(evt.firstMover.card.color);

			if(hasSameColor != -1){
				if(card.color == evt.firstMover.card.color){
					var tableHasTrump = Object.keys(evt.tablestate).reduce(function(prev, curID){
						var playedMove = evt.tablestate[curID];
						if(playedMove && playedMove.color == app.gm.trump) return true;
						else return prev;
					}, false);

					if(tableHasTrump && card.color != app.gm.trump) return card.validForMove(true);

					var largestCardOnTable = evt.firstMover.card;

					Object.keys(evt.tablestate).forEach(function(id){
						var playedMove = evt.tablestate[id];
						if(playedMove && playedMove.color == largestCardOnTable.color && playedMove.number > largestCardOnTable.number)
							largestCardOnTable = playedMove;
					});

					var hasSameColorBiggerThan = app.gm.cardplayers[this.id].askCard(evt.firstMover.card.color, false, largestCardOnTable.number);

					if(hasSameColorBiggerThan != -1){
						if(card.number > largestCardOnTable.number)
							return card.validForMove(true);
					} else return card.validForMove(true);
				}
			} else {
				var hasTrump = app.gm.cardplayers[this.id].askCard(app.gm.trump);
				if(hasTrump != -1){
					if(card.color == app.gm.trump){
						var largestTrumpOnTable = null;

						Object.keys(evt.tablestate).forEach(function(id){
							var playedMove = evt.tablestate[id];
							if(playedMove && playedMove.color == app.gm.trump){
								if(!largestTrumpOnTable) largestTrumpOnTable = playedMove;
								else if(playedMove.number > largestTrumpOnTable.number)
									largestTrumpOnTable = playedMove;
							}
						});

						if(!largestTrumpOnTable) return card.validForMove(true);

						var hasTrumpBiggerThan = app.gm.cardplayers[this.id].askCard(app.gm.trump, false, largestTrumpOnTable.number);

						if(hasTrumpBiggerThan != -1){
							if(card.number > largestTrumpOnTable.number)
								return card.validForMove(true);
						} else return card.validForMove(true)
					}
				} else return card.validForMove(true);
			}

			return card.validForMove(false);
		}
	}, this);
};


app.components.Cardplayer.ViewModel.prototype.onCardMove = function(evt){
	evt.stopPropagation();

	this.madeMyMove(true);
	this.dispatchEvent({
		type: app.components.Cardplayer.Events.MAKE_MOVE,
		id: this.id,
		card: evt.card
	});
};


app.components.Cardplayer.ViewModel.prototype.onNewTurn = function(){
	this.madeMyMove(false);
};


app.components.Cardplayer.Events = {
	MAKE_MOVE: 'make-a-move'
};