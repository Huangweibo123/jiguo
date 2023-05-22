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

var ajax1 = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

// 创建连接
ajax1.open("get", "http://127.0.0.1:3000/play/hot", true);

// 发送请求
ajax1.send();

// 接受服务器数据;
var ul1 = document.getElementsByClassName("zxx")[1];

ajax1.onreadystatechange = function () {
  if (ajax1.readyState == 4 && ajax1.status == 200) {
    var str1 = "";
    var data1 = JSON.parse(ajax1.responseText);

    for (var item1 of data1) {
      for (var items1 of item1) {
        str1 += `
        <li>
        <a href="#">
          <img src="${items1.img}" alt="" />
          <div class="wzbf">
            <p>${items1.text}</p>
            <span>${items1.description}</span>
            <div class="jg">
            ${items1.price}
              <div>
                <span>${items1.like}</span>
                <span>${items1.words}</span>
              </div>
            </div>
          </div>
        </a>
      </li>
        `;
      }
    }

    ul1.innerHTML = str1;
  }
};

var ajax2 = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

// 创建连接
ajax2.open("get", "http://127.0.0.1:3000/play/new", true);

// 发送请求
ajax2.send();

// 接受服务器数据;
var ul2 = document.getElementsByClassName("zxx")[2];

ajax2.onreadystatechange = function () {
  if (ajax2.readyState == 4 && ajax1.status == 200) {
    var str2 = "";
    var data2 = JSON.parse(ajax2.responseText);

    for (var item2 of data2) {
      for (var items2 of item2) {
        str2 += `
        <li>
        <a href="#">
          <img src="${items2.img}" alt="" />
          <div class="wzbf">
            <p>${items2.text}</p>
            <span>${items2.description}</span>
            <div class="jg">
            ${items2.price}
              <div>
                <span>${items2.like}</span>
                <span>${items2.words}</span>
              </div>
            </div>
          </div>
        </a>
      </li>
        `;
      }
    }

    ul2.innerHTML = str2;
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
var box3 = document.getElementsByClassName("box3")[0];

var zx = document.getElementsByClassName("zx")[0];
var zr = document.getElementsByClassName("zr")[0];
var pl = document.getElementsByClassName("pl")[0];

zx.addEventListener("click", function () {
  box1.style.display = "block";
  box2.style.display = "none";
  box3.style.display = "none";
  zx.className = "zx on";
  zr.className = "zr";
  pl.className = "pl";
});
zr.addEventListener("click", function () {
  box2.style.display = "block";
  box1.style.display = "none";
  box3.style.display = "none";
  zx.className = "zx";
  zr.className = "zr on";
  pl.className = "pl";
});
pl.addEventListener("click", function () {
  box3.style.display = "block";
  box2.style.display = "none";
  box1.style.display = "none";
  zx.className = "zx";
  zr.className = "zr";
  pl.className = "pl on";
});

var li = document.getElementsByClassName("tt");
console.log(li);
for (i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    for (j = 0; j < li.length; j++) {
      li[j].className = "tt";
    }
    this.className = "tt on";
  });
}
