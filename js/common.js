document.addEventListener('DOMContentLoaded', function() {
  const depth1 = document.querySelectorAll('#m-depth1 li');
  const depth2 = document.getElementById('m-depth2');

  // Depth2 메뉴 데이터 (링크 포함)
  const menuData = {
    'about-school': [
      { text: 'ABOUT 청강', link: 'sub-school.html' },
      { text: '오시는 길', link: '#location' }
    ],
    'entrance': [
      { text: '입학처 홈페이지', link: '#entrance' }
    ],
    'majority': [
      { text: '애니메이션스쿨', link: '#animation' },
      { text: '융합콘텐츠스쿨', link: '#convergence' },
      { text: '게임콘텐츠스쿨', link: '#game' },
      { text: '만화컨텐츠스쿨', link: '#comic' },
      { text: '공연예술스쿨', link: '#performance' },
      { text: '패션뷰티스쿨', link: '#fashion' },
      { text: '푸드스쿨', link: '#food' }
    ],
    'school-life': [
      { text: '학사안내', link: '#academic' },
      { text: '장학제도', link: '#scholarship' },
      { text: '학생편의시설', link: '#facilities' }
    ],
    'appendages': [
      { text: '기숙사', link: '#dormitory' },
      { text: '도서관', link: '#library' }
    ],
    'notice': [
      { text: '청강소식', link: '#news' },
      { text: '공지사항', link: '#notices' }
    ]
  };

  // Depth1 클릭 시 Depth2 업데이트 및 스타일 변경
  depth1.forEach((item, index) => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // a 태그 클릭 시 페이지 이동 방지
      const target = this.getAttribute('data-target');
      const subMenu = menuData[target];

      // Depth2 초기화
      depth2.innerHTML = '';

      // 해당하는 서브 메뉴가 있으면 업데이트
      if (subMenu) {
        subMenu.forEach(menuItem => {
          const li = document.createElement('li');
          const link = document.createElement('a'); // 링크 요소 생성
          link.textContent = menuItem.text; // 링크 텍스트 설정
          link.href = menuItem.link; // 링크 URL 설정
          li.appendChild(link); // 링크를 li에 추가
          depth2.appendChild(li); // li를 depth2에 추가
        });
      }

      // 모든 Depth1 요소 스타일 초기화
      depth1.forEach(li => {
        li.style.backgroundColor = ''; // 배경색 초기화
        li.style.borderTop = '';  // 이전 상단 경계선 초기화
        li.style.borderBottom = ''; // 이전 하단 경계선 초기화
      });

      // 클릭한 Depth1 요소 스타일 적용
      this.style.backgroundColor = 'white'; // 배경색 변경
      if (index === 0) {
        this.style.borderBottom = '2px solid #ff5401'; // 첫 번째 요소 하단 경계선
      } else {
        this.style.borderTop = '2px solid #ff5401'; // 클릭한 요소 상단 경계선
        this.style.borderBottom = '2px solid #ff5401'; // 클릭한 요소 하단 경계선
      }
    });
  });
});


$(document).ready(function(){

  //햄버거 메뉴 버튼을 클릭하면 메뉴바가 나오고
  //엑스 버튼을 누르면 메뉴바가 닫힌다
  $(".menu-button").click(function(){
    $(".m-gnb").animate({"left" : "0"})
  });

  $(".close").click(function(){
    $(".m-gnb").animate({"left" : "-100%"})
  });


  //depth1에 마우스가 닿으면 depth2가 나타나고
  //depth1, 2에서 마우스가 떠나면 depth2가 사라진다.
  $(".desktop .depth2").hide();
  $(".desktop .gnb > li, .desktop-header-bk").mouseenter(function(){
    $(".desktop .depth2, .desktop-header-bk").show()
  });
  $(".desktop .gnb > li, .desktop-header-bk").mouseleave(function(){
    $(".desktop .depth2, .desktop-header-bk").hide()
  });

  $(".desktop-header-bk").hide()

});