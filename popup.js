let list = document.getElementById("list");

chrome.storage.sync.get("tasks", ({tasks}) => {
    tasks.map((task) => {
        list.innerHTML = `<input type="checkbox">
                            ${task}
                          </input>`
    })
})
