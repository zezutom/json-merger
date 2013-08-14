Sprocket.registerModule('menu', [], function() {'use strict';

	return function() {
		document.getElementById('mergeBtn').onclick = function() {
			Sprocket.sendSignal('menu.merge');
		};
		document.getElementById('resetBtn').onclick = function() {
			Sprocket.sendSignal('menu.reset');
		};
		
	};
});
