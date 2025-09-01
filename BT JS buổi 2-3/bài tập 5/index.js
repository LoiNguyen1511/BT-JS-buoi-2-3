let soCoHaiChuSo = prompt(" Mời bạn nhập số có 2 chữ số vào đây");

let soHangChuc = soCoHaiChuSo % 10;
let soHangDonVi = soCoHaiChuSo / 10 - soHangChuc * 0.1;
const tongCua2ChuSo = soHangDonVi + soHangChuc;

console.log("Tổng của 2 chữ số là :", tongCua2ChuSo);
