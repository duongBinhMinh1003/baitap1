function tinhKhuVuc(loai){
    var diemKv;
    if(loai == "khuVucA"){
        diemKv=2;
    }
    if(loai == "khuVucB"){
        diemKv=1;
    }
    if(loai == "khuVucC"){
        diemKv=Math.floor(0.5);
    }
    return diemKv;
}
function tinhDoiTuong(loai1){
    var diemDt;
    if(loai1 == "doiTuong1"){
        diemDt=Math.floor(2.5);
    }
    if(loai1 == "doiTuong2"){
        diemDt=Math.floor(1.5);
    }
    if(loai1 == "doiTuong3"){
        diemDt=1;
    }
    return diemDt;
}
function tinhDiem(){
    var loaiEl = document.querySelector('input[name="selector"]:checked').value;
    var diemchuanEl = document.getElementById("diemChuan").value;
    var diemMonThu1 =document.getElementById("diemMonThu1").value;
    var diemMonThu2 =document.getElementById("diemMonThu2").value;
    var diemMonThu3 =document.getElementById("diemMonThu3").value;
    var loaiKhuVuc= tinhKhuVuc(loaiEl);
    var loaiDoiTuong=tinhKhuVuc(loaiEl);
    var diemUuTien= loaiKhuVuc + loaiDoiTuong;
    console.log(diemUuTien);
}