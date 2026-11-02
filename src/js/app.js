
import { renderNavbar, initNavbar } from "./components/navbar.js";
import { mountFooter } from "./components/footer.js";
import { initRouter } from "./router.js";
import { routes } from "./routes.js";

// Navbar
const navbarRoot = document.getElementById("navbar");

if (navbarRoot) {
  navbarRoot.innerHTML = renderNavbar();
  initNavbar();
}

// Footer
const footerRoot = document.getElementById("footer");

if (footerRoot) {
  mountFooter(footerRoot);
}

// Router
initRouter(routes);
