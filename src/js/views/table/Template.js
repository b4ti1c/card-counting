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
	return '<ul data-bind="foreach: [1,2,3,4]">\
			    <li class="product" data-bind="text: $data">\
			    </li>\
			</ul>';
};