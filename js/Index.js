/// <reference path="jquery-1.7.2.min.js" />
var Width,Height = 0;
$(document).ready(function () {
    if (document.body.offsetWidth < screen.width) {
        window.moveTo(0, 0);
        window.resizeTo(window.screen.availWidth, window.screen.availHeight);
    }
    Width = document.documentElement.clientWidth;
    Height = document.documentElement.clientHeight - $(".p_topbx").height() - $(".p_bottom").height();
    $(".p_topbx,.p_center,#MFrame,.p_bottom").width(Width - 17);
    $("ul li").bind("click", function () {
        var xt = $(this).attr("xt");
        if (!$(this).hasClass("ss")) {
            $("ul li.ss").removeClass("ss").addClass("us");
            $(this).addClass("ss");
            var src = "page/";
            switch (xt) {
                case "1":
                    //首页
                    src += "Home.html";
                    $("#MFrame").attr("src", src);
                    break;
                case "2":
                    //新闻事件
                    src += "TimeAxis.html";
                    $("#MFrame").attr("src", src);
                    break;
                case "3":
                    //技术成果
                    src += "Skill.html";
                    $("#MFrame").attr("src", src);
                    break;
                case "4":
                    //成果展示
                    window.open("http://202.114.114.34:8878/panMap/Index.html");
                    break;
                case "5":
                    //示范应用
                    src += "Demo.html";
                    $("#MFrame").attr("src", src);
                    break;
                case "6":
                    //团队成员
                    src += "Team.html";
                    $("#MFrame").attr("src", src);
                    break;
            }
        }
    });
    $("ul li").eq(0).click();
    window.scrollTo(0, 0);
});