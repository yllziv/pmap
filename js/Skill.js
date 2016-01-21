/// <reference path="jquery-1.7.2.min.js" />
$(document).ready(function () {
    Skill.Init();
});
var Skill = {
    Init: function () {
        this.Size();
        $(".pttab li").bind("click", function () {
            var xt = $(this).attr("xt");
            if (!$(this).hasClass("ss")) {
                $(".pttab li.ss").removeClass("ss").addClass("us");
                $(this).removeClass("us").addClass("ss");
                $(".tabnr").hide();
                $(".tabnr[xt='" + xt + "']").show();
                Skill.Size();
            }
        });
        $(".pttab li").eq(0).click();
        $(".gjjscd li").bind("click", function () {
            var xt = $(this).attr("xt");
            if (!$(this).hasClass("ss")) {
                $(".gjjscd li.ss").removeClass("ss").addClass("us");
                $(this).removeClass("us").addClass("ss");
                $(".gjjsnr").hide();
                $(".gjjsnr[xt='" + xt + "']").show();
                Skill.Size();
            }
        });
        $(".gjjscd li").eq(0).click();
    },
    Size: function () {
        if ($(".pbody").height() > parent.Height) {
            parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width - 17);
        } else {
            parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width);
        }
        $(".pbody").width(parent.$("#MFrame").width());
        parent.$("#MFrame").height($(".tabnr[xt='" + $(".pttab li.ss").attr("xt") + "']").height() + $(".ptbt").height());
    }
};