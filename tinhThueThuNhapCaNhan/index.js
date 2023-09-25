
function tinhThue(){
    var hoTen=document.getElementById("ten").value;
    var tongThuNhapEl=document.getElementById("tongThuNhap").value;
    var nguoiPhuThuocEl=document.getElementById("nguoiPhuThuoc").value;
    var thuNhapChiuThue = tongThuNhapEl - 4000000 - nguoiPhuThuocEl * 1600000;
    var thueSuat;
    
    if(thuNhapChiuThue <= 60000000){
        thueSuat=thuNhapChiuThue * 0.05;
    }
    else if(thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000){
        thueSuat=thuNhapChiuThue * 0.1;
    }
    else if(thuNhapChiuThue > 12000000 && thuNhapChiuThue <= 210000000){
        thueSuat=thuNhapChiuThue * 1.5;
    }
    else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000 ){
        thueSuat= thuNhapChiuThue *0.2;
    }
    else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000){
        thueSuat = thuNhapChiuThue * 2.5;
    }
    else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        thueSuat = thuNhapChiuThue *0.3;
    }
    else if (thuNhapChiuThue > 960000000){
        thueSuat = thuNhapChiuThue * 0.35;
    }
    document.getElementById("result").classList.add("bg-warning");
    document.getElementById("result").innerText=`Họ tên: ${hoTen} ; Tiền thuế thu nhập cá nhân ${thueSuat.toLocaleString()} VNĐ`;
   
}