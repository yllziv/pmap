/// <reference path="jquery-1.7.2.min.js" />
$(document).ready(function () {
    Time.Init();
});

var Time = {
    Init: function () {
        this.Size();
        this.InitTime();
    },
    Size: function () {
        if ($(".pbody").height() > parent.Height) {
            parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width - 17);
        } else {
            parent.$(".p_topbx,.p_center,#MFrame,.p_bottom").width(parent.Width);
        }
        $(".pbody").width(parent.$("#MFrame").width());
        parent.$("#MFrame").height($(".sgzbx").height() + $(".ptbt").height() + 90);
    },
    InitTime: function () {
        var htmls = '';
        for (var i = 0; i < TimeYear.length; i++) {
            htmls += '<div class="pyearbx"';
            if (i == 0) {
                htmls += ' style = "margin-top:0px;"';
            }
            htmls += '><div class="year close">' + TimeYear[i] + '</div></div>';
            htmls += '<div class="pyearnr" xt="' + TimeYear[i] + '">';
            for (var x = 0; x < TimeData[TimeYear[i]].length; x++) {
                htmls += '<div class="sjtr">';
                if (x % 2 == 0) {
                    htmls += '<div class="sjbtz"><span>' + TimeData[TimeYear[i]][x].rq + '</span></div>';
                    htmls += '<div class="yx1"></div>';
                    htmls += '<div class="nry"><div class="xwbt">' + TimeData[TimeYear[i]][x].bt + '</div>';
                    if (TimeData[TimeYear[i]][x].img != "default.png")
                        htmls += '<img src="../images/news/' + TimeData[TimeYear[i]][x].img + '" width="450" height="300"/>';
                    htmls += '</div>';
                } else {
                    htmls += '<div class="nrz">';
                    htmls += '<div class="xwbt">' + TimeData[TimeYear[i]][x].bt + '</div>';
                    if (TimeData[TimeYear[i]][x].img != "default.png")
                        htmls += '<img src="../images/news/' + TimeData[TimeYear[i]][x].img + '" width="450" height="300"/>';
                    htmls += '</div>';
                    htmls += '<div class="yx2"></div>';
                    htmls += '<div class="sjbty"><span>' + TimeData[TimeYear[i]][x].rq + '</span></div>';
                }
                htmls += '</div>';
            }
            htmls += '</div>';
            $(".sgzbx").html(htmls);
            $(".year").bind("click", function () {
                var year = $(this).html();
                if ($(this).hasClass("close")) {
                    $(this).removeClass("close").addClass("open");
                    // 展开
                    $(".pyearnr[xt='" + year + "']").show();
                } else {
                    $(this).removeClass("open").addClass("close");
                    // 收缩
                    $(".pyearnr[xt='" + year + "']").hide();
                }
                Time.Size();
            });
            $(".year").eq(0).click();
        }
    }
}