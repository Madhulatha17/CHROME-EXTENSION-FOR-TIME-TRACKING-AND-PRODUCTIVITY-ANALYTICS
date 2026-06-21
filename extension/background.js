let activeTab = null;
let startTime = Date.now();

const productiveSites = [
  "github.com",
  "leetcode.com",
  "stackoverflow.com",
  "w3schools.com",
  "geeksforgeeks.org"
];

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);

  if (activeTab) {
    saveTime(activeTab.url);
  }

  activeTab = tab;
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    activeTab = tab;
    startTime = Date.now();
  }
});

function saveTime(url) {
  if (!url) return;

  const timeSpent = Math.floor((Date.now() - startTime) / 1000);

  let category = "Unproductive";

  if (
    productiveSites.some(site => url.includes(site))
  ) {
    category = "Productive";
  }

  fetch("http://localhost:5000/activity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      website: url,
      timeSpent,
      category
    })
  });
}
