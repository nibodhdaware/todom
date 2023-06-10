let list = document.getElementById("list");
let addBtn = document.getElementById("add-btn");
let todoIp = document.getElementById("todo-ip");

const getTodos = () => {
    chrome.storage.sync.get("todos", ({ todos }) => {
        if (todos && todos.length > 0) {
            todos.forEach((todo) => {
                var list_elem = document.createElement("li");
                var elem_check = document.createElement("input");
                elem_check.type = "checkbox";
                elem_check.name = todo;
                elem_check.id = todo;
                var elem_label = document.createElement("label");
                elem_label.setAttribute("for", todo);
                elem_label.textContent = todo;

                list_elem.appendChild(elem_check);
                list_elem.appendChild(elem_label);
                list.appendChild(list_elem);

                list_elem.addEventListener("click", () => {
                    const updatedTodo = todos.filter((task) => task != todo);
                    chrome.storage.sync.set({ todos: updatedTodo });
                    list_elem.remove();
                });
            });
        }
    });
};

getTodos();

addBtn.addEventListener("click", () => {
    const newTodo = todoIp.value;
    if (newTodo) {
        chrome.storage.sync.get("todos", ({ todos }) => {
            todos.push(newTodo);
            chrome.storage.sync.set({ todos: todos });
        });

        var list_elem = document.createElement("li");
        var elem_check = document.createElement("input");
        elem_check.type = "checkbox";
        elem_check.name = newTodo;
        elem_check.id = newTodo;
        var elem_label = document.createElement("label");
        elem_label.setAttribute("for", newTodo);
        elem_label.textContent = newTodo;

        list_elem.appendChild(elem_check);
        list_elem.appendChild(elem_label);
        list.appendChild(list_elem);

        todoIp.value = "";
    }
});
