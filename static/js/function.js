$('.sidebar .joke ul li .title').click(function () {
    $(this).siblings('.hide').stop().slideToggle('500')
    $(this).parent().siblings().find('.hide').stop().slideUp('500')
    $(this).parent().siblings().removeClass('active')
    $(this).parent().toggleClass('active')
})

$('.sidebar .joke ul li .hide_list a').addClass('animated fadeInUp')


$('.sidebar .joke ul li').each(function (index, item) {
    $(this).find('.hide_list a').each(function (index, ele) {
        var delay = index * 80 + 80
        $(this).css('animation-delay', delay + 'ms')
    })
})

hljs.highlightAll();

var clipboard = new Clipboard('.copy');
$('.copy').click(function () {
    $(this).addClass('copy_active')
    setTimeout(() => {
        $(this).removeClass('copy_active')
    }, 2000)
})

// 加载图片
setTimeout(()=>{
    var load=0
    var arr=new Array();
    $('img').each(function (index,ele){
        if($(this).attr('src')!==''){
            arr.push($(this).attr('src'))
        }
    })
    var len=arr.length
    for(var i in arr){
        var bimg=new Image();
        bimg.src = arr[i];
        bimg.onload = function () {
            load+=1;
            $('.loading .warp .line div').css({
                width:load/len*100+'%',
            })
            if(len===load){
                setTimeout(()=>{
                    $('.loading').addClass('events_active')
                },1000)
            }
        }
    }
    if ($('img').length === 0) {
        $('.loading .warp .line div').css({
            width: '100%',
        })
        setTimeout(()=>{
            $('.loading').addClass('events_active')
        },1000)
    }
},10)