function tinh() {
    var a = parseFloat(document.getElementById("soA").value);
    var b = (2*a*3.14).toFixed(2);
    var c = (a*a*3.14).toFixed(2);
    document.getElementById('tinh').innerHTML='Chu vi: '+b+' ; Diện tích: '+c;
}