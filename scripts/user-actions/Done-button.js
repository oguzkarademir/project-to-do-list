function doneButtonHandler() {
    debugger;
    
    let items = document.querySelectorAll('.item');
    
    items.forEach(function(item) {
        item.querySelector('.complete-item').addEventListener('click', function(){
            item.querySelector('.item-name').classList.toggle('completed');
            this.classList.toggle('visibility');
        });
    });
    
}

    
