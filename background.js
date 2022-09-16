const todos = [
    {
        name: "Take your trash out",
        checked: false
    },
    {
        name: "Complete chrome extension",
        checked: false
    }
];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ todos });
    console.log(`Currently you have ${todos.length} task(s) left`);
});
