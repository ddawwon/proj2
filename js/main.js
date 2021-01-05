$(function(){
    

    //패럴렉스
    $(document).ready(function() {
        var wd = $(window);
        $('.paral').each(function(){
          var bg = $(this);
          wd.scroll(function(){
            var yPos = -(wd.scrollTop() / 2); 
              //나눠지는 숫자가 작을 수록 속도가 빠름
            var coords = '50%' + yPos + 'px';
            bg.css({backgroundPosition:coords});
          });
        });
      });

    //quick_btn
    //퀵메뉴 안보였다, 나타났다, 안보였다
    $(window).scroll(function(){
        if($(document).scrollTop() >= 500 && $(document).scrollTop()  <= $('#footer').offset().top - 700) {
           $('.quick_menu').fadeIn(200);
       }else { $('.quick_menu').fadeOut(200);}
    })

    //퀵메뉴 탑버튼- 맨위로 올라감
    $('.quick_menu').click(function(){
        $('html, body').animate({
            scrollTop :0
        }, 550);
        return false;
    });

})//jq