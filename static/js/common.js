$('.load').delay(200).fadeOut('slow');

$('.content li>a').click(function () {
    $(this).parent().siblings().find('.title').removeClass('active');
    $(this).parent().find('.title').toggleClass('active');
    $(this).parent().find('.sub-menu').stop().slideToggle();
    $(this).parent().siblings().find('.sub-menu').slideUp();
})

setTimeout(() => {
    $('.two_warp').addClass('left_active');
}, 400)

$('.mobile').click(function () {
    $('.mobile').toggleClass('mobile_active');
    $('.side').toggleClass('side_active')
})

$('.side .side_nav .cut span').click(function () {
    $(this).toggleClass('opacity_active')
    $(this).parent().find('.side_color').slideToggle();
})

$('.side .side_nav .cut .side_color li').click(function () {
    $('.side_color').slideUp();
    $('.side .side_nav .cut span').removeClass('opacity_active');
})

var width = document.body.clientWidth;
if (width > 768) {
    setTimeout(() => {
        $('.side').addClass('left_active');
    }, 400)
}

// 劳动成果
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        $('body').css('overflow', 'hidden')
        $('.labor').addClass('labor_active')
        $('.labor .after').addClass('after_active')
        setTimeout(() => {
            $('.labor .iconfont').addClass('iconfont_active')
            setTimeout(() => {
                $('.labor .iconfont').removeClass('iconfont_active')
                setTimeout(() => {
                    $('.each').addClass('each_active')
                    setTimeout(() => {
                        $('.each').removeClass('each_active')
                        setTimeout(() => {
                            $('.labor .pushButton').addClass('opacity_active')
                        }, 1500)
                    }, 1500)
                }, 500)
            }, 2000)
        }, 1000)
        return false;
    }
});

$('.particles-button').click(function () {
    setTimeout(() => {
        $('.labor .after').removeClass('after_active')
        $('body').css('overflow', 'inherit')
        $('.labor .pushButton').removeClass('opacity_active')
        setTimeout(() => {
            $('.labor').removeClass('labor_active')
        }, 1000)
    }, 1500)
})

$('.each').each(function (index, item) {
    var text = $(item).html();
    var textArray = text.split('');
    var html = '';
    for (var i in textArray) {
        html += '<span>' + textArray[i] + '</span>';
    }
    $(item).html(html);
    $(this).find('span').each(function (index, ele) {
        var index = index * 0.07 + 0.05
        $(this).css({
            'transition-delay': index + 's',
        })
    })
})

var clipboard = new Clipboard('.copy');
$('.copy').click(function () {
    $(this).addClass('copy_active')
    setTimeout(() => {
        $(this).removeClass('copy_active')
    }, 2000)
})

$('.side_nav .theme .title').click(function () {
    $('.side_nav .theme .cut').toggleClass('cut_active')
})

// localStorage: 存储
var item_1 = $('.side_nav .theme .cut .item_1')
var item_2 = $('.side_nav .theme .cut .item_2')
var item_3 = $('.side_nav .theme .cut .item_3')
var item_4 = $('.side_nav .theme .cut .item_4')
var item_5 = $('.side_nav .theme .cut .item_5')
var item_6 = $('.side_nav .theme .cut .item_6')
var body = $('body')
if (typeof(localStorage) == 'undefined') {
    document.getElementById("result").innerHTML =
        'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    $(body).each(function(i, el) {
        if (localStorage['fav' + i] == 'red_active') {
            $(this).addClass('red_active');
        }
        if (localStorage['fav' + i] == 'blue_active') {
            $(this).addClass('blue_active');
        }
        if (localStorage['fav' + i] == 'purple_active') {
            $(this).addClass('purple_active');
        }
        if (localStorage['fav' + i] == 'brown_active') {
            $(this).addClass('brown_active');
        }
        if (localStorage['fav' + i] == 'green_active') {
            $(this).addClass('green_active');
        }
        if (localStorage['fav' + i] == 'cyan_active') {
            $(this).addClass('cyan_active');
        }
    });
}
$(item_1).click(function () {
    var $item = $(body)
    var index = $(body).index($item);
    $item.removeClass();
    $item.addClass('red_active');
    if ($item.hasClass('red_active')) {
        localStorage.setItem('fav' + index, 'red_active');
    } else {
        localStorage.removeItem('fav' + index);
    }
})
$(item_2).click(function () {
    var $item = $(body)
    var index = $(body).index($item);
    $item.removeClass();
    $item.addClass('blue_active');
    if ($item.hasClass('blue_active')) {
        localStorage.setItem('fav' + index, 'blue_active');
    } else {
        localStorage.removeItem('fav' + index);
    }
})

$(item_3).click(function () {
    var $item = $(body)
    var index = $(body).index($item);
    $item.removeClass();
    $item.addClass('purple_active');
    if ($item.hasClass('purple_active')) {
        localStorage.setItem('fav' + index, 'purple_active');
    } else {
        localStorage.removeItem('fav' + index);
    }
})

$(item_4).click(function () {
    var $item = $(body)
    var index = $(body).index($item);
    $item.removeClass();
    $item.addClass('brown_active');
    if ($item.hasClass('brown_active')) {
        localStorage.setItem('fav' + index, 'brown_active');
    } else {
        localStorage.removeItem('fav' + index);
    }
})

$(item_5).click(function () {
    var $item = $(body)
    var index = $(body).index($item);
    $item.removeClass();
    $item.addClass('green_active');
    if ($item.hasClass('green_active')) {
        localStorage.setItem('fav' + index, 'green_active');
    } else {
        localStorage.removeItem('fav' + index);
    }
})

$(item_6).click(function () {
    var $item = $(body)
    var index = $(body).index($item);
    $item.removeClass();
    $item.addClass('cyan_active');
    if ($item.hasClass('cyan_active')) {
        localStorage.setItem('fav' + index, 'cyan_active');
    } else {
        localStorage.removeItem('fav' + index);
    }
})

$('.side_nav .theme .cut .item').click(function () {
    $('.side_nav .theme .cut').removeClass('cut_active')
    location.reload();
})