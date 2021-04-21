function xuat() {
    var a = document.getElementById("soA").value;
    var b = document.getElementById("soB").value;
    var c = document.getElementById("soC").value;
    /* alert('Ngày '+c+' tháng '+b+' năm '+a); */
    document.getElementById('date').innerHTML='Ngày tháng năm :'+c+'-'+b+'-'+a;
}
