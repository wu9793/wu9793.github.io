AOS.init();

// nav scroll animation
$(window).scroll(function (scrollvalue) {
    if ($(window).scrollTop() > 0)
        $("nav.navbar").addClass("navbar-gb"),
            $(".titleitem").css("color", "rgb(200, 200, 200)")
    else
        $("nav.navbar").removeClass("navbar-gb"),
            $(".titleitem").css("color", "rgb(17, 17, 17)")

});

// 抓取頁面滾動位置
$(window).scroll(function () {
    let screenHeight = $(window).height();
    let scrollTop = $(window).scrollTop();
    let scrollEnd = $('#portfolio').offset().top - screenHeight * 0.5
    let scrollAbo = $('#about').offset().top;
    let scrollPro = $('#portfolio').offset().top;
    let scrollFooter = $('#end').offset().top;

    // about PIC
    if (scrollTop > scrollEnd - (screenHeight * 0.7)) {
        $('.mypic1').css('animationName', 'pic1');
        $('.mypic2').css('animationName', 'pic2');
    }

    // GO TOP BTN
    let colorIN = "rgb(19, 18, 18)";
    let colorOUT = "rgb(200, 200, 200)";
    if (scrollTop < scrollAbo - 100) {
        $('.go').find('a').eq(0).css({ "color": colorIN, "border-bottom": "1px solid #9d9da0" });
    } else {
        $('.go').find('a').eq(0).css({ "color": colorOUT, "border-bottom": "0px solid #9d9da0" });
    }
    if (scrollTop < scrollPro - 30 && scrollTop > scrollAbo - 30) {
        $('.go').find('a').eq(1).css({ "color": colorIN, "border-bottom": "1px solid #9d9da0" });
    } else {
        $('.go').find('a').eq(1).css({ "color": colorOUT, "border-bottom": "0px solid #9d9da0" });
    }
    if (scrollTop < scrollFooter - screenHeight && scrollTop > scrollPro - 30) {
        $('.go').find('a').eq(2).css({ "color": colorIN, "border-bottom": "1px solid #9d9da0" });
    } else {
        $('.go').find('a').eq(2).css({ "color": colorOUT, "border-bottom": "0px solid #9d9da0" });
    }
    if (scrollTop > scrollFooter - screenHeight) {
        $('.go').find('a').eq(3).css({ "color": colorIN, "border-bottom": "1px solid #9d9da0" });
    } else {
        $('.go').find('a').eq(3).css({ "color": colorOUT, "border-bottom": "0px solid #9d9da0" });

    }
})


// 取得現在時間
function TimeRefresh() {
    let currentTime = new Date().toLocaleString();
    $('#time').text(currentTime);
}

$(document).ready(function () {

    TimeRefresh();
    setInterval(TimeRefresh, 1000);
})

// PS作品輪播
function initSwiper() {
    /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    */
    const swiper = new Swiper("#comment-swiper", {
        /*  預設要顯示幾個卡片 */
        slidesPerView: 1,
        /* 斷點設定 */
        breakpoints: {
            /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
            992: {
                slidesPerView: 3
            },
            /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
            768: {
                slidesPerView: 2
            },
            /* 更小時都顯示 1 欄 */
            0: {
                slidesPerView: 1
            }
        },
        /* 卡片元素的間隔 */
        spaceBetween: 16,
        pagination: {
            /* 我想將分頁圓點綁在哪個 class */
            el: ".swiper-pagination",
            /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
            clickable: true
        }
    });
}

/* 觸發自己定義的函式 */
initSwiper();

//=========中英切換============
// const ch= $('.CH').toArray();
const en = $('.EN');

// var language = 0;
const chgLBtn = $('#chgL')

text = {
    en: [
        "Rookie web developer and interior designer.<br>Like to explore the possibilities of life , and challenge myself to do better.",
        "<div>-🌏Currently based in Taipei, Taiwan.</div><div>-💻Programme Skills Trained by WAD Training &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Center,Ministry of Labor, Taiwan.</div><div>-🍵Off work, you could find me playing basketball or &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;watching TVs.</div>"
    ],
    ch: [
        "菜鳥網頁工程師<br>喜歡探索人生的可能性，並挑戰自我、追求更好的自己。",
        "<div>-🌏 現居台北 ,台灣</div><div>-💻 PHP資料庫網頁設計 @泰山職訓</div><div>-🍵 在休閒時間，我喜歡打球、追劇</div>"
    ]
}
var lang = 0;
chgLBtn.on('click', function () {
    if (lang == 0) {
        for (i = 0; i < en.length; i++) {
            en.eq(i).html(text.ch[i]);
            chgLBtn.text('English')
        }
        lang = 1;
    } else {
        for (i = 0; i < en.length; i++) {
            en.eq(i).html(text.en[i]);
            chgLBtn.text('中文')
            lang = 0;
        }
    }
})