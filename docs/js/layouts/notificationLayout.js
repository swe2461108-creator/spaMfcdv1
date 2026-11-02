export function renderNotification(message, type = "warning") {
  const allowedTypes = ["warning", "danger", "success", "info", "primary"];
  const safeType = allowedTypes.includes(type) ? type : "warning";

  // Messages passed here come from the project's own translation files and
  // intentionally contain formatting tags such as <strong>, <br>, <code> and <a>.
  return `
    <div class="notification is-light is-${safeType}">
      ${String(message ?? "")}
    </div>
  `;
}
