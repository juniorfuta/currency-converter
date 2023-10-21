//Change background color 

function setDarkTheme() {
  const body=document.body
  body.setAttribute ("data-theme", "dark")
  localStorage.setItem("data-theme", "dark")
}

function SetlightTheme() {
  const body=document.body
  body.setAttribute ("data-theme", "light")
  localStorage.setItem("data-theme", "light")
}

function retrieveTheme{
  cont currentTheme= localStorage.getItem("data-theme")

  if (cucurrentTheme==="dark"){

  }
}