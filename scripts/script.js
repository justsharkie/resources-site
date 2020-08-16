function unCheck() {
    var inputs = document.querySelectorAll('.uncheck');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    };
}