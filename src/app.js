import 'bootstrap';
import $ from 'jquery';
import './scss/style.scss';


var audio = new Audio();

$(document).ready(function() {

    $('button').on('click', function(e) {

        var url = $(this).data('src');
        if (audio.duration > 0 && !audio.paused) {
            audio.pause();
        }
        audio.src = url;
        audio.play()
    });

});
