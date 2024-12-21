document.getElementById("openSidebar").addEventListener("click", async () => {
    await chrome.sidePanel.setOptions({
        tabId,
        path: '../sidebar/sidebar.html',
        enabled: true
      });
  });
  