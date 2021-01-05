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

})//jq