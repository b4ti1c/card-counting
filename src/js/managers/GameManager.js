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
	this.setTrump(app.models.Card.Color.SPADE);

	this.cpu = {};
	this.cpu['left'] = new app.models.Hand();
	this.cpu['top'] = new app.models.Hand();
	this.cpu['right'] = new app.models.Hand();
	this.player = new app.models.Hand();

	this.init();
};
goog.inherits(app.managers.GameManager, app.base.Manager);
goog.addSingletonGetter(app.managers.GameManager);


app.managers.GameManager.prototype.init = function(){
	app.dm.shuffle();

	while(app.dm.deck.cards.length){
		this.cpu['left'].load(app.dm.getCard());
		this.cpu['top'].load(app.dm.getCard());
		this.cpu['right'].load(app.dm.getCard());
		this.player.load(app.dm.getCard());
	}

	this.mm.init();
};


app.managers.GameManager.prototype.restart = function(){
	while(this.player.cards().length) app.dm.collectCard(this.player.cards.pop());
	while(this.cpu['left'].cards().length) app.dm.collectCard(this.cpu['left'].cards.pop());
	while(this.cpu['top'].cards().length) app.dm.collectCard(this.cpu['top'].cards.pop());
	while(this.cpu['right'].cards().length) app.dm.collectCard(this.cpu['right'].cards.pop());

	this.init();
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