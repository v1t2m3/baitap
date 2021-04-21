let chieudai = prompt("Nhập chiều dài");
let chieurong= prompt("Nhập chiều rộng");
chieudai = parseInt (chieudai);
chieurong = parseInt (chieurong);
let dientich = chieudai * chieurong;
let chuvi = 2*(chieurong + chieudai);
/* alert("Diện tích là:"+ dientich) */
alert("Chu vi là:"+ chuvi);