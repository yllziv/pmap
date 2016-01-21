/// <reference path="jquery-1.7.2.min.js" />
$(document).ready(function () {
    Team.Init();
});
var Team = {
    Init: function () {
        this.Size();
    },
    Size: function () {
        if ($(".pbody").height() > parent.Height) {
            parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width - 17);
        } else {
            parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width);
        }
        $(".pbody").width(parent.$("#MFrame").width());
        parent.$("#MFrame").height($(".tdcybx").height() + $(".ptbt").height());
    }
};