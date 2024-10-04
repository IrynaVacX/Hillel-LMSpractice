document.addEventListener("DOMContentLoaded", () => {
    displayPifagorTable();
});

function displayPifagorTable() {
    const table = document.createElement("table");
    const tBody = document.createElement("tBody");
    for(let i = 0; i <= 10; i++) {
        const newRow = document.createElement("tr");
        for(let j = 0; j <= 10; j++) {
            const newColumn = document.createElement("td");
            if(i === 0 || j === 0) {
                newColumn.textContent = i ? i : j;
                newColumn.setAttribute("align", "center");
                newColumn.setAttribute("bgcolor", "lightsalmon");
                newRow.appendChild(newColumn);
                continue;
            }
            newColumn.textContent = i * j;
            newColumn.setAttribute("align", "center");
            newColumn.setAttribute("bgcolor", (j + i) % 2 ? "bisque" : "burlywood");
            newRow.appendChild(newColumn);
        }
        tBody.appendChild(newRow);
    }
    table.appendChild(tBody);
    table.setAttribute("border", "2");
    table.setAttribute("cellpadding", "5");
    document.body.appendChild(table);
}
