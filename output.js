Sprocket.registerModule('output', ['merger'], function() {'use strict';

	return function() {
		Sprocket.registerSignals([{
			id : 'merger.merged',
			func : function(node) {
				var container = document.getElementById('merge');

				if (container) {
					var content = container.getElementsByTagName('textarea');

					if (content && content.length > 0) {
						var textArea = content[0];
						textArea.value = JSON.stringify(node, undefined, 2);
					}
				}
				Sprocket.sendSignal('output.printed', 'merge');
			}
		}]);
	};
}); 