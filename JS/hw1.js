window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //sky
    fill_sky(canvas, ctx);

    //ground
    fill_ground(canvas, ctx);

    //sun
    fill_sum(canvas, ctx);

    //house
    fill_house(canvas, ctx);

    // make 4 clouds
    for (var i = 0; i < 4; i++) {
        var x_max = canvas.width / 2 + 100;
        var x_min = 50;
        var x = Math.floor(Math.random() * (x_max - x_min + 1) + x_min);
        fill_cloud(ctx, x);
    }

    fill_river(canvas, ctx);

    // make 4 tree
    for (var i = 0; i < 4; i++) {
        // Math.random() * (max - min + 1) + min
        var x_max = canvas.width / 2 + 100;
        var x_min = 50;
        var x = Math.floor(Math.random() * (x_max - x_min + 1) + x_min);
        fill_tree(ctx, x);
    }

    // make 15 grass
    for (var i = 0; i < 15; i++) {
        // Math.random() * (max - min + 1) + min
        var x_max = canvas.width / 2 + 100;
        var x_min = 50;
        var x = Math.floor(Math.random() * (x_max - x_min + 1) + x_min);

        var y_max = canvas.height;
        var y_min = canvas.height / 2 + 80;
        var y = Math.floor(Math.random() * (y_max - y_min + 1) + y_min);
        fill_grass(ctx, x, y);
    }

    fill_text(ctx, "CISC3610 HW1");

    ctx.closepath();
};

/**
 * Draw the sky color(background color) with sky blue and 
 * Linear Gradient to the white
*/
function fill_sky(canvas, ctx) {
    ctx.beginPath();
    var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, "skyblue");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

/**
 * Draw the ground color with light green color
*/
function fill_ground(canvas, ctx) {
    ctx.beginPath();
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0, canvas.height / 2 + 70, canvas.width, canvas.height);
};

/**
 * Draw the sum with red, located in the left up corner
*/
function fill_sum(canvas, ctx) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + 250, 40, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
};

/**
 * Draw single cloud with white
*/
function fill_cloud(ctx, x) {
    ctx.beginPath();
    ctx.arc(x, 40, 10, 0, 2 * Math.PI);
    ctx.arc(x - 10, 40 + 3, 10, 0, 2 * Math.PI);
    ctx.arc(x + 10, 40 + 3, 10, 0, 2 * Math.PI);
    ctx.arc(x + 15, 40 + 10, 10, 0, 2 * Math.PI);
    ctx.arc(x - 15, 40 + 10, 10, 0, 2 * Math.PI);
    ctx.arc(x, 40 + 10, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
};

/**
 * Draw single tree with white
*/
function fill_tree(ctx, x) {
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(x, canvas.height / 2 + 40, 20, 50);
    
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(x + 10, canvas.height / 2 + 30, 40, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.stroke();
};

/**
 * Draw single house with assets(a image source)
*/
function fill_house(canvas, ctx) {
    ctx.beginPath();
    let img = document.createElement("img");
    img.src = "/Assets/house.png";
    console.log(img);
    img.onload = function () {
        ctx.drawImage(img, canvas.width / 2 + 130, canvas.height / 2 - 10, 100, 100);
    }
};

/**
 * Draw single river with blue color
*/
function fill_river(canvas, ctx) {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(canvas.width / 2 + 220, canvas.height / 2 + 70, 30, canvas.height);
};

/**
 * Draw the text(string) with 20px Arial font
*/
function fill_text(ctx, string) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(string, 10, 20);
};

/**
 * Draw a single grass with green color
*/
function fill_grass(ctx, x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 5, y - 15);
    ctx.lineTo(x + 5, y - 5);
    ctx.lineTo(x + 10, y - 25);
    ctx.lineTo(x + 15, y - 5);
    ctx.lineTo(x + 25, y - 15);
    ctx.lineTo(x + 20, y);
    ctx.closePath();
    ctx.fillStyle = "green"
    ctx.fill();
    ctx.stroke();
};