
Array.max = function( array ){
    return Math.max.apply( Math, array );
};



this.tooltip = function () {
    /* CONFIG */
    xOffset = 0;
    yOffset = 10;
    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result
    /* END CONFIG */
    $(".tip, .faq").hover(function (e) {
            this.t = $(this).attr('alt');
            $("body").append("<div id='tooltip'><i></i>" + this.t + "</div>");
            console.log($(this).offset());
            $("#tooltip")
                .css("top", ($(this).offset().top + $(this).height() + yOffset) + "px")
                .css("left", ($(this).offset().left + 7 - $("#tooltip").width()/2) + "px")
                .fadeIn(0);
            if ($(this).is('.faq')){
                $("#tooltip").addClass('faq');
                $("#tooltip")
                    .css("top", ($(this).offset().top - $("#tooltip").height()/2) + "px")
                    .css("left", ($(this).offset().left + 20) + "px");
                console.log($(this).height(),$("#tooltip").height());
            }
        },
        function () {
            $("#tooltip").remove();
        });
};

$(function(){
    tooltip();

    $('.product-list .row').each(function(){
        var heights = [];
        $(this).find('.product').each(function(){
            heights.push($(this).find('.name').height());
        });
        $(this).find('.product .name').height(Array.max(heights));
    });

    $('#carousel').jCarouselLite({
        start:0,
        visible:5,
        scroll:3,
        btnPrev:'#partners .s-prev',
        btnNext:'#partners .s-next'
    });

    $('.container-slide').jCarouselLite({
        start:0,
        visible:1,
        scroll:1,
        btnPrev: '.s-prev',
        btnNext: '.s-next'
    });

    $('.product-list .product .img').each(function(i,e){
       if ($(this).find('img').size() > 1) {

           console.log(i);
           var id = 'carousel-'+i;
           $(this).find('.container-slides').attr('id', id);
            $('#'+id).jCarouselLite({
               start:0,
               visible:1,
               scroll:1,
               btnPrev: '#'+id +' .s-prev',
               btnNext: '#'+id +' .s-next'
           });
       }
    });

    $('#contacts .slide').click(function(){
        $('#contacts .data .hide').slideToggle(0);
    });

    $('label.checkbox input').change(function(){
        $(this).parent().toggleClass('active');
    });

    $('.fancy').fancybox({
        padding:0,
        margin:0,
        fitToView:false
    });


});
