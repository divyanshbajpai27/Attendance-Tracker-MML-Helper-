console.log("Attendance extension active");

let lastCode = "";

function initTracker() {
  if (!window.location.href.includes("/trainee-portal")) return;

  const observer = new MutationObserver(() => {
    const input = document.querySelector('input[placeholder*="Attendance"]');

    if (input && !input.dataset.listenerAdded) {
      input.dataset.listenerAdded = "true";

      input.addEventListener("input", () => {
        const value = input.value.trim();

        if (/^\d{8}$/.test(value)) {
          lastCode = value;
          console.log("Captured code:", lastCode);
        }
      });
    }

    const modal = document.querySelector(".modal-body.fontCls");

    if (!modal) return;

    const text = modal.innerText;

    const success =
      text.includes("Attendance marked successfully") ||
      text.includes("Your Attendance has been marked already");

    if (!success) return;

    const today = new Date().toLocaleDateString();

    chrome.storage.local.get(["attendance"], (data) => {
      let records = data.attendance || [];

      const exists = records.some((r) => r.date === today);

      if (!exists) {
        records.push({
          date: today,
          code: lastCode || "Unknown",
          status: "Present",
        });

        chrome.storage.local.set({ attendance: records });

        console.log("Attendance recorded:", lastCode);
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

initTracker();
