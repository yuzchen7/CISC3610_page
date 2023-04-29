Frame.start = function() {
    Frame.canvas = document.getElementById("canvas");
    Frame.canvasContext = Frame.canvas.getContext("2d");

    var bubble = new Image();
    bubble.src = "Assets/Square_Speech_bubble.png";
    Frame.bubble = bubble;

    Frame.mainloop()
}

Frame.clearScreen = function() {
    Frame.canvasContext.fillStyle = "white";
    Frame.canvasContext.fillRect(0, 0, Frame.canvas.width, Frame.canvas.height);
}

Frame.updateFrame = function() {
    Frame.currentFrameCount += 1;
    Frame.currentFrameCount = Frame.currentFrameCount % Frame.totalFrameCount;
}

Frame.draw = function(img, currentFrame) {
    Frame.canvasContext.drawImage(img, currentFrame.framSize.x, currentFrame.framSize.x);
}

Frame.drawBubble = function(img) {
    Frame.canvasContext.save();
    Frame.canvasContext.drawImage(img, 20, 5, 360, 100);
    Frame.canvasContext.fillStyle = "black";
    Frame.canvasContext.font = "25px Arial";
    Frame.canvasContext.fillText("10 moras pre fortune-telling", 45, 50);
    Frame.canvasContext.restore();
}

Frame.mainloop = function() {
    var currentMonaFrame = monaFrame[Frame.currentFrameCount];
    var currentMonaFrameImg = new Image();
    currentMonaFrameImg.src = currentMonaFrame.filename;

    currentMonaFrameImg.onload = function() {
        Frame.clearScreen();
        Frame.updateFrame();
        Frame.draw(currentMonaFrameImg, currentMonaFrame);
        Frame.drawBubble(Frame.bubble);
        window.setTimeout(Frame.mainloop, 1000 / 15);
    };
}

window.onload = function() {
    initialize_circles_pointer();
    Frame.start();
}