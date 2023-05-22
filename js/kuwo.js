var li = document.getElementsByClassName("tt");
for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        for (j = 0; j < li.length; j++) {
            li[j].className = "tt";
        }
        this.className = "tt on";
    });
}
var e1 = document.getElementsByClassName('aa')[0];
var e2 = document.getElementsByClassName('a2')[0];
console.log(e1);
console.log(e2);

e1.onclick = function () {
    e1.className = 'aaa';
    e2.className = 'a3'
}

var e3 = document.getElementsByClassName('dz');
var e4 = document.getElementsByClassName('x2');
var e5 = document.getElementsByClassName('a1');
console.log(e3);
console.log(e4[1]);
console.log(e5[1]);
e3[0].onclick = function () {
    e3[1].className = 'dz'
    e3[0].className += ' a4'
    e4[1].style.display = 'none'
    e4[0].style.display = 'block'

}
e3[1].onclick = function () {
    e3[0].className = 'dz'
    e3[1].className += ' a4'

    e4[0].style.display = 'none'
    e4[1].style.display = 'block'
}
e5[0].onclick = function () {
    e4[0].style.display = 'block';
}
e5[1].onclick = function () {
    e4[0].style.display = 'none'
    e4[1].style.display = 'block';
}
e5[2].onclick = function () {
    e4[0].style.display = 'none'
    e4[1].style.display = 'none'
    e4[2].style.display = 'block';
    console.log(e4[2]);
}
e5[3].onclick = function () {
    e4[0].style.display = 'none'
    e4[1].style.display = 'none'
    e4[2].style.display = 'none'
    e4[3].style.display = 'block';
    console.log(e4[2]);
}
// 底部
