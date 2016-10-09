$(document).ready(function () {
    $("#bt1").click(function(){
        $("#bt2").removeClass();
        $(this).addClass("oldstyle1");
        $(".show_1").show();
        $(".show_2").hide();
    });
    $("#bt2").click(function(){
        $("#bt1").removeClass();
        $(this).addClass("oldstyle1");
        $(".show_2").show();
        $(".show_1").hide();
    });
});