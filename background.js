chrome.runtime.onInstalled.addListener(() => {
  console.log('Tab Organizer Installed');
});

// Function to save the current tabs
function saveTabGroup(groupName) {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    const tabData = tabs.map((tab) => ({
      url: tab.url,
      title: tab.title,
    }));

    chrome.storage.local.set({ [groupName]: tabData }, () => {
      console.log(`Saved ${groupName} with ${tabs.length} tabs.`);
    });
  });
}

// Function to load a saved tab group
function loadTabGroup(groupName) {
  chrome.storage.local.get(groupName, (result) => {
    const tabs = result[groupName];
    if (tabs) {
      tabs.forEach((tab) => {
        chrome.tabs.create({ url: tab.url });
      });
    } else {
      console.log(`No tab group found for ${groupName}`);
    }
  });
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command === 'save') {
    saveTabGroup(message.groupName);
  } else if (message.command === 'load') {
    loadTabGroup(message.groupName);
  }
});
