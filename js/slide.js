$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay : true,
        autoplaySpeed : 1000,
        speed : 1000,
        pauseOnHover : true,
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
    

    //네비 엑스버튼
    var sta = 1 //상태1번: 팝업창이 안 열여있는 상태

$('#nav_pop_btn').click(function(){
  //  $(this).toggleClass('on');//단순 디자인 변경시에만 이용!! (on/off)꺼졌다 켜졌다 반복임,지금처럼 창이 같이 켜질때는 적절하지 않음.

  if(sta == 1) {
      $(this).addClass('on'); //엑스모양 버튼으로 보여짐=> on
      $('#nav_pop').slideDown(); //박스가 보여야함

      sta = 2; //상태2번: 상태가 바뀜

  } else{ //상태2번 일때는 다 빼줘야함
      $(this).removeClass('on');
      $('#nav_pop').slideUp();
      sta = 1; //원래 상태로 돌아옴
  }

})


      


})//jq