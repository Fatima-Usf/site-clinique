$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();
});

$(document).ready(function ($) {
    var url = window.location.href;
    var activePage = url;
    $('.menu a').each(function () {
        var linkPage = this.href;
        if (activePage == linkPage) {
            $(this).closest("li").addClass("active");
        }
    });
});
