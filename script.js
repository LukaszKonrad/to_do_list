{
    const tasks = [
        {
            content: "zadanie pierwsze",
            done: false,
        },
        {
            content: "zadanie drugie",
            done: true,
        },

    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();

    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
                render();
    };

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render(); 

    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);

            })

        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);

            })

        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
               <li class="li"
                  ${task.done ? " style=\"text-decoration: line-through\"" : ""}
                  >
                  <div class="button_container">
                  <button class="js-remove">🗑</button>
                  ${task.content}
                  <button class="js-done">${task.done ? "✔" : ""}</button>
                  </div>
               </li>
            `;
        }

        document.querySelector(".tasks__list").innerHTML = htmlString;

        bindEvents();
        
        


    };

    

    const onFormSumbit = (event)=> {
        event.preventDefault();

        const newTaskContent = document.querySelector(".form__input").value.trim();
         
        if(newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
        
    };

    const init = () => {
        render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSumbit);

    };

    init();

}