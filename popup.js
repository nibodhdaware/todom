let list = document.getElementById("list");
let addBtn = document.getElementById("add-btn")
let todoIpDiv = document.getElementById('input-todo-div')
let todoIp = document.getElementById('todo-ip')

const getTodos = async () => {
    const { todos } = await chrome.storage.sync.get("todos");
    todos.forEach(todo => {
        var list_elem = document.createElement('li')
        var task_name = document.createTextNode(todo)

        list_elem.appendChild(task_name)
        list.appendChild(list_elem)

        list_elem.addEventListener('click', () => {
            const updatedTodo = todos.filter(task => task != todo);
            chrome.storage.sync.set({todos: updatedTodo})
            list_elem.remove()
        })
    })
    addBtn.addEventListener('click', () => {
        let updatedTodo = todos.push(todoIp.innerText)
        chrome.storage.sync.set({todos: updatedTodo})
    })

}

getTodos()
