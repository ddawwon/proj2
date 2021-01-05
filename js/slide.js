$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });

      $(".regular").slick({
        dots: false,
        infinite: true,
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1
      });

      $(".center").slick({
        dots: false,
        arrows:false, 
        autoplay : true,
        autoplaySpeed : 1000,
        speed : 1000,
        pauseOnHover : true,
        infinite: true,
        centerMode: true,
        slidesToShow: 6,
        slidesToScroll: 1
      });

    //네비버튼
    //slider
    $('#nav_pop_btn').click(function(){
        $('#nav_pop').fadeIn();
    })
    $('.btn_all').click(function(){
        $('#nav_pop').fadeOut();
    })


      


})//jq