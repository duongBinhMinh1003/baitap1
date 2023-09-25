
function getConnectionInput() {
    var customerType = document.getElementById("customerType").value;
    var connectionInput = document.getElementById("connectionInput");

    if (customerType === "doanhnghiep") {
        connectionInput.style.display = "block";
    } else {
        connectionInput.style.display = "none";
    }
}








function tinhTien(){
    var maKhachHangEl=document.getElementById("customerId").value;
    var customerTypeEl=document.getElementById("customerType").value;
    var connectionCountEl=document.getElementById("connectionCount").value;
    var channelCountEl=document.getElementById("channelCount").value;
    var tienBill=0;
    if ( customerTypeEl == "nhaDan"){
        tienBill=parseFloat(4.5) + parseFloat(20.5) + (7.5 * channelCountEl);
    }
    else if (customerTypeEl == "doanhnghiep"){
        if(connectionCountEl <= 10 ){
        tienBill=parseInt(15) +parseInt(75) + (50 * channelCountEl);
        }
        else if(connectionCountEl > 10){
            tienBill = parseInt(15) + parseInt(75) + ((connectionCountEl-10) * 5)    +      (50 * channelCountEl) ;
        }
    }
    
    document.getElementById("result").classList.add("bg-warning");
    document.getElementById("result").innerText=` Mã khách hàng:  ${maKhachHangEl} ; Tiền cáp $ ${tienBill} .00`;

}