/// <reference path="jquery-1.7.2.min.js" />
$(document).ready(function () {
    Team.Init();
});
var Team = {
    XT:"0",
    Init: function () {
        this.Size();
        $(".sfbt").bind("click", function () {
            var xt = $(this).attr("xt");
            Team.XT = xt;
            $(".sfyybx").hide();
            $(".sfyybx[xt='" + xt + "']").show();
            parent.$("#MFrame").height($(".sfyybx[xt='" + xt + "']").height() + $(".ptbt").height());
            parent.window.scrollTo(0, 0);
        });
        $(".back").bind("click", function () {
            $(".sfyybx").hide();
            $(".sfyybx").eq(0).show();
            parent.$("#MFrame").height($(".sfyybx[xt='0']").height() + $(".ptbt").height());
        });
    },
    Size: function () {
        if ($(".pbody").height() > parent.Height) {
            parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width - 17);
        } else {
            parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width);
        }
        $(".pbody").width(parent.$("#MFrame").width());
        parent.$("#MFrame").height($(".sfyybx").height() + $(".ptbt").height());
    }
};