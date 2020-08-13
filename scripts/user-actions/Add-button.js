'use strict';
const form = document.querySelector('#itemForm');
const itemInput = document.querySelector('#itemInput');

function getLocalStorage() {

    const todoStorage = localStorage.getItem('toDoList');
    if (todoStorage === 'undefined' || todoStorage === null){
        toDoList = [];
    } else {
        toDoList = JSON.parse(todoStorage);
        showList(toDoList);
    }
}

const setLocalStorage = function(toDoList){
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

// get local storage from page
getLocalStorage();

function addTaskHandler(e) {
    debugger;

    e.preventDefault();
        const itemName = itemInput.value;
        
        if (itemName.length === 0){
            feedback.innerHTML = 'Please Enter Valid Value';
            feedback.classList.add('showItem', 'alert-danger');
            setTimeout(
                function(){
                    feedback.classList.remove('showItem');
                    }, 3000);
        } else {
            toDoList.push(itemName);
            setLocalStorage(toDoList);
            showList(toDoList);
            //add event listeners to icons;
            //handleItem(itemName);
        }
        
        itemInput.value = '';
    
}

    form.addEventListener('submit', addTaskHandler);

    