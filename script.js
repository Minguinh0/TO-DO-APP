var items = ['item 1', 'item 2', 'item 3', 'item 4'];

var list = document.querySelector('#myList');

var addButton = document.querySelector('#btnCreate');


items.forEach(function(item) {
    CreateItem(item);
   
});



var close = document.getElementsByClassName('close');

for(var i = 0; i< close.length; i++) {
    close[i].onclick = function() {
        var li = this.parentElement;
        li.style.display = 'none';
    
    }
}

list.addEventListener('click', function(item){


    if(item.target.tagName = 'li') {
        item.target.classList.toggle('checked');
    }

});

addButton.addEventListener('click', () => {
    var item = document.querySelector('#txtItem').value;

    if (item === '') {
        alert('Please enter a list item');
        return;
    }
    
    CreateItem(item);

});

function CreateItem(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);

    li.className = 'list-group-item';
    li.appendChild(t);

    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.onlick = function() {
        var li = this.parentElement;
        li.style.display='none';
    }

};
