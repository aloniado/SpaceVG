/*
Graphics project 2018 - by Alon Laniado
Javascript file
*/
'use strict';

var flag = 1, audio;   //for pause/resume button
    
//audio:
audio = new Audio();
audio.src = "audio/spacemusic.mp3";
audio.loop = true;


//-------------------------------------------------------------------
$(document).ready(function () {
audio.play();
    

    //on click function:
    $('#startstop').on('click', function () {
        if (flag === 0) {    //animations are not running:
            //starting music
            audio.play();

            //starting animations:
            $('#space-text').css('animation-play-state', 'running');
            $('.space-text').css('animation-play-state', 'running');
            $('#text-stop1').css('animation-play-state', 'running');
            $('#text-stop2').css('animation-play-state', 'running');

            $('#star1').css('animation-play-state', 'running');
            $('#star2').css('animation-play-state', 'running');
            $('#star3').css('animation-play-state', 'running');
            $('#star4').css('animation-play-state', 'running');
            $('#star5').css('animation-play-state', 'running');
            $('#star6').css('animation-play-state', 'running');
            $('#star7').css('animation-play-state', 'running');

            $('#mainmoon').css('animation-play-state', 'running');
            $('#mp-rocket').css('animation-play-state', 'running');
            $('#mp-alien').css('animation-play-state', 'running');
            $('#mp-space-station').css('animation-play-state', 'running');

            $('.on').text('PAUSE');
            flag = 1;   //setting flag
        } else {        //if animations are running:
            
            audio.pause();  //pausing music
            
            $('#space-text').css('animation-play-state', 'paused');
            $('.space-text').css('animation-play-state', 'paused');
            $('#text-stop1').css('animation-play-state', 'paused');
            $('#text-stop2').css('animation-play-state', 'paused');

            $('#star1').css('animation-play-state', 'paused');
            $('#star2').css('animation-play-state', 'paused');
            $('#star3').css('animation-play-state', 'paused');
            $('#star4').css('animation-play-state', 'paused');
            $('#star5').css('animation-play-state', 'paused');
            $('#star6').css('animation-play-state', 'paused');
            $('#star7').css('animation-play-state', 'paused');

            $('#mainmoon').css('animation-play-state', 'paused');
            $('#mp-rocket').css('animation-play-state', 'paused');
            $('#mp-alien').css('animation-play-state', 'paused');
            $('#mp-space-station').css('animation-play-state', 'paused');
            //pausing animations:
            

            $('.on').text('RESUME');
            flag = 0;   //setting flag
        }

    });



    
    
    
    
});


