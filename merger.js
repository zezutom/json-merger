Sprocket.registerModule('merger', ['menu'], function() {'use strict';

	return function() {
		Sprocket.registerSignals([{
			id : 'menu.merge',
			func : function() {
				var get = function(id) {
					var container = document.getElementById(id);
					var input = {};

					if (container) {
						var content = container.getElementsByTagName('textarea');

						if (content && content.length > 0) {
							var str = content[0].value;
							str = JSON.stringify(eval('(' + str + ')'));
							input = JSON.parse(str);
						}

					}
					return input;
				};

				var merge = function(original, updated) {
					for (var p in updated) {
						if (original.hasOwnProperty(p)) {
							var jsonNode = original[p];

							if (jsonNode)
								merge(jsonNode, updated[p])
							else {
								// add as a new property to the main node
								original[p] = updated[p];
							}
						}
					}
					return original;
				};
				Sprocket.sendSignal('merger.merged', merge(get('original'), get('update')));
			}
		}]);
	};
}); 