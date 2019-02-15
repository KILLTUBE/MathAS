
textarea_fit_text = function (textarea) {    
    var numNewlines = 1;
    var str = textarea.value;
    for (var i=0; i<str.length; i++)
        if (str[i] == "\n")
            numNewlines++;
    textarea.style.height = (numNewlines * 16) + "px";
}

textarea_enable_tab_indent = function (textarea) {    
    textarea.onkeydown = function(e) {
        if (e.keyCode == 9 || e.which == 9){
            e.preventDefault();
            var oldStart = this.selectionStart;
            var before   = this.value.substring(0, this.selectionStart);
            var selected = this.value.substring(this.selectionStart, this.selectionEnd);
            var after    = this.value.substring(this.selectionEnd);
            this.value = before + "    " + selected + after;
            this.selectionEnd = oldStart + 4;
        }
    }
}