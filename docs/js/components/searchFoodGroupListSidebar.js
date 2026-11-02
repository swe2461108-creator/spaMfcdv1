import { escapeHtml } from "../fn/format.js";
import { getLocalizedValue, t } from "../i18n/i18n.js";

// Текстийг ижил хэлбэрт оруулах
function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

// Хоолны ангиллыг харуулах
function renderFoodGroup(group) {
  if (!group || !Array.isArray(group.items)) {
    return "";
  }

  const groupName = getLocalizedValue(group.groupName);

  // Хоолны давхардлыг арилгах
  const uniqueItems = [
    ...new Map(
      group.items.map((item) => [
        item.food_code,
        item
      ])
    ).values()
  ];

  return `
    <li>
      <a class="app-toggle-sublist" href="#" role="button">
        <span>${escapeHtml(groupName)}</span>
      </a>

      <ul class="app-sublist is-hidden">
        ${uniqueItems
          .map(
            (item) => `
              <li>
                <label class="app-sublist-item">
                  <input
                    type="checkbox"
                    name="foodcode"
                    value="${escapeHtml(item.food_code)}"
                  >
                  <span>${escapeHtml(
                    getLocalizedValue(item.food_name)
                  )}</span>
                </label>
              </li>
            `
          )
          .join("")}
      </ul>
    </li>
  `;
}

// Ангиллын жагсаалтыг харуулах
export function renderFoodGroupList(foodGroups = []) {
  if (!Array.isArray(foodGroups)) {
    return "";
  }

  // Давхардсан ангиллыг арилгах
  const uniqueGroups = [
    ...new Map(
      foodGroups.map((group) => [
        normalizeText(getLocalizedValue(group.groupName)),
        group
      ])
    ).values()
  ];

  return `
    <p class="menu-label app-menu-label">
      🔍︎ ${t("sidebar.searchByFoodGroups")}:
    </p>

    <ul class="menu-list">
      ${uniqueGroups.map(renderFoodGroup).join("")}
    </ul>
  `;
}