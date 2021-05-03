function len() {
    let a = parseInt(document.getElementById("tank").style["top"]);
    let b = parseInt(document.getElementById("tank").style["left"]);
    let c = parseInt(document.getElementById("boom").style["top"]);
    let d = parseInt(document.getElementById("boom").style["left"]);
    document.getElementById("tank").style["top"] = a - 19 + "px";
    a = parseInt(document.getElementById("tank").style["top"]);
    console.clear();
    console.log('a=',a);
    console.log('b=',b);
    console.log('c=',c);
    console.log('d=',d);
    if (a==c && b ==d) {
        document.getElementById("tank").style.backgroundImage = "url('explosion.png')";
        document.getElementById("boom").style.display = "none";
    }
}
function trai() {
    let a = parseInt(document.getElementById("tank").style["top"]);
    let b = parseInt(document.getElementById("tank").style["left"]);
    let c = parseInt(document.getElementById("boom").style["top"]);
    let d = parseInt(document.getElementById("boom").style["left"]);
    document.getElementById("tank").style["left"] = b - 19 + "px";
    b = parseInt(document.getElementById("tank").style["left"]);
    console.clear();
    console.log('a=',a);
    console.log('b=',b);
    console.log('c=',c);
    console.log('d=',d);
    if (a==c && b ==d) {
        document.getElementById("tank").style.backgroundImage = "url('explosion.png')";
        document.getElementById("boom").style.display = "none";
    }
}
function xuong() {
    let a = parseInt(document.getElementById("tank").style["top"]);
    let b = parseInt(document.getElementById("tank").style["left"]);
    let c = parseInt(document.getElementById("boom").style["top"]);
    let d = parseInt(document.getElementById("boom").style["left"]);
    document.getElementById("tank").style["top"] = a + 19 + "px";
    a = parseInt(document.getElementById("tank").style["top"]);
    console.clear();
    console.log('a=',a);
    console.log('b=',b);
    console.log('c=',c);
    console.log('d=',d);
    if (a==c && b ==d) {
        document.getElementById("tank").style.backgroundImage = "url('explosion.png')";
        document.getElementById("boom").style.display = "none"; 
    }
}
function phai(){
    let a = parseInt(document.getElementById("tank").style["top"]);
    let b = parseInt(document.getElementById("tank").style["left"]);
    let c = parseInt(document.getElementById("boom").style["top"]);
    let d = parseInt(document.getElementById("boom").style["left"]);
    document.getElementById("tank").style["left"] = b + 19 + "px";
    b = parseInt(document.getElementById("tank").style["left"]);
    console.clear();
    console.log('a=',a);
    console.log('b=',b);
    console.log('c=',c);
    console.log('d=',d);
    if (a==c && b ==d) {
        document.getElementById("tank").style.backgroundImage = "url('explosion.png')";
        document.getElementById("boom").style.display = "none";
    }    
}