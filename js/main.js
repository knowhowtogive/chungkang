


var swiper = new Swiper(".news", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

var swiper = new Swiper(".exhibition", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop : true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
  },
});




document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function() {
      // 모든 메뉴 항목에서 active 클래스 제거
      document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));
      
      // 클릭된 항목에만 active 클래스 추가
      this.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 모든 td 요소를 선택합니다.
  const tdElements = document.querySelectorAll("#calendar table td");

  // td 요소 클릭 시 이벤트 처리
  tdElements.forEach(td => {
    td.addEventListener("click", function (event) {
      // 기존 열려있는 팝업을 모두 숨깁니다.
      document.querySelectorAll(".schedule-pop-up").forEach(popup => {
        popup.style.display = "none";
      });

      // 클릭한 td 안의 schedule-pop-up을 보여줍니다.
      const popup = td.querySelector(".schedule-pop-up");
      if (popup) {
        popup.style.display = "block";
      }

      // 클릭 이벤트가 td 요소 내부에서 처리된 경우, 이벤트 버블링을 막습니다.
      event.stopPropagation();
    });
  });

  // 페이지의 다른 곳을 클릭하면 모든 팝업을 숨깁니다.
  document.addEventListener("click", function () {
    document.querySelectorAll(".schedule-pop-up").forEach(popup => {
      popup.style.display = "none";
    });
  });
});


$(document).ready(function(){

  AOS.init();

  $(window).on('load', function(){
    AOS.refresh();
  });
}); //end