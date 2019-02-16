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

Test.prototype.run = function() {
	var ret = textarea_eval(this.textarea);
	this.td_b.innerHTML = ret;
	if (typeof ret == "boolean" && ret == true) {
		this.table.style.borderColor = "lime";
	} else {
		this.table.style.borderColor = "red";
	}
}

function tests_init() {
	var tags_test = document.getElementsByTagName("test-js");
	
	window.tests = [];
	
	for (var test of tags_test) {
	
	
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
		test_.table     = table;
		test_.tr        = tr;
		test_.td_a      = td_a;
		test_.td_b      = td_b;
		test_.td_c      = td_c;
		test_.textarea  = textarea;
		test_.button    = button;
		window.tests.push(test_);
		
		textarea.value = code;
		textarea_fit_text(textarea);
		
		button.innerText = ">";
		button.onclick = function(e) {
			this.run();
		}.bind(test_);

		textarea.onkeydown = function(e) {
			var textarea = e.target;
			if (e.keyCode == 9 || e.which == 9) {
				e.preventDefault();
				var oldStart = textarea.selectionStart;
				var before   = textarea.value.substring(0, textarea.selectionStart);
				var selected = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
				var after    = textarea.value.substring(textarea.selectionEnd);
				textarea.value = before + "\t" + selected + after;
				textarea.selectionEnd = oldStart + 1;
			}
			
			if (e.ctrlKey && e.key == "Enter") {
				this.run();
			}
		}.bind(test_);	
	}
	
	for (var test of tests)
		test.run()
}
