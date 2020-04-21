$('body').scrollspy({target: ".navbar", offset: 50});
$("#navbar").find("a").on('click', function (event) {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
    }, 700);
});

$('#priner_id').on('click', function () {
    /* $('div').toggleClass('change-mode');
     $('span').toggleClass('change-mode2');
     $('i').toggleClass('change-mode3');
     $('#four').toggleClass('change-mode4');*/
    $('.second').toggleClass('change-mode5');
});

var StickyElement = function(node){
    var doc = $(document),
        fixed = false,
        anchor = node.find('.sticky-anchor'),
        content = node.find('.sticky-content');

    var onScroll = function(e){
        var docTop = doc.scrollTop(),
            anchorTop = anchor.offset().top;

        console.log('scroll', docTop, anchorTop);
        if(docTop > anchorTop){
            if(!fixed){
                anchor.height(content.outerHeight());
                content.addClass('fixed');
                fixed = true;
            }
        }  else   {
            if(fixed){
                anchor.height(0);
                content.removeClass('fixed');
                fixed = false;
            }
        }
    };

    $(window).on('scroll', onScroll);
};

var demo = new StickyElement($('#nav-sticky-top'));

$(window).resize(function () {
        const widthWind = $(this).width();

        if (widthWind < 768) {
            /*$('.navbar').addClass('d-none');*/


        } else {
            /*$('.navbar').removeClass('d-none');*/
        }
    }
);
