if(!window.localStorage.currentId){
    window.localStorage.currentId = 1;
}

function createItem(item, key){
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));

    const span = document.createElement('span');
    span.appendChild(document.createTextNode('X'));
    span.classList.add("close");
    span.addEventListener("click", function(){
        this.parentElement.style.display = 'none';
        const idToRemove = this.parentElement.id;
        window.localStorage.removeItem(idToRemove);
        const li = this.parentElement;
        const ul = li.parentElement;
        ul.removeChild(li);
    });
    li.id = key;
    li.appendChild(span);
    ul.appendChild(li);
}

function load(){
    const items = {...localStorage}
    const keys = Object.keys(items);
    Array.from(keys).forEach(key => {
        if(key != 'currentId'){
            const item = items[key];
            createItem(item, key);
        }
    });
    console.log(items);
}


function keyEntered(){
    console.log(event);
    if(event.code === 'Enter'){
        adicionar();
    }
}

function adicionar(){
    const item = document.getElementById('item').value.trim();
    const currentId = window.localStorage.currentId;
    createItem(item, currentId);
    window.localStorage.setItem(currentId, item);
    window.localStorage.currentId++;
}

load();