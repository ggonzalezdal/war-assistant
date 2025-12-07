// Helper: show one view and hide the others
function showView(id) {
  const views = document.querySelectorAll(".view");
  views.forEach((view) => {
    view.classList.toggle("active", view.id === id);
  });

  // Update sidebar active state (only nav-link buttons)
  const navLinks = document.querySelectorAll(".app-sidebar .nav-link");
  navLinks.forEach((btn) => {
    const target = btn.getAttribute("data-target");
    btn.classList.toggle("active", target === id);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Elements used in the confirmation flow
  const previewBtn = document.getElementById("btn-preview-confirmation");
  const confirmModal = document.getElementById("reservation-confirmation");
  const confirmOkBtn = document.getElementById("confirm-ok");

  // Button: “Mark as confirmed & go to today's reservations”
  const markConfirmedBtn = document.querySelector(
    '#view-confirmation .primary-btn[data-target="view-reservations"]'
  );

  // 1) Specific shortcut: from "Reservation draft" to Confirmation view
  if (previewBtn) {
    previewBtn.addEventListener("click", () => {
      showView("view-confirmation");
    });
  }

  // 2) Confirmation flow:
  //    Click "Mark as confirmed & go..." -> show modal
  //    Click "OK" in modal -> close modal and go to today's reservations
  if (markConfirmedBtn && confirmModal && confirmOkBtn) {
    markConfirmedBtn.addEventListener("click", (event) => {
      event.preventDefault(); // avoid generic data-target navigation
      confirmModal.classList.remove("hidden");
      // remember where to go after OK (could reuse later for other flows)
      confirmModal.dataset.nextView = "view-reservations";
    });

    confirmOkBtn.addEventListener("click", () => {
      confirmModal.classList.add("hidden");
      const nextView = confirmModal.dataset.nextView || "view-reservations";
      showView(nextView);
    });
  }

  // 3) Generic handler: any element with data-target switches view,
  //    EXCEPT the two buttons that have custom behaviour above
  document.querySelectorAll("[data-target]").forEach((el) => {
    if (el === previewBtn || el === markConfirmedBtn) {
      return; // skip, already wired with specific logic
    }

    el.addEventListener("click", () => {
      const targetId = el.getAttribute("data-target");
      if (targetId) {
        showView(targetId);
      }
    });
  });

  // Ensure start on the landing view (in case HTML changes later)
  showView("view-landing");
});
