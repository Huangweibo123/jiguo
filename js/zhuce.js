var li = document.getElementsByClassName("tt");
for (i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    for (j = 0; j < li.length; j++) {
      li[j].className = "tt";
    }
    this.className = "tt on";
  });
}
var btn = document.getElementById("btn");

var input = document.getElementsByTagName("input");
console.log(input);

btn.onclick = function () {
  var i = 60;

  var timer = setInterval(function () {
    i--;
    btn.disabled = true;
    btn.innerHTML = `${i}秒后重新发送`;
    if (i == 0) {
      btn.disabled = false;
      clearTimeout(timer);
      btn.innerHTML = "重新获取验证码";
    }
  }, 1000);
};
function sub() {
  for (i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}
// cookie
var sjh = document.querySelector("#sjh");
var tpxy = document.querySelector("#tpxy");
var yzm = document.querySelector("#yzm");
sessionstrorage.setItem = `sjh=${sjh.value};
 tpxy=${tpxy.value};
 yzm=${yzm.value};
`;
