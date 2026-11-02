import { t } from "../i18n/i18n.js";

export function mountFooter(root) {
  if (!root) return;

  root.innerHTML = `
    <footer class="footer app-footer">
      <div class="container">
        <div class="columns is-multiline is-centered">

          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">${t("footer.teamMembers")}</h3>
              <ul>
                <li>
                  <a class="custom-link"
                     href="https://rda.go.kr/afaci/site/project/view?pageId=02020401&pageName=APPT#submenu02020401"
                     target="_blank" rel="noopener noreferrer">
                    ${t("footer.afaci")}
                  </a>
                </li>
                <li>
                  <img src="./img/muls.png" alt="MULS"
                       style="height: 1em; vertical-align: middle; margin-right: 5px;">
                  <a class="custom-link" href="https://muls.edu.mn"
                     target="_blank" rel="noopener noreferrer">
                    ${t("footer.muls")}
                  </a>
                </li>
                <li>
                  <img src="./img/rda.png" alt="RDA"
                       style="height: 1em; vertical-align: middle; margin-right: 5px;">
                  <a class="custom-link" href="https://www.rda.go.kr/foreign/ten2/"
                     target="_blank" rel="noopener noreferrer">
                    ${t("footer.rda")}
                  </a>
                </li>
                <li>
                  <img src="./img/mfai.svg" alt="MOFA"
                       style="height: 1em; vertical-align: middle; margin-right: 5px;">
                  <a class="custom-link" href="https://www.mofa.gov.mn"
                     target="_blank" rel="noopener noreferrer">
                    ${t("footer.mfali")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">${t("footer.coreMembers")}</h3>
              <ul>
                <li><i class="fas fa-user-tie fa-fw" style="margin-right: 6px;"></i> ${t("footer.projectInvestigators")}</li>
                <li><i class="fas fa-flask fa-fw" style="margin-right: 6px;"></i> ${t("footer.researchers")}</li>
                <li><i class="fas fa-users fa-fw" style="margin-right: 6px;"></i> ${t("footer.others")}</li>
                <li><i class="fas fa-laptop-code fa-fw" style="margin-right: 6px;"></i> ${t("footer.softwareDeveloper")}</li>
              </ul>
            </div>
          </div>

          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">${t("footer.contactInformation")}</h3>
              <ul>
                <li><i class="fas fa-university fa-fw" style="margin-right: 6px;"></i> ${t("footer.university")}</li>
                <li><i class="fas fa-map-marker-alt fa-fw" style="margin-right: 6px;"></i> ${t("footer.address")}</li>
                <li><i class="fas fa-phone fa-fw" style="margin-right: 6px;"></i> ${t("footer.phone")}: (+976)-89075531</li>
                <li>
                  <i class="fas fa-envelope fa-fw" style="margin-right: 6px;"></i>
                  ${t("footer.email")}:
                  <a class="custom-link" href="mailto:orgilid@muls.edu.mn">orgilid@muls.edu.mn</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  `;

  root.querySelectorAll(".app-footer img").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
    }, { once: true });
  });
}
