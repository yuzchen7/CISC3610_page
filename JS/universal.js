function initialize_circles_pointer() {
    var mouse = document.getElementById("circle");

    set_deformation_by_class("click_able", "CLICK", mouse);
    set_deformation_by_class("input_able", "INPUT", mouse);
    set_deformation_by_class("play_able", "PLAY", mouse);

    document.onmousemove = function (e) {
        var x_offset = e.clientX;
        var y_offset = e.clientY;
        mouse.style.top = y_offset + "px";
        mouse.style.left = x_offset + "px";
    };
}

function set_deformation_by_class(classNameTag, stringText, mouse) {
    var inputObj = document.getElementsByClassName(classNameTag);
    for (var i = 0; i < inputObj.length; i++) {
        var obj = inputObj[i];
        obj.onmouseover = function () {
            mouse.style.width = 50 + "px";
            mouse.style.height = 50 + "px";
            mouse.value = stringText;
        };

        obj.onmouseout = function () {
            mouse.style.width = 25 + "px";
            mouse.style.height = 25 + "px";
            mouse.value = "";
        };
    }
}