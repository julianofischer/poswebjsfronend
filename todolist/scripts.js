const closebtns = document.getElementsByClassName("close");
console.log(closebtns);

Array.from(closebtns).forEach(element => {
    element.addEventListener("click", function(){
        this.parentElement.remove();
    })
});

function adicionar(){
    const item = document.getElementById('item').value.trim();
    const ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));

    const span = document.createElement("span");
    span.appendChild(document.createTextNode("X"))
    span.classList.add("close");
    span.addEventListener("click", function(){
        this.parentElement.style.display = 'none';
    });
    li.appendChild(span);
    ul.appendChild(li);
}