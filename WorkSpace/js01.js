/* let f = 20.5
let b = true
let s = 'Hà Nội'

document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s) */

document.write('<br/>')
let width = prompt("Nhập chiều rộng")
let height = prompt("Nhập chiều dài")
let area = width * height
alert('Diện tích = ' + area)

let soa = prompt("Nhập số a")
let sob = prompt("Nhập số b")
let soc
if  (soa%sob==0) {
    alert('Số a là bội số của b')
} else {
    alert('Số a không là bội số của b')
}