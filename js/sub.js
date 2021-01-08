$(function(){

    //quick_btn
    //퀵메뉴 안보였다, 나타났다, 안보였다
    $(window).scroll(function(){
        if($(document).scrollTop() >= 500 && $(document).scrollTop()  <= $('#footer').offset().top - 100) {
           $('.sub_quick_menu').fadeIn(200);
       }else { $('.sub_quick_menu').fadeOut(200);}
    })

    //퀵메뉴 탑버튼- 맨위로 올라감
    $('.sub_quick_menu').click(function(){
        $('html, body').animate({
            scrollTop :0
        }, 550);
        return false;
    });


    //팝업창
    var modal = document.querySelector(".modal"); 
    var trigger = document.querySelector(".trigger"); 
    var closeButton = document.querySelector(".close-button"); 
    var cancelButton = document.querySelector("#cancel");

    //console.log(modal);

        function toggleModal() { 
             modal.classList.toggle("show-modal"); 
         }

        function windowOnClick(event) { 
             if (event.target === modal) { 
                 toggleModal(); 
             } 
         }

         trigger.addEventListener("click", toggleModal); 
         closeButton.addEventListener("click", toggleModal); 
         cancel.addEventListener("click", toggleModal); 
         window.addEventListener("click", windowOnClick); 

})//jq