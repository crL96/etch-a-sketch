const container = document.querySelector("#container");

//create function that generates grid of divs, n*n
function generateDivGrid(n) {
    //generate n rows
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.className = "row";

        //filling each row with boxes
        for (let i = 0; i < n; i++) {
            const box = document.createElement("div");
            box.className = "box";
    
            row.appendChild(box);
        }

        container.appendChild(row);
    }
}

generateDivGrid(16);


//Add eventlistener to each box and if mouse enters, add css class to change color
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.classList.add("hovered");
    });
});