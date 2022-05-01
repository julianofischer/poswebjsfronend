function toggle(){
    const img = document.getElementById("myImage");
    const btn = document.getElementById("toggle-btn");

    if(img.src.endsWith("pic_bulboff.gif")){
        img.src = "pic_bulbon.gif"
        btn.innerHTML = "Desligar"
    }else{
        img.src = "pic_bulboff.gif"
        btn.innerHTML = "Ligar"
    }
}