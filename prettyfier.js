Sprocket.registerModule('prettyfier', ['output'], function() {'use strict';

	return function() {
		Sprocket.registerSignals([{
			id : 'output.printed',
			func : function(id) {
				var container = document.getElementById(id);

				if (container) {
					var content = container.getElementsByTagName('textarea');

					if (content && content.length > 0) {
						var textArea = content[0];
						textArea.value = JSON.stringify(eval('(' + textArea.value + ')'), undefined, 4);
					}
				}
			}
		}]);
	};
}); 