let list = document.getElementById("list");

const getTodos = async () => {
    const { todos } = await chrome.storage.sync.get("todos");
    todos.forEach(todo => {
        var list_elem = document.createElement('li')
        var task_name = document.createTextNode(todo.name)

        list_elem.appendChild(task_name)
        list.appendChild(list_elem)

        list_elem.addEventListener('click', () => {
            list_elem.remove()
        })
    })
}

getTodos()
