import { renderPageLayout } from "../layouts/pageLayout.js";
import { t } from "../i18n/i18n.js";

export function renderContactPage() {
  const app = document.getElementById("app");

  if (!app) return;

  app.innerHTML = renderPageLayout({
    id: "contact",
    title: t("nav.contact"),

    content: `
      <section class="contact-page">
        <h2>${t("contact.heading")}</h2>
        <p>${t("contact.description")}</p>
      </section>
    `,
  });
}