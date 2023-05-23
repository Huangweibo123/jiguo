        
  var mySwiper = new Swiper ('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    autoplay:true,//等同于以下设置
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
//     // 如果需要滚动条
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
  })  

  window.onload = function() {
    document.querySelector('.David').style.transform = 'translate(0,0)';
  }

  var li = document.getElementsByClassName("tt");
for (i = 0; i < li.length; i++) {
 li[i].addEventListener("click", function () {
 for (j = 0; j < li.length; j++) {
 li[j].className = "tt";
 }
this.className = "tt on";
 });
}

//   var dataLists = [];
// window.onload = function getData() {
//   var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
//   ajax_.open('GET','http://127.0.0.1:3000/play/new');
//   ajax_.send();
//   ajax_.onreadystatechange = function() {
//     if (ajax_.readyState == 4 && ajax_.status == 200) {
//       dataLists = JSON.parse(ajax_.responseText);
//       console.log(dataLists);
//       show();
//     }else{
//       console.log('加载错误');
//     }
//   }
// }
// function show(){
//   var ul_=document.getElementsByClassName
// }
window.addEventListener("scroll", function() {
  const element = document.getElementById("hidden-element");
  if (isElementInViewport(element)) {
    element.style.display = "block";
  }
});

document.getElementById("hidden-element").addEventListener("click", function() {
  this.style.zIndex = 9999; 
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 && 
    rect.right >= 0 && 
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// document.getElementById("hidden-element").addEventListener("click", function() {
//   window.scrollTo(0, 0);
// });

document.getElementById("hidden-element").addEventListener("click", function() {
  scrollToTop(500); // 2000 表示滚动动画持续时间为 1000 毫秒
});

function scrollToTop(scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15), // 计算每一步滚动的距离
      scrollInterval = setInterval(function(){
    if ( window.scrollY != 0 ) { // 如果还没滚到顶部，则继续滚动
      window.scrollBy( 0, scrollStep );
    }
    else clearInterval(scrollInterval); // 滚动到顶部后停止滚动
  },15); // 15 表示每隔 15 毫秒执行一次
}

var e1 = document.getElementsByClassName('p3')
console.log(e1[0])
e1[0].onclick = function () {
e1[0].style.display = 'none'
 e1[1].style.display = 'block'
}

document.getElementById("my-element").addEventListener("click", function() {
  window.location.href = "http:www.baidu.com";
});