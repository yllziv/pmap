/// <reference path="jquery-1.7.2.min.js" />
$(document).ready(function () {
    parent.$("#MFrame").height($(".pbody").height());
    if ($(".pbody").height() > parent.Height) {
        parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width - 17);
    } else {
        parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width);
    }
    var left = Math.floor((parent.$("#MFrame").width() - 1200) / 2);
    //$(".pbody").css("margin-left", Math.floor((parent.$("#MFrame").width() - 1200) / 2) + "px");
    $(".pbody").width(parent.$("#MFrame").width());
    $(".slideInner").slide({
        slideContainer: $('.slideInner a'),
        effect: 'easeOutCirc',
        autoRunTime: 5000,
        slideSpeed: 1000,
        nav: true,
        autoRun: true,
        prevBtn: $('a.prev'),
        nextBtn: $('a.next')
    });
    $("ul.qxwzdt li").bind("click", function () {
        var xt = $(this).attr("xt");
        if (!$(this).hasClass("ss")) {
            $(".dtxx").hide();
            $("ul.qxwzdt li.ss").addClass("us").removeClass("ss");
            $(this).addClass("ss").removeClass("us");
            $(".dtxx[xt='" + xt + "']").show();
        }
    });
    $("ul.qxwzdt li").eq(0).click();
    $("ul.cgzs li").bind("click", function () {
        var xt = $(this).attr("xt");
        if (!$(this).hasClass("ss")) {
            $(".cgzsxx").hide();
            $("ul.cgzs li.ss span").css("color", "#333");
            $("ul.cgzs li.ss").addClass("us").removeClass("ss");
            $(this).addClass("ss").removeClass("us");
            $(this).find("span").css("color", "#108cee");
            $(".cgzsxx[xt='" + xt + "']").show();
        }
    });
    $("ul.cgzs li").eq(0).click();
    //$(".sfleft").bind("click", function () {
    //    if (parseInt($(".sfslide").css("margin-left")) < 0) {
    //        $(".sfslide").animate({ "margin-left": "+=390px" }, 100);
    //    }
    //});
    //$(".sfright").bind("click", function () {
    //    if (parseInt($(".sfslide").css("margin-left")) > -750) {
    //        $(".sfslide").animate({ "margin-left": "-=390px" }, 100);
    //    }
    //});
    $(".fancybox").fancybox({
        fitToView: false,
        content: '<span></span>', // create temp content
        scrolling: 'no',
        afterLoad: function () {
            var $width = 1000; // get dimensions from data attributes
            var $height = 600;
            var href = $(this).attr("href");
            this.content = "<embed src='../video/player.swf?file=" + href + "&autostart=true&amp;wmode=opaque' type='application/x-shockwave-flash' width='" + $width + "' height='" + $height + "'></embed>"; // replace temp content
            //this.content = "<embed src='player.swf?file=" + this.href + "&autostart=true&amp;wmode=opaque' type='application/x-shockwave-flash' width='" + $width + "' height='" + $height + "'></embed>"; // replace temp content
        }
    });
    $(".vfleft").bind("click", function () {
        if (parseInt($(".vfslide").css("margin-left")) < 0) {
            $(".vfslide").animate({ "margin-left": "+=395px" }, 100);
        }
    });
    $(".vfright").bind("click", function () {
        if (parseInt($(".vfslide").css("margin-left")) > -790) {
            $(".vfslide").animate({ "margin-left": "-=395px" }, 100);
        }
    });
});