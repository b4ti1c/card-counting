goog.provide('app.views.Table.Template');
goog.require('app.base.Template');



/**
 * @constructor
 * @extends {app.base.Template}
 * 
 */
app.views.Table.Template = function(){
	goog.base(this);
};
goog.inherits(app.views.Table.Template, app.base.Template);


/**
 * 
 * @override
 */
app.views.Table.Template.prototype.templates_base = function(){
	return '<cardtable>\
			<!-- ko component: {name: \'cpu-component\', params: {id: app.managers.GameManager.Id.CPU_LEFT, position: \'left\'}}--><!-- /ko -->\
			<!-- ko component: {name: \'cpu-component\', params: {id: app.managers.GameManager.Id.CPU_TOP, position: \'top\'}}--><!-- /ko -->\
			<!-- ko component: {name: \'cpu-component\', params: {id: app.managers.GameManager.Id.CPU_RIGHT, position: \'right\'}}--><!-- /ko -->\
			<!-- ko component: \'player-component\' --><!-- /ko -->\
			<redeal data-bind="click: redeal">Deal!</redeal>\
			</cardtable>';
};