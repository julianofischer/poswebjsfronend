function on(btn){
    document.getElementById('myImage').src='pic_bulbon.gif';
    btn.innerHTML='Desligar';
}

function off(btn){
    document.getElementById('myImage').src='pic_bulboff.gif';
    btn.innerHTML='Ligar';
}

function toggle(){
    const btn = document.getElementById('toggle-btn');
    if (btn.innerHTML.trim() == 'Ligar'){
        on(btn);
    }else{
        off(btn);
    }
}