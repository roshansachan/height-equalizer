$(document).ready(function(){
    $.each($('.height-equalizer-wrapper'), function () {
        var totalChildEqualizers = $(this).find('.height-equalizer');
        var totalChildrenHeightArr = new Array();
        var indexOfMax;
        $.each(totalChildEqualizers, function () {
            totalChildrenHeightArr.push($(this).outerHeight());
        });
        indexOfMax = totalChildrenHeightArr.indexOf(Math.max.apply(Math, totalChildrenHeightArr));
        totalChildEqualizers.css("min-height", ($(totalChildEqualizers[indexOfMax]).outerHeight()));
    });
});
