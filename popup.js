window.onload = function() {
 	document.getElementById('magicbox').focus();
};

document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function() {

		var cutTextarea = document.querySelector('.imHidden'); 

		var text = document.getElementById('magicbox').value;

		var outText = "";

		for (var i = 0, len = text.length; i < len; i++) {
			outText += text[i] + " ";
		}

		for (var i = 1, len = text.length; i < len; i++) {
			outText += "\n" + text[i];
		}

		document.getElementById('hidden').value = outText;
 
		cutTextarea.select();

		document.execCommand('copy');

		window.close();

	}, false);
}, false);

