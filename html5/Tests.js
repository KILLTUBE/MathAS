/*
	// this isn't really useful for anything yet
	class TestJS extends HTMLElement {
		constructor() {
			super();
			console.log("Construct TestJS");
		}
	}
	window.customElements.define("test-js", AsTest);
*/

function textarea_eval(textarea) {
	try {
		var ret = eval(textarea.value);
		return ret;
	} catch (exception) {
		return exception;
		
		// todo: this isnt nice yet
		var msg = exception.stack;
		msg.replace(/\n/g, '<br>');
		return msg;
	}
}

function Test() {
	
}

function tests_init() {
	var tests = document.getElementsByTagName("test-js");
	
	window.tests = [];
	
	for (var test of tests) {
	
	
		var code = test.innerHTML;
		
		test.innerHTML = "";
		
		code = code.replace(new RegExp("&amp;"  , "g"), '&');
		code = code.replace(new RegExp("&lt;"   , "g"), '<');
		code = code.replace(new RegExp("&gt;"   , "g"), '>');
		code = code.replace(new RegExp("&quot;" , "g"), '"');
		code = code.replace(/\r\n/g, '\n');
		code = code.replace(/^\t+/mg, ''); // remove all tabs from line beginnings (todo: keep intendation)
		code = code.replace(/^\n/mg, ''); // remove empty lines
		
		var table    = document.createElement("table");
		var tr       = document.createElement("tr");
		var td_a     = document.createElement("td");
		var td_b     = document.createElement("td");
		var td_c     = document.createElement("td");
		var textarea = document.createElement("textarea");
		var button   = document.createElement("button");
		
		// oh wey
		test .appendChild(table   );
		table.appendChild(tr      );
		tr   .appendChild(td_a    );
		tr   .appendChild(td_b    );
		tr   .appendChild(td_c    );
		td_a .appendChild(textarea); // textarea left
		td_c .appendChild(button  ); // button right, output is middle one (td_b)
		
		td_a.classList.add("testcode");
		td_b.classList.add("testresult");
		td_c.classList.add("testbutton");
	
		var test_ = new Test();
		test_.textarea = textarea;
		test_.button = button;
		test_.td_a = td_a;
		test_.td_b = td_b;
		test_.td_c = td_c;
		window.tests.push(test_);
		
		textarea.value = code;
		textarea_fit_text(textarea);
		
		button.innerText = ">";
		button.onclick = function(e) {
			var textarea = this.textarea;
			var td_b = this.td_b;
			td_b.innerHTML = textarea_eval(textarea);
		}.bind({textarea, td_b});
		
		// same as in onclick, todo: refactor into nice class
		td_b.innerHTML = textarea_eval(textarea);
		
		
		textarea.onkeydown = function(e) {
			var textarea = this.textarea;
			var td_b = this.td_b;
			
			if (e.keyCode == 9 || e.which == 9){
				e.preventDefault();
				var oldStart = this.selectionStart;
				var before   = this.value.substring(0, this.selectionStart);
				var selected = this.value.substring(this.selectionStart, this.selectionEnd);
				var after    = this.value.substring(this.selectionEnd);
				this.value = before + "    " + selected + after;
				this.selectionEnd = oldStart + 4;
			}
			
			if (e.ctrlKey && e.key == "Enter") {
				td_b.innerHTML = textarea_eval(textarea);
			}
			
			//console.log(e)
		}.bind({textarea, td_b});	
	}
}
