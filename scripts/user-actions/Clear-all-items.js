function clearAllElementsHandler() {
    debugger;

    toDoList.forEach(element => {
        let item = document.querySelector('.item');
        itemList.removeChild(item);

    });

    toDoList.splice(0, toDoList.length);

    console.log("--- 'Clear All' button was pressed ---")
    console.log(`List: ${(toDoList.length !== 0) ? toDoList : 'empty'}`);
}