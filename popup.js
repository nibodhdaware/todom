let list = document.getElementById("list");

chrome.storage.sync.get("tasks", ({tasks}) => {
    tasks.forEach((task) => {
        var input = document.createElement('input')
        var label = document.createElement('label')
        var task_name = document.createTextNode(" " + task.task)
        var br = document.createElement('br')

        input.type = 'checkbox'
        input.className = 'task'
        input.checked = task.complete

        label.appendChild(input)
        label.appendChild(task_name)
        label.appendChild(br)
        list.appendChild(label)
    })
})
