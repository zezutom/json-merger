/**
 * @author Tomas Zezula
 */
function test() {
	var mainNode = getInput('original');
	var newNode = getInput('update');
	var result = merge(mainNode, newNode);
	displayResult(result);	 
}

function displayResult(node) {
	var container = document.getElementById('merge');
	
	if (container) {
		var content = container.getElementsByTagName('textarea');
		
		if (content && content.length > 0) {
			var textArea = content[0];
			var str = JSON.stringify(eval('(' + textArea.value + ')'));
			textArea.value = JSON.stringify(str, undefined, 2);
		}		
	}
}

function getInput(id) {
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
}

function merge(mainNode, newNode) {
	for (var p in newNode) {
		if (newNode.hasOwnProperty(p)) {
			var jsonNode = mainNode[p];
			
			if (jsonNode)
				merge(jsonNode, newNode[p])
			else {
				// add as a new property to the main node
				mainNode[p] = newNode[p];
			}
		}
	}
	return mainNode;
}
