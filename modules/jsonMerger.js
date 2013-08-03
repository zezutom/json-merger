/**
 * @author Tomas Zezula
 */
var JsonMerger = function(sandbox) {
	return {
		init: function() {
			var me = this;
			sandbox.subscribe('menu.mergePress', function() {
				var mainNode = me.getInput('original');
				var newNode = me.getInput('update');							
				var mergedNode = me.merge(mainNode, newNode);
				sandbox.publish('jsonMerger.mergeDone', mergedNode, true);
			});
		},
		destroy: function() {
			alert("menu destroy");
		},
		getInput: function(id) {
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
		},		
		merge: function(mainNode, newNode) {
			for (var p in newNode) {
				if (newNode.hasOwnProperty(p)) {
					var jsonNode = mainNode[p];
					
					if (jsonNode)
						this.merge(jsonNode, newNode[p])
					else {
						// add as a new property to the main node
						mainNode[p] = newNode[p];
					}
				}
			}
			return mainNode;			
		}
	}	
}