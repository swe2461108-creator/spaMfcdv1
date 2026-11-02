export function renderPdfModal() {
  return `
    <div class="modal" id="pdfModal">
      <div class="modal-background" data-close-pdf></div>

      <div class="modal-content book-pdf-modal-content">
        <iframe
          id="pdfFrame"
          class="book-pdf-frame"
          src=""
          title="PDF viewer"
        ></iframe>
      </div>

      <button class="modal-close is-large" aria-label="close" data-close-pdf></button>
    </div>
  `;
}

export function bindPdfModalEvents() {
  document.querySelectorAll(".book-view-btn").forEach((button) => {
    button.addEventListener("click", () => {
      openPdfModal(button.dataset.pdf);
    });
  });

  document.querySelectorAll("[data-close-pdf]").forEach((button) => {
    button.addEventListener("click", closePdfModal);
  });
}

async function openPdfModal(url) {
  const modal = document.getElementById("pdfModal");
  const frame = document.getElementById("pdfFrame");

  if (!modal || !frame || !url) return;

  // PDF байхгүй үед хоосон viewer нээхээс сэргийлнэ.
  try {
    const response = await fetch(url, { method: "HEAD" });
    if (!response.ok) {
      window.alert("Энэ номын PDF файл төсөлд байхгүй байна. PDF файлыг docs/pdf хавтсанд байршуулна уу.");
      return;
    }
  } catch (error) {
    console.error("PDF шалгахад алдаа гарлаа:", error);
    window.alert("PDF файлыг шалгаж чадсангүй. Интернэт холболтоо шалгана уу.");
    return;
  }

  modal.classList.add("is-active");
  frame.src = `${url}#toolbar=0&navpanes=0&scrollbar=1`;
}

function closePdfModal() {
  const modal = document.getElementById("pdfModal");
  const frame = document.getElementById("pdfFrame");

  if (!modal || !frame) return;

  modal.classList.remove("is-active");
  frame.src = "";
}
