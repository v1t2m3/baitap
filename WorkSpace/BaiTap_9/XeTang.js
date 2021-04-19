function len(){
    let a = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = a - 19 + "px";
}
function trai(){
    let a = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = a - 19 + "px";
}
function xuong(){
    let a = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = a + 19 + "px";
}
function phai(){
    let a = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = a + 19 + "px";
}