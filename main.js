Sprocket.require('menu', function(menu) {
	menu();
});

Sprocket.require('merger', function(merger) {
	merger();
});

Sprocket.require('output', function(output) {
	output();
});

Sprocket.require('prettyfier', function(prettyfier) {
	prettyfier();
});

Sprocket.registerSignals([{
	id: 'menu.reset',
	func: function() {
		location.reload();
	}
}]);

Sprocket.sendSignal('output.printed', 'original');
Sprocket.sendSignal('output.printed', 'update');



