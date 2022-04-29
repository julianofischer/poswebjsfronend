function muda(){
    const elements = document.getElementsByTagName('input');
    const theInput = elements[0];
    const theDiv = document.getElementsByClassName('colored-div')[0];
    theDiv.style.backgroundColor = theInput.value;
}