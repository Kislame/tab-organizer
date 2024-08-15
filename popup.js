// Save Tab Group functionality
document.getElementById('saveButton').addEventListener('click', () => {
  const groupName = document.getElementById('groupName').value;
  if (groupName) {
    chrome.runtime.sendMessage({ command: 'save', groupName: groupName });
  } else {
    alert('Please enter a group name.');
  }
});

// Load Tab Group functionality
document.getElementById('loadButton').addEventListener('click', () => {
  const groupName = document.getElementById('groupName').value;
  if (groupName) {
    chrome.runtime.sendMessage({ command: 'load', groupName: groupName });
  } else {
    alert('Please enter a group name.');
  }
});

// Group Tabs by Domain functionality
document.getElementById('groupTabs').addEventListener('click', () => {
  chrome.tabs.query({}, (tabs) => {
    let tabGroups = {};

    tabs.forEach((tab) => {
      let domain = new URL(tab.url).hostname;
      if (!tabGroups[domain]) {
        tabGroups[domain] = [];
      }
      tabGroups[domain].push(tab);
    });

    Object.keys(tabGroups).forEach((domain) => {
      chrome.tabs.group(
        { tabIds: tabGroups[domain].map((t) => t.id) },
        (groupId) => {
          chrome.tabGroups.update(groupId, { title: domain });
        }
      );
    });
  });
});

// List All Tabs functionality
document.getElementById('listTabs').addEventListener('click', () => {
  chrome.tabs.query({}, (tabs) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    tabs.forEach((tab) => {
      let tabInfo = document.createElement('p');
      tabInfo.textContent = tab.title;
      outputDiv.appendChild(tabInfo);
    });
  });
});

// Show Saved Groups functionality
document.getElementById('showGroupsButton').addEventListener('click', () => {
  chrome.storage.local.get(null, (items) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    const groupNames = Object.keys(items);
    if (groupNames.length > 0) {
      groupNames.forEach((groupName) => {
        let groupItem = document.createElement('p');
        groupItem.textContent = groupName;
        outputDiv.appendChild(groupItem);
      });
    } else {
      outputDiv.textContent = 'No saved groups found.';
    }
  });
});
