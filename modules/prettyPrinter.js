/**
 * @author Tomas Zezula
 */
var PrettyPrinter = function(sandbox) {
	return {
		init: function() {
			var me = this;
			sandbox.subscribe('userInputContainer.init', function() {me.decorate('original'), me.decorate('update')});
		},
		destroy: function() {
			alert("merge output destroy");
		},
		decorate: function(containerId) {
			var container = document.getElementById(containerId);
			
			if (container) {
				var content = container.getElementsByTagName('textarea');
				
				if (content && content.length > 0) {
					var textArea = content[0]; 
					textArea.value = JSON.stringify(eval('(' + textArea.value + ')'), undefined, 2);
				}		
			}			
		}
	}	
}
