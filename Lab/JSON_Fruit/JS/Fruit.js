var data = [
    {name:"Apple", quanitiy:20, color:"red"},
    {name:"Orange", quanitiy:10, color:"orange"},
    {name:"Banana", quanitiy:15, color:"yellow"},
    {name:"Kiwi", quanitiy:5, color:"green"},
    {name:"Blueberry", quanitiy:5, color:"blue"},
    {name:"Grapes", quanitiy:10, color:"purple"}
];

window.onload = function() {
    initialize_circles_pointer();

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    //bar config
    var bar_height = 160;
    var start_y = 0;
    var maximum_quanitiy = 25;


    for (let i = 0; i < data.length; i++) {
        var width = data[i].quanitiy / maximum_quanitiy * canvas.width;
        context.fillStyle = data[i].color;
        context.fillRect(0, start_y, width, bar_height);
        context.fillStyle = "black";
        context.font = "20px Arial";
        context.fillText(data[i].name, 10, start_y + bar_height / 2);
        start_y += bar_height + 20;
    }
};  