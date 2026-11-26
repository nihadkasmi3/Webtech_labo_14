fetch("todos.json")
    .then(response => response.json())
    .then(todos => {
        let completedTodos = [];

        for (let index = 0; index < todos.length; index++) {
            if (todos[index].completed === true) {
                completedTodos.push(todos[index]);
            }
        }

        for (let index = 0; index < completedTodos.length; index++) {
            console.log(completedTodos[index].title);
        }
    });
