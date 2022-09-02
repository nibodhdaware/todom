const tasks = [
    {
        task: "Take your trash out",
        complete: true
    },
    {
        task: "Complete chrome extension",
        complete: false
    }
];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ tasks });
    console.log(`Currently you have ${tasks.length} task(s) left`);
});
