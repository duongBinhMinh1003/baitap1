function tinhKhuVuc(loai){
    var diemKv;
    if(loai == "khuVucA"){
        diemKv=2;
    }
    if(loai == "khuVucB"){
        diemKv=1;
    }
    if(loai == "khuVucC"){
        diemKv=0.5;
    }
    return diemKv;
}
function tinhDoiTuong(loai){
    var diemDt;
    if(loai == "doiTuong1"){
        diemDt=2.5;
    }
    if(loai == "doiTuong2"){
        diemDt=1.5;
    }
    if(loai == "doiTuong3"){
        diemDt=1;
    }
    return diemDt;
}
function tinhDiem(){
    var loaiEl = document.querySelector('input[name="selector"]:checked').value;
    var loaidt = document.querySelector('input[name="selector1"]:checked').value;
    var diemchuanEl = document.getElementById("diemChuan").value;
    var diemMonThu1 =document.getElementById("diemMonThu1").value;
    var diemMonThu2 =document.getElementById("diemMonThu2").value;
    var diemMonThu3 =document.getElementById("diemMonThu3").value;
    var loaiKhuVuc= tinhKhuVuc(loaiEl);
    var loaiDoiTuong=tinhDoiTuong(loaidt);
    var diemUuTien= loaiKhuVuc + loaiDoiTuong;
    var diemTong = parseFloat(diemMonThu1) + parseFloat(diemMonThu2) + parseFloat(diemMonThu3) + parseFloat(diemUuTien);
    if(diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3==0){
        var resultEl= document.getElementById("result")
        document.getElementById("result").classList.add("bg-warning");
        resultEl.innerHTML=`<h1>Bạn đã rớt do có điểm môn bằng 0  <\h1>`;
   } 

    else if(diemTong > diemchuanEl || diemTong == diemchuanEl ){
        var resultEl= document.getElementById("result");
        document.getElementById("result").classList.add("bg-warning");
        resultEl.innerHTML=`<h1>Bạn đã đậu<\h1> Tổng điểm là ${diemTong} `;
    }
   

}


    






    // else if ( diemMonThu1 == 0 && diemMonThu2 == 0 && diemMonThu3 == 0){
    //     console.log("fail");
    // }
    
    
    





