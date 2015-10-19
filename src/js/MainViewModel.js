goog.provide('app.MainViewModel');
goog.require('app.base.ViewModel');
goog.require('app.managers.ViewManager');
goog.require('app.views.Table.View');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 */
app.MainViewModel = function(){	
	goog.base(this);

	app.vm.goToView(app.vf.createView(this, new app.views.Table.View()));

	this.exports.push({ref: 'vm', obj: app.vm});
	this.export();
};
goog.inherits(app.MainViewModel, app.base.ViewModel);


/**
 * 
 * @override
 */
app.MainViewModel.prototype.bindModelEvents = function(){	
	this.listeners = [];
};
