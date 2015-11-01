goog.provide('app.utils.AuctionAnalyzer');
goog.require('app.base.EventTarget');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.utils.AuctionAnalyzer = function() {
    goog.base(this);
};
goog.inherits(app.utils.AuctionAnalyzer, app.base.EventTarget);


app.utils.AuctionAnalyzer.prototype.getBid = function(hand){
	var points = this.analyzeHand(hand);
	var bidNum = Math.floor((points + 2) / 3);
	return bidNum;
};


app.utils.AuctionAnalyzer.prototype.analyzeHand = function(hand){
	return this.computeHonorPoints(hand) + this.computeSecondaryPoints(hand);
};


app.utils.AuctionAnalyzer.prototype.computeHonorPoints = function(hand){
	var honorCards = hand.cards().filter(function(card){
		return card.number > app.models.Card.Number['10'];
	});


	var honorPoints = honorCards.reduce(function(prev, card){
		var point = app.utils.AuctionAnalyzer.HonorPoints[app.models.Card.ReverseMap[card.number]];
		
		var sameColor = hand.askColor(card.color);
		if(sameColor.length == 1) point = point / 3;
		if(sameColor.length == 2) point = point / 2;

		return prev + point; 
	}, 0);

	return honorPoints;
};


app.utils.AuctionAnalyzer.prototype.computeSecondaryPoints = function(hand){
	var secondaryPoints = 0;
	var alreadyHas5orMore = false;

	Object.keys(app.models.Card.Color).forEach(function(key){
		var color = app.models.Card.Color[key];

		var sameColor = hand.askColor(color);

		secondaryPoints += app.utils.AuctionAnalyzer.SecondaryPoints[sameColor.length];
	});

	return secondaryPoints;
};


app.utils.AuctionAnalyzer.HonorPoints = {
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0,
	7: 0,
	8: 0,
	9: 0,
	10: 0,
	J: 1,
	Q: 2,
	K: 3,
	A: 4
};


app.utils.AuctionAnalyzer.SecondaryPoints = {
	0: 3,
	1: 2,
	2: 1,
	3: 0,
	4: 0,
	5: 1,
	6: 2,
	7: 3,
	8: 4,
	9: 5,
	10: 6,
	11: 7,
	12: 8,
	13: 9
};