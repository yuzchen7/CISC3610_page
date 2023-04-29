var current_play_index = -1;
var current_play_Obj = null;
var counter = 0;
var current_state = false; // true if is playing

window.onload = function() {
    initialize_circles_pointer();

    var audio_src = document.getElementsByClassName("audio");
    var audio_div = document.getElementsByClassName("play_able");
    var resume_play = document.getElementById("resume_play");
    var prev_music = document.getElementById("prev_music");
    var next_music = document.getElementById("next_music");
    var total_music = audio_src.length;

    for (var i = 0; i < audio_div.length; i++) {
        var divObj = audio_div[i];
        
        divObj.onclick = function() {
            var index = parseInt(this.name);
            // console.log(index)

            // pause if current is playing
            if (current_play_index == index) {
                audio_src[current_play_index].pause();
                resume_play.src = "Assets/resume.png";
                return;
            }

            if (current_play_index == -1) {
                current_play_index = index;
            }

            current_play_Obj = audio_src[current_play_index];

            console.log(current_play_Obj);
            if (current_play_Obj != null) {
                current_play_Obj.pause();
                current_play_Obj.currentTime = 0;
            }

            current_play_index = index;
            resume_play.src = "Assets/play.png";
            current_state = true;
            audio_src[current_play_index].play();
        };
    }

    resume_play.onclick = function() {
        if (current_state == true) {
            current_play_Obj.pause();
            current_state = false;
            resume_play.src = "Assets/resume.png";
        } else {
            if (current_play_index == -1) {
                current_play_index = 0;
                current_play_Obj = audio_src[current_play_index];
            }
            current_play_Obj.play();
            current_state = true;
            resume_play.src = "Assets/play.png";
        }

    };

    prev_music.onclick = function() {
        current_play_Obj.pause();
        current_play_Obj.currentTime = 0;

        current_play_index -= 1;
        if (current_play_index < 0) {
            current_play_index = 0
        }
        // console.log(current_play_index);

        current_play_Obj = audio_src[current_play_index];
        current_play_Obj.play();
    };

    next_music.onclick = function() {
        current_play_Obj.pause();
        current_play_Obj.currentTime = 0;

        current_play_index += 1;
        if (current_play_index >= total_music) {
            current_play_index = total_music - 1;
        }
        // console.log(current_play_index);

        current_play_Obj = audio_src[current_play_index];
        current_play_Obj.play();
    }

};