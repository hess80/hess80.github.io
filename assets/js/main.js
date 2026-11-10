const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
  const mobileViewport = window.matchMedia("(max-width: 760px)");
  const setMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.hidden = mobileViewport.matches && !open;
  };
  const syncMenu = () => {
    menuButton.hidden = !mobileViewport.matches;
    setMenu(false);
  };

  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobileViewport.matches) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileViewport.matches &&
        menuButton.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuButton.focus();
    }
  });
  mobileViewport.addEventListener("change", syncMenu);
  syncMenu();
}
