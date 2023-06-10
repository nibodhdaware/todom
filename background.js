chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ todos: [] });
    console.log(`Currently you have ${todos.length} task(s) left`);
});
