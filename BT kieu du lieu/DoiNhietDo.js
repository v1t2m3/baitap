function doi()
{
    var a = parseFloat(document.getElementById(doC).value);
    var b = (a*1.8+3).toFixed(2);
    document.write(b);
    /* document.getElementById(doF).innerHTML=b; */
}