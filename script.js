function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function copied1() {
  document.getElementById("btn1").style.color = "green";
  document.getElementById("btn1").style.border = " solid 2px green";
  let icon = document.getElementById("i1")
  icon.style.color = "green";
  let text = document.getElementById("btn1");
  text.innerHTML = "COPIED";
}

function copied2() {
  document.getElementById("btn2").style.color = "green";
  document.getElementById("btn2").style.border = "solid 2px green";
  let icon = document.getElementById("i2")
  icon.style.color = "green";
  let text = document.getElementById("btn2");
  text.innerHTML = "COPIED";
}

let textInput = document.getElementById ('numberInput');
let textOut= document.getElementById ('textOut');

textInput.addEventListener ('input', function(){
    textOut.textContent= 'you tiped:' + textInput.value;
  })

