
export function initRouter(routes) {
  const app = document.getElementById("app");

  if (!app) {
    console.error("App container #app not found");
    return;
  }

  async function renderRoute() {
    const path = location.hash.replace(/^#/, "") || "/";
    const render = routes[path] || routes[404];

    try {
      const result = await render();

      if (typeof result === "string") {
        app.innerHTML = result;
      }
    } catch (error) {
      console.error("Page rendering error:", error);
      app.innerHTML = "<h2>Хуудас ачаалахад алдаа гарлаа.</h2>";
    }
  }

  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}
