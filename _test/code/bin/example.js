(function (console) { "use strict";
var Main = function() {
	var hi = "Hello World";
	this.set_x(10);
	console.log(this.get_x());
};
Main.main = function() {
	var app = new Main();
};
Main.prototype = {
	get_x: function() {
		return this._x;
	}
	,set_x: function(value) {
		return this._x = value;
	}
};
})(typeof console != "undefined" ? console : {log:function(){}});
