
var btnSubmit = document.forms['bai-form']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateForm()) {


    }
}

function validateForm() {
    var isValid = true;
    var isValidhoTen = true;
    var isValidgiotThieu = true;
    var isValidPhone = true;
    var isValidEmail = true;
    var isValidsoThich = true;


    var txtHoTen = document.forms['bai-form']['hoTen'];
    var msgHoTen = txtHoTen.nextElementSibling;
    if (txtHoTen.value == null || txtHoTen.value.length == 0) {
        msgHoTen.classList.remove('msg-success');
        msgHoTen.classList.add('msg-error');
        msgHoTen.innerHTML = 'Vui lòng nhập họ tên!';
        isValidhoTen = false;
    }
    if ( txtHoTen.value.length > 50) {
        msgHoTen.classList.remove('msg-success');
        msgHoTen.classList.add('msg-error');
        msgHoTen.innerHTML = 'Nhập quá kí tự!';
        isValidhoTen = false;
    }
    else {
        msgHoTen.classList.remove('msg-error');
        msgHoTen.classList.add('msg-success');
        msgHoTen.innerHTML = 'Ok.';
    }
    var pwdGioiThieu = document.forms['bai-form']['gioiThieu'];
    var msgGioiThieu = pwdGioiThieu.nextElementSibling;
    if (pwdGioiThieu.value == null || pwdGioiThieu.value.length == 0) {
        msgGioiThieu.classList.remove('msg-success');
        msgGioiThieu.classList.add('msg-error');
        msgGioiThieu.innerHTML = 'Vui lòng nhập vào!';
        isValidgiotThieu = false;
    } else {
        msgGioiThieu.classList.remove('msg-error');
        msgGioiThieu.classList.add('msg-success');
        msgGioiThieu.innerHTML = 'Ok.';
    }
    var txtPhone = document.forms['bai-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Vui lòng nhập vào';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok.';
    }
    var txtSoThich = document.forms['bai-form']['soThich'];
    var msgSothich = txtSoThich.nextElementSibling;
    if (txtSoThich.value == null || txtSoThich.value.length == 0) {
        msgSothich.classList.remove('msg-success');
        msgSothich.classList.add('msg-error');
        msgSothich.innerHTML = 'Vui lòng nhập vào!';
        isValidsoThich = false;
    } else {
        msgSothich.classList.remove('msg-error');
        msgSothich.classList.add('msg-success');
        msgSothich.innerHTML = 'Ok.';
    }
    var txtEmail = document.forms['bai-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Vui lòng nhập Email!';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok.';
    }




    isValid = isValidhoTen && isValidPhone && isValidEmail && isValidgiotThieu;
    return isValid;
}