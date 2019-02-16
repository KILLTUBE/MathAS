
textarea_fit_text = function (textarea) {    
    var numNewlines = 1;
    var str = textarea.value;
    for (var i=0; i<str.length; i++)
        if (str[i] == "\n")
            numNewlines++;
    textarea.style.height = (numNewlines * 16) + "px";
}

