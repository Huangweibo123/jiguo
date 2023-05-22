// 酷玩_最新请求ajax数据

// 创建对象;
var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

// 创建连接
ajax_.open("get", "http://127.0.0.1:3000/play/new", true);

// 发送请求
ajax_.send();

// 接受服务器数据;
var ul = document.getElementsByClassName("zxx")[0];

ajax_.onreadystatechange = function () {
  if (ajax_.readyState == 4 && ajax_.status == 200) {
    var str = "";
    var data = JSON.parse(ajax_.responseText);

    for (var item of data) {
      for (var items of item) {
        str += `
        <li>
        <a href="#">
          <img src="${items.img}" alt="" />
          <div class="wzbf">
            <p>${items.text}</p>
            <span>${items.description}</span>
            <div class="jg">
            ${items.price}
              <div>
                <span>${items.like}</span>
                <span>${items.words}</span>
              </div>
            </div>
          </div>
        </a>
      </li>
        `;
      }
    }
    ul.innerHTML = str;
  }
};

var span = document.getElementsByClassName("djjz")[0].firstElementChild;
var span1 = document.getElementsByClassName("span")[0];
span.addEventListener("click", function () {
  span.style.display = "none";
  span1.style.display = "block";
});
//  tab切换

// var box1 = document.getElementsByClassName("box1")[0];
// var box2 = document.getElementsByClassName("box2")[0];
// var box3 = document.getElementsByClassName("box3")[0];

// var zx = document.getElementsByClassName("zx")[0];
// var zr = document.getElementsByClassName("zr")[0];
// var pl = document.getElementsByClassName("pl")[0];

// zx.addEventListener("click", function () {
//   box1.style.display = "block";
//   box2.style.display = "none";
//   box3.style.display = "none";
// });
