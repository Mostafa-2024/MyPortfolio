let menuIcon = document.querySelector("nav i");

let menu = document.querySelector(("nav .navigation"));

menuIcon.onclick = () => {

  if(menu.classList.contains(("display-toggle"))) {

    menu.classList.remove("display-toggle")

  } else {

    menu.classList.add("display-toggle")
    
  }
}