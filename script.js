function addCell(){
    const divRow = document.createElement('div');
    divRow.className = "row";
    items = ['item 1', 'oldtask', 'descp']
    let i = 0
    for (i in items) {
        const divCell = document.createElement('div');
        divCell.className = "cell";
        divCell.innerHTML = items[i]
        divRow.appendChild(divCell);
    }   

    document.getElementById('items').appendChild(divRow);

}