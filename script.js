function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function copied () {
    document.getElementById("btn1").style.color= "green";
    document.getElementById("btn1").style.border= " solid 2px green";
    let icon =  document.getElementById("i1")
    icon.style.color= "green";
    let text = document.getElementById("btn1");
    text.innerHTML= "COPIED";
    let result;
    result= icon + text; 
    return result; 
  }