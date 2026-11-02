import { getNutritions } from "../services/nutritionService.js";
import { buildFoodGroups } from "../fn/foodSearchEvents.js";

import { renderSidebarPageLayout } from "../layouts/sidebarPageLayout.js";

import {
  bindSidebar,
  bindMenuListToggle
} from "../fn/sidebarEvents.js";

import { renderFoodGroupList } from "../components/searchFoodGroupListSidebar.js";

import {
  renderCalculationTable,
  refreshCalculationTable
} from "../components/calculationTable.js";

import { t } from "../i18n/i18n.js";
export async function renderCalculationPage() {
  const app = document.getElementById("app");

  if (!app) return;

  try {
    const nutritionData = await getNutritions();
    const groupedFoods = buildFoodGroups(nutritionData);

    app.innerHTML = renderSidebarPageLayout({
      sidebarContent: renderFoodGroupList(groupedFoods),
      pageId: "calculation",
      pageTitle: t("calculation.title"),

      mainContent: `
        <section class="calculation-page">
          <div id="resultCalculatedTbl">
            ${renderCalculationTable([])}
          </div>
        </section>
      `,
    });

    bindSidebar();
    bindMenuListToggle();
    bindCalculationEvents(nutritionData);

  } catch (error) {
    console.error("Calculation page error:", error);
  }
}

function bindCalculationEvents(nutritionData) {
  const app = document.getElementById("app");
  if (!app) return;

  app.addEventListener("change", async (event) => {
    if (
      event.target instanceof HTMLInputElement &&
      event.target.matches('input[name="foodcode"]')
    ) {
      await refreshCalculationTable(nutritionData);
    }
  });
}