function doitien() {
    var a = document.getElementById("nation1").value; 
    var b = document.getElementById("nation2").value;
    var c;
    var d= document.getElementById("sotien").value;
    if ((a=="Japan") && (b=="Vietnam"))
    c = d*1500;
    if ((a=="China") && (b=="Vietnam"))
    c = d*600;
    if ((a=="Singapore") && (b=="Vietnam"))
    c = d*300;
    document.getElementById("result").innerHTML="Result: "+ c;
}