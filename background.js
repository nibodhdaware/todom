const tasks = ["Take your trash out"];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ tasks });
    console.log(`Currently you have ${tasks.length} task(s) left`);
});
