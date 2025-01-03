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
            //add eventlistener to each box
            box.addEventListener("mouseenter", () => {
                box.classList.add("hovered");
            });
    
            row.appendChild(box);
        }

        container.appendChild(row);
    }
}

generateDivGrid(16);

//add reset button
const btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", () => {
    container.replaceChildren();
    generateDivGrid(16);
});
