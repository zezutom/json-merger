/**
 * @author Tomas Zezula
 */

var MergeOutputContainer = function(sandbox) {
	return {
		init: function() {
			sandbox.subscribe('jsonMerger.mergeDone', this.displayMergedNode);
		},
		destroy: function() {
			alert("merge output destroy");
		},
		displayMergedNode: function(node) {
			var container = document.getElementById('merge');
			
			if (container) {
				var content = container.getElementsByTagName('textarea');
				
				if (content && content.length > 0) {
					var textArea = content[0];
					textArea.value = JSON.stringify(node, undefined, 2);
				}		
			}
		}
	}	
}
