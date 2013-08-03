/**
 * @author Tomas Zezula
 */

var Menu = function(sandbox) {
	return {
		init: function() {
			sandbox.subscribe('userInputContainer.init', this.onMergePress);	
		},
		destroy: function() {
			alert("menu destroy");
		},
		onMergePress: function() {
			var mergeBtn = document.getElementById('mergeBtn');
			mergeBtn.onclick = function() {sandbox.publish('menu.mergePress', null, true);};
		}
	}	
}
