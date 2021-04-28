function check(){
var a = document.getElementById("username").value;
var b = document.getElementById("pass").value;
var c = a.length;
var d = b.length;
if (c==0 ||d == 0) {
    document.getElementById("alarm").innerHTML = "Chua dien du thong tin";
    document.getElementById("alarm").style["color"] = "rgb(255, 21, 21)";
    }
    else if (a =="admin" && b =="123456") {
        document.getElementById("alarm").innerHTML = "Dang nhap thanh cong";
        document.getElementById("alarm").style["color"] = "blue";
        }
        else if (d<6) {
            document.getElementById("alarm").innerHTML = "Mat khau <12 va >6 ky tu";
            document.getElementById("alarm").style["color"] = "rgb(255, 21, 21)";
        }
            else {
                document.getElementById("alarm").innerHTML = "Ten hoac mat khau dang nhap sai";
                document.getElementById("alarm").style["color"] = "rgb(255, 21, 21)";   
            }


}