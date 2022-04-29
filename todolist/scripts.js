if (!window.localStorage.currentId) {
    window.localStorage.currentId = 1;
}

const items = { ...localStorage }
const keys = Object.keys(items);
Array.from(keys).forEach(key => {
    if (key != 'currentId') {
        const item = items[key];
        const ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));

        const span = document.createElement("span");
        span.appendChild(document.createTextNode("X"))
        span.classList.add("close");
        span.addEventListener("click", function () {
            this.parentElement.style.display = 'none';
        });
        
        li.id = key;
        li.appendChild(span);
        ul.appendChild(li);
    }
});

const closebtns = document.getElementsByClassName("close");
Array.from(closebtns).forEach(element => {
    element.addEventListener("click", function(){
        this.parentElement.remove();
        window.localStorage.removeItem(this.parentElement.id)
    })
});

function keyEntered(){
    if(event.key === 'Enter'){
        adicionar();
    }
}

function adicionar() {
    const item = document.getElementById('item').value.trim();
    const ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));

    const span = document.createElement("span");
    span.appendChild(document.createTextNode("X"))
    span.classList.add("close");
    span.addEventListener("click", function () {
        this.parentElement.style.display = 'none';
    });
    li.appendChild(span);
    ul.appendChild(li);
    window.localStorage.setItem(window.localStorage.currentId, item);
    window.localStorage.currentId++;
}