$(document).ready(function(){
    check_resize();
    //readWords( addWords );
    //get_words();
});

window.onresize = function(event) {
    check_resize();
}

function check_resize() {
    var width = $('#words').width();
    console.log(width);

    var perc = width / 14;
    
    $('#words').css('font-size',perc+'%');
}