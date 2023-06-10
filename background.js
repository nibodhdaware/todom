todos = ["Buy new turtle", "Take over the world"];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ todos: todos });
    console.log(`Currently you have ${todos.length} task(s) left`);
});
