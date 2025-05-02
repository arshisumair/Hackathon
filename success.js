document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("createForm");
    const todoColumn = document.getElementById("todo");
    const inProgressColumn = document.getElementById("inprogress");  
    const doneColumn = document.getElementById("done");              

    form.addEventListener("submit", (e) => {
        e.preventDefault();  

        
        const title = document.getElementById("task-Tittle").value.trim();
        const description = document.getElementById("discription").value.trim();
        const assigned = document.getElementById("assigned").value.trim();

        
        if (title === "" || description === "" || assigned === "") {
            alert("Please fill all fields!");
            return;
        }

    
        const taskCard = document.createElement("div");
        taskCard.className = "task-card";
        taskCard.style.border = "1px solid #ccc";
        taskCard.style.padding = "10px";
        taskCard.style.margin = "10px 0";
        taskCard.style.background = "#f9f9f9";
        taskCard.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <small>Assigned to: ${assigned}</small>
        `;

        
        const moveButton = document.createElement("button");
        moveButton.textContent = "Move to In Progress";
        moveButton.style.display = "block";
        moveButton.style.marginTop = "10px";

    
        taskCard.appendChild(moveButton);

        
        moveButton.addEventListener("click", () => {
            if (taskCard.parentElement.id === "todo") {
                inProgressColumn.appendChild(taskCard);
                moveButton.textContent = "Move to Done";
            } else if (taskCard.parentElement.id === "inprogress") {  
                doneColumn.appendChild(taskCard);
                moveButton.style.display = "none";  
            }
        });


        todoColumn.appendChild(taskCard);

        form.reset();
    });
});


