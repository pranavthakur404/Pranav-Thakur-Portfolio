// navigatioin section
const favIcon = document.querySelector(".fa-bars");
const menuList = document.querySelector(".menu-list");
favIcon.addEventListener("click", () => {
  const menuList = document.querySelector(".menu-list");
  const icon = document.querySelector(".menu .fa");

  // changing font icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-remove");
  } else {
    icon.classList.replace("fa-remove", "fa-bars");
  }

  if (menuList.style.height == "50%") {
    menuList.style.lineHeight = "0px";
    menuList.style.padding = "0px";
    menuList.style.overflow = "hidden";
    menuList.style.height = "0";
  } else {
    menuList.style.lineHeight = "40px";
    menuList.style.padding = " 2% 5% 3% 6%";
    menuList.style.overflow = "visible";
    menuList.style.height = "50%";
  }
});


