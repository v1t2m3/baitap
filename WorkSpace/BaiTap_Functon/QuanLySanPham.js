var productArr = new Array;
function Add() {
    var nameproduct = document.getElementById('nameproduct').value;
    productArr.push(nameproduct);
    renewtable();
}
function renewtable () {
    var tagTable = document.createElement("table");
          tagTable.border = 1;
    for (var i =0 ; i<productArr.length; i++) {
        var tagRow = document.createElement("tr");
        tagTable.appendChild(tagRow);
        var tagColumn = document.createElement("td");
        tagColumn.appendChild(productArr[i]);
        tagRow.appendChild(tagColumn);
    }
}