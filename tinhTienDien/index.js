function tinhTien() {
    var hoten = document.getElementById("ten").value;
    var soKwEl = document.getElementById("soKw").value;
    var soKw = parseFloat(soKwEl); 
    var giaTien;

    if (soKw <= 50) {
        giaTien = soKw * 500;
    } else if (soKw <= 100) {
        giaTien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
        giaTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350) {
        giaTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        giaTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
    document.getElementById("result").classList.add("bg-warning");
    document.getElementById("result").innerHTML = `Họ tên: ${hoten} - Giá tiền: ${giaTien} VNĐ`;
}
