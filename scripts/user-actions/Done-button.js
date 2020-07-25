function doneButtonHandler () {
    debugger;
    
    let item = document.querySelector('.item');
    
    item.querySelector('.complete-item').addEventListener('click', function(){
        item.querySelector('.item-name').classList.toggle('completed');
        this.classList.toggle('visibility');
    });
}