function load(num) {
    var time = 1000;
    $("nav").slideUp(time);
    $("section, footer").fadeOut(time);
    if (num == 0) {
        $("#sec-0").delay(time).fadeIn(1.5*time);
        return;
    }
    if (num == "f") {
        $("footer").delay(time).fadeIn(time);
    }
    $("#bef-"+num).delay(time).fadeIn(time).delay(1000).fadeOut(time);
    $("#sec-"+num).delay(3*time+1000).fadeIn(1.5*time);
}

function get_num(an) {
    var anchor = an.split("-");
    var num = -1;
    if (anchor.length != 1 && anchor[1] != "") {
        num = anchor[1];
    }
    return num;
}

function get_anchor(e) {
    var anchor = document.location.hash;
    if (anchor != "") {
        load(get_num(anchor));
    }
}

$(document).ready(function() {
    $(window).bind("hashchange", get_anchor);
    get_anchor();

    $("#menu").click(function() {
        $("nav").slideToggle(1000);
        return false;
    });

    $("nav a").click(function() {
        $("nav").slideUp(1000);
        if (document.location.hash == $(this).attr("href")) {
            return false;
        }
    });

    $("body > a").click(function() {
        if (document.location.hash == "#sec-0") {
            return false;
        }
    });
});
