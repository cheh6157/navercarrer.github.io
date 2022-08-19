$(function(){

    /*
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     *
     * 
     /*
     * gnb 호버 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (은호)
     */
     $('.header .gnb-item').hover(function(){ //헤더의 지엔비아이템을 호버했을시
      if($(this).find('.sub-menu').length){ //만약 이것(지엔비아이템)에서 찾아라 서브메뉴에 길이가 있다면
        $('.header').addClass('hover'); //헤더에 호버라는 클래스를 더해라
        $(this).find('.sub-menu').addClass('active') //지엔비아이템에서 찾아라 서브메뉴를 거기에 액티브라는 클래스를 더해라
      }
    },function(){ //호버를 뗄경우
      $('.header').removeClass('hover'); //헤더에 호버클래스를 제거해라
      $('.sub-menu').removeClass('active') //서브메뉴에 액티브클래스를 제거해라
    });

    /*
     * tablet button 
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (은호)
     */
    $('.header .btn-menu').click(function(e){
      e.preventDefault();
      
      $('.side-menu').addClass('active');
      $('.btn-menu').removeClass('active');
      $('.btn-close').addClass('active')
    })

    $('.header .btn-close').click(function(e){
      e.preventDefault();
      
      $('.side-menu').removeClass('active');
      $('.btn-close').removeClass('active');
      $('.btn-menu').addClass('active')
    })



     /*
     * 메인 슬라이드 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (은호)
     */
        var mainSlide = new Swiper(".video", {
       
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
      });



    /*
    
     * 
     * sc-people 슬라이드 구역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (은호)
     *
     *
     */
    var peopleslide = new Swiper(".people", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints:{
          770:{
            slidesPerView:1.1,
          }
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      });


     /* 
     * 
     * 
     * sc-benefits 슬라이드 구역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
     */
     var bfslide = new Swiper(".benefits", {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints:{
        770:{
          slidesPerView:3,
        }
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });

    
    
    
    
    
    
    
    
    
    })//이거는 하나만 쓰세요 $(function())입니다.