// Your code here!

window.onload = function () {
    document.getElementById("button").onclick = function (evt) {
        sayHello();
    }

    document.getElementById("button").onmouseover = function(evt) {
        onHover();
    }
}

function sayHello() {
    var messageDialog = new Windows.UI.Popups.MessageDialog("Hello, world!", "Alert");
    messageDialog.showAsync();
}

function onHover() {
    var messageDialog = new Windows.UI.Popups.MessageDialog("Mouse hovered", "Mouse");
    messageDialog.showAsync();
}