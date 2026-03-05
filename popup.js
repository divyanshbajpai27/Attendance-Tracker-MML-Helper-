const historyList = document.getElementById("history");
const stats = document.getElementById("stats");
const scrollBtn = document.getElementById("scrollDown");

chrome.storage.local.get(["attendance"], (data) => {
  const records = data.attendance || [];

  records.sort((a, b) => new Date(a.date) - new Date(b.date));

  let present = records.length;

  stats.textContent = `Sessions Attended: ${present}`;

  records.forEach((r) => {
    const li = document.createElement("li");

    li.textContent = `${r.date} - ${r.status}`;

    historyList.appendChild(li);
  });

  updateArrow(); // check arrow visibility after list loads
});

function updateArrow() {
  if (
    historyList.scrollHeight > historyList.clientHeight &&
    historyList.scrollTop + historyList.clientHeight <
      historyList.scrollHeight - 5
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.addEventListener("click", () => {
  historyList.scrollTo({
    top: historyList.scrollHeight,
    behavior: "smooth",
  });
});

historyList.addEventListener("scroll", updateArrow);

document.getElementById("download").addEventListener("click", () => {
  chrome.storage.local.get(["attendance"], (data) => {
    const records = data.attendance || [];

    let csv = "Date,Code,Status\n";

    records.forEach((r) => {
      csv += `${r.date},${r.code},${r.status}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "attendance.csv";

    a.click();
  });
});

document.getElementById("clear").addEventListener("click", () => {
  chrome.storage.local.clear();

  location.reload();
});

const importBtn = document.getElementById("importBtn");
const fileInput = document.getElementById("fileInput");

importBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    const text = e.target.result;

    const rows = text.trim().split("\n").slice(1); // skip header

    const imported = rows.map((row) => {
      const [date, code, status] = row.split(",");

      return {
        date: date.trim(),
        code: code.trim(),
        status: status.trim(),
      };
    });

    chrome.storage.local.get(["attendance"], (data) => {
      const existing = data.attendance || [];

      const merged = [...existing];

      imported.forEach((newRecord) => {
        const exists = merged.some((r) => r.date === newRecord.date);

        if (!exists) merged.push(newRecord);
      });

      chrome.storage.local.set({ attendance: merged }, () => {
        location.reload();
      });
    });
  };

  reader.readAsText(file);
});
