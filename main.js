
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function () {

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function () {

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

});
let learn = document.getElementById("learnmore")
let adding = document.getElementById("add")
let remove = document.getElementById("removebtn")
function addcontent() {
    adding.innerHTML = " Your finger can tell you a lot aboutyour heart.Electrodes built into the Digital Crown and the back crystal work together with the ECG app to read your heart’s electrical signals. Simply touch the Digital Crown to generate an ECG waveform in just 30 seconds. The ECG app can indicate whether your heart rhythm shows signs of atrial fibrillation — a serious form of irregular heart rhythm — or sinus rhythm, which means your heart is beating in a normal pattern."
    remove.innerHTML = ""
}
