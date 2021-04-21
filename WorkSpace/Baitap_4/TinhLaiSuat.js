function xuat() {
    var a = parseInt(document.getElementById("soA").value);
    var b = parseFloat(document.getElementById("soB").value);
    var c = parseInt(document.getElementById("soC").value);
    var d = a +a*b*c/100;
    document.getElementById('Tien').innerHTML='Số tiền phải trả: '+d;
}