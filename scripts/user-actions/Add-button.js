'use strict';

const addTaskHandler = () => {


    //create HTML elements
    //let div0 = document.createElement("div");
    let div1 = document.createElement("div");
    let h5 = document.createElement("h5");
    let div2 = document.createElement("div");
    let aDone = document.createElement("a");
    let aEdit = document.createElement("a");
    let aDelete = document.createElement("a");
    let iDone = document.createElement("i");
    let iEdit = document.createElement("i");
    let iDelete = document.createElement("i");


    //adjust class name
    //div0.setAttribute("class", "item-list");
    div1.setAttribute("class", "item my-3");
    h5.setAttribute("class", "item-name text-capitalize");
    div2.setAttribute("class", "item-icons");
    aDone.setAttribute("class", "complete-item mx-2 item-icon");
    aEdit.setAttribute("class", "edit-item mx-2 item-icon");
    aDelete.setAttribute("class", "delete-item item-icon");
    iDone.setAttribute("class", "far fa-check-circle");
    iDone.setAttribute("style", "color: var(--mainGreen);");
    iEdit.setAttribute("class", "far fa-edit");
    iEdit.setAttribute("style", "color: var(--mainBlue);");
    iDelete.setAttribute("class", "far fa-times-circle");
    iDelete.setAttribute("style", "color: var(--mainRed);");



    //child attribute
    //document.getElementsByClassName("item-container")[0].appendChild(div0);
    document.getElementsByClassName("item-list")[0].appendChild(div1);
    div1.appendChild(h5);
    div1.appendChild(div2);
    div2.appendChild(aDone);
    div2.appendChild(aEdit);
    div2.appendChild(aDelete);
    aDone.appendChild(iDone);
    aEdit.appendChild(iEdit);
    aDelete.appendChild(iDelete);
    
    let userInput = document.getElementById("itemInput").value;

    if (userInput === null) {
        alert("You must write something!");
    } else {

        let input = document.createTextNode(userInput);
        h5.appendChild(input);
        //document.getElementsByClassName("item-name").innerHTML = userInput;
    }

}
