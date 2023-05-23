var li = document.getElementsByClassName("tt");
for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        for (j = 0; j < li.length; j++) {
            li[j].className = "tt";
        }
        this.className = "tt on";
    });
}

var e1 = document.getElementsByClassName('p3')
e1[0].onclick = function () {
    e1[0].style.display = 'none'
    e1[1].style.display = 'block'
}

var e2 = document.getElementsByClassName('sp1')
var e3 = document.getElementsByClassName('x5')
var e4 = document.getElementsByClassName('x3')[0]
console.log(e4);
e2[1].onclick = function () {
    e3[0].style.display = 'none'
    e3[1].style.display = 'block'
    e4.className += ' x23'
    console.log(this);
    this.classList.add('sp9')
    e2[0].classList.remove('sp8')

}
e2[0].onclick = function () {
    e3[1].style.display = 'none'
    e3[0].style.display = 'block'
    e4.className += ' x24'
    e2[1].classList.remove('sp9')
    this.classList.add('sp8')
    console.log(this);
}


