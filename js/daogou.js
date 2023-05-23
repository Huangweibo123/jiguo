// 酷玩_最新请求ajax数据

// 创建对象;
var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

// 创建连接
ajax_.open("get", "http://127.0.0.1:3000/guid/new", true);

// 发送请求
ajax_.send();

// 接受服务器数据;
var ul = document.getElementsByClassName("zxx")[0];

ajax_.onreadystatechange = function () {
  if (ajax_.readyState == 4 && ajax_.status == 200) {
    var str = "";
    var data = JSON.parse(ajax_.responseText);

    for (var items of data) {
      str += `
        <li>
        <a href="./gangbi.html">
          <img src="${items.img}" alt="" />
          <div class="wzbf">
            <p>${items.text}</p>
            
            <div class="jg">
          
              <div>
                <span>${items.like}</span>
                <span>${items.words}</span>
              </div>
            </div>
          </div>
        </a>
        <div class='boxx'>
        <div class="sb"></div>
        <div class="xb"></div>
        </div>
      </li>
        `;
    }

    ul.innerHTML = str;
  }
};
// 创建对象;
var ajax1 = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

// 创建连接
ajax1.open("get", "http://127.0.0.1:3000/guid/hot", true);

// 发送请求
ajax1.send();

// 接受服务器数据;
var ul1 = document.getElementsByClassName("zxx")[1];

ajax1.onreadystatechange = function () {
  if (ajax1.readyState == 4 && ajax1.status == 200) {
    var str1 = "";
    var data1 = JSON.parse(ajax1.responseText);

    for (var items1 of data1) {
      str1 += `
        <li>
        <a href="./gangbi.html">
          <img src="${items1.img}" alt="" />
          <div class="wzbf">
            <p>${items1.text}</p>
            
            <div class="jg">
          
              <div>
                <span>${items1.like}</span>
                <span>${items1.words}</span>
              </div>
            </div>
          </div>
        </a>
        <div class='boxx'>
        <div class="sb"></div>
        <div class="xb"></div>
        </div>
      </li>
        `;
    }

    ul1.innerHTML = str1;
  }
};

var span = document.getElementsByClassName("djjz")[0].firstElementChild;
var span1 = document.getElementsByClassName("span")[0];
span.addEventListener("click", function () {
  span.style.display = "none";
  span1.style.display = "block";
});
//  tab切换

var box1 = document.getElementsByClassName("box1")[0];
var box2 = document.getElementsByClassName("box2")[0];

var zx = document.getElementsByClassName("zx")[0];
var zr = document.getElementsByClassName("zr")[0];

zx.addEventListener("click", function () {
  box1.style.display = "block";
  box2.style.display = "none";

  zx.className = "zx on";
  zr.className = "zr";
});
zr.addEventListener("click", function () {
  box2.style.display = "block";
  box1.style.display = "none";

  zx.className = "zx";
  zr.className = "zr on";
});

var li = document.getElementsByClassName("tt");
for (i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    for (j = 0; j < li.length; j++) {
      li[j].className = "tt";
    }
    this.className = "tt on";
  });
}
