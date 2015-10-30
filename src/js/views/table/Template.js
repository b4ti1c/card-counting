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
			<!-- ko component: {name: \'tablecenter-component\', params: {parent: $data, cards: app.gm.mm.tablecenter.cards}} --><!-- /ko -->\
			<!-- ko component: {name: \'cpu-component\', params: {parent: $data, id: app.managers.GameManager.Id.CPU_LEFT }}--><!-- /ko -->\
			<!-- ko component: {name: \'cpu-component\', params: {parent: $data, id: app.managers.GameManager.Id.CPU_TOP }}--><!-- /ko -->\
			<!-- ko component: {name: \'cpu-component\', params: {parent: $data, id: app.managers.GameManager.Id.CPU_RIGHT }}--><!-- /ko -->\
			<!-- ko component: {name: \'player-component\', params: {parent: $data, id: app.managers.GameManager.Id.PLAYER }} --><!-- /ko -->\
			<redeal data-bind="click: redeal">Deal!</redeal>\
			</cardtable>';
};