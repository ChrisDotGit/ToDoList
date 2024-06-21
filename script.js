// This Script creates a div element with div childs that will be appended in Task table
// Created on June 19, 2024
// Creator ChrisL
// Version 1.0



function addCell(){
    // create parent div element
    const divRow = document.createElement('div');
    divRow.className = "row";           // add class style for the parent element
    data = getData();                   // retrieves all data enterd by user
    items = data['items'];
    color = data['color'];
    
    let isEmpty = isInputEmpty();
   
    if(!isEmpty) {                   // only proceed if there is no empty input field
        let i = 0
        for (i in items) {                  // this loop creates the child div elements to be appended in parent element
            const divCell = document.createElement('div');
            divCell.className = "cell";
            divCell.innerHTML = items[i];
            divCell.style.backgroundColor = `var(${color})`;
            divRow.appendChild(divCell);
        }   
        
        document.getElementById('items').appendChild(divRow);   //Appends the divRow (parent element) to the index.html
        clearInputs();  
    }
}





// This function retrieves all the data entered by the user.
// Returns: Object -> items --- for div innerHTML
// Returns: Object -> color --- for div backgroundColor
function getData(){
    const priorityDropdown = document.getElementById("priority");
    const selectedOption = priorityDropdown.options[priorityDropdown.selectedIndex];

    let priorityColor = selectedOption.value;
    let priorityLabel = selectedOption.textContent;
    let name = document.getElementById("input_name").value;
    let task = document.getElementById("input_task").value;

    return {items: [name,task,priorityLabel],
            color: priorityColor};
}




// Clear all values in Input fields
// This function will be called after a task is appended
function clearInputs(){
    document.getElementById("input_name").value = '';
    document.getElementById("input_task").value = '';
}



// Check if a input field is empty
function isInputEmpty(){
    let name = document.getElementById("input_name").value;
    let task = document.getElementById("input_task").value;

    if (name === '' || task ===''){
        return true};
    
    return false;

}