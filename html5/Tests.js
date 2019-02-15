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

function tests_init() {
	tests = document.getElementsByClassName("tests");
	for (var test of tests) {
		test_table = test.children[0];
		test_tbody = test_table.children[0];
		for (var test_tr of test_tbody.children) {
			if (test_tr.children.length != 1) {
				continue;
			}
			var td_code = test_tr.children[0];
			var td_expect = test_tr.children[1];
			var code = td_code.innerHTML;
			td_code.innerHTML = "";
			code = code.replace(/\r\n/g, '\n');
			code = code.replace(/^\t+/mg, ''); // remove all tabs from line beginnings (todo: keep intendation)
			code = code.replace(/^\n/mg, ''); // remove empty lines
			var textarea = document.createElement("textarea");
			textarea.value = code;
			textarea_fit_text(textarea);
			textarea_editorize(textarea);
			td_code.appendChild(textarea);
			
			var evaled_td = document.createElement("td");
			test_tr.appendChild(evaled_td);
			
			
			var eval_td = document.createElement("td");
			var eval_button = document.createElement("button");
			eval_td.appendChild(eval_button);
			test_tr.appendChild(eval_td);
			eval_button.innerText = ">";
			eval_button.onclick = function(e) {
				var textarea = this.textarea;
				var evaled_td = this.evaled_td;
				evaled_td.innerHTML = textarea_eval(textarea);
			}.bind({textarea, evaled_td});
			
			// same as in onclick, todo: refactor into nice class
			evaled_td.innerHTML = textarea_eval(textarea);
		}	
	}
}
