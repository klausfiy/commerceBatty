$(function(){
    $(window).on('resize',function(){
        // 获取屏幕的宽度
        var windowWidth = $(this).width();
        // console.log(windowWidth);
        var items =  $('#slide .carousel-inner .item');
        console.log(items);
        if(windowWidth>640){
            items.each(function(i,value){
                var largeImage = $(value).data('large-image');
                // console.log(value.dataset['largeImage']);
                // console.log(largeImage);
                $(this).html('<a href="#" class="large-image" style="background-image:url('+largeImage+')"></a>');
            }); 
        }else {
            items.each(function(i,value){
                var smallImage = $(value).data('small-image');
                // console.log(value.dataset['largeImage']);
                // console.log(smallImage);
                $(this).html('<a href="#" class="small-image"><img src="'+smallImage+'" alt="..."></a>');
            }); 

        }

    }).trigger('resize');

    $('.tooltips').tooltip();
    var myScroll = new IScroll('.ul-wrapper', {
        scrollX: true,
        // 禁止垂直滚动
        scrollY: false,
        // 支持鼠标滚动
    });
})