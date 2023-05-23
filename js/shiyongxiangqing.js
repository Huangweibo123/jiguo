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