// change place
var login= document.getElementById('login');
var register= document.getElementById('register');
var showForm= document.getElementById('btn');

function Login(){
  login.style.left="50px";
  register.style.left="450px";
  showForm.style.left="0";

}
function Register(){
  login.style.left="-400px";
  register.style.left="50px";
  showForm.style.left="148px";
}

// check input
let isClickLogin = false;
const userName = document.getElementById('userName');
const passwordNode = document.getElementById('passWord');
const error = document.getElementsByClassName('messageError');
let message = "";
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var checkPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
console.log('regex', re.test(userName.value))
function loGin(){
  isClickLogin = true;
  if(userName.value.length === 0){
    error[0].innerText = 'Tên đăng nhập không được trống';
  }else if(re.test(userName.value) === false){
    error[0].innerText ='Phải là tài khoản email';
  }else{
        error[0].innerText='';
  
  }
  if(passwordNode.value.length === 0){
    error[1].innerText="Mật khẩu không được để trống";
  }else if(checkPass.test(passwordNode.value) === false){
      error[1].innerText="Có ít nhất 1 ký tực đặc biệt, 1 chữ hoa";
  }else{
    error[1].innerText='';
  }

  if(error[0].innerText.length === 0 && error[1].innerText.length === 0){
    localStorage.setItem("userName-key",userName.value)
   location.href='index.html';
  }
}

// register
let isClickRegister = false;
const userName2 = document.getElementById('userNameRe');
const passwordNode2 = document.getElementById('passWordRe');
const checkPass2 = document.getElementById('checkpassWord');
const error2 = document.getElementsByClassName('messageError2');
let message2 = "";
const re2 = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const checkBox = document.getElementById('checkboxRegister');

function registerAccount() {
  isClickRegister = true;
  for (let i = 0; i < error2.length; i++) {// làm mới thông báo và xóa đi thông báo lỗi cũ trước khi register
    error2[i].innerText = '';
  }

  if (userName2.value.length === 0) {
    error2[0].innerText = 'Tên đăng nhập không được trống';
 
  }

  if (passwordNode2.value.length === 0) {
    error2[1].innerText = 'Mật khẩu không được để trống';
  
  }

  if (checkPass2.value.length === 0) {
    error2[2].innerText = 'Chưa xác nhận mật khẩu';

  }

  if (re2.test(userName2.value) === false) {
    error2[0].innerText = 'Phải là tài khoản email';
    return false; 
  }

  if (checkPass.test(passwordNode2.value) === false) {
    error2[1].innerText = 'Có ít nhất 1 ký tự đặc biệt, 1 chữ hoa';
    return false; 
  }

  if (checkPass2.value !== passwordNode2.value) {
    error2[2].innerText = 'Mật khẩu không khớp';
    return false; 
  }

  if (!checkBox.checked) {
    alert('Vui lòng đồng ý với điều khoản và điều kiện');
    return false; 
  }
  const done = document.getElementById('doneRe');
  const btnOk = document.querySelector('.notiCheck');
  done.style.display='block';
  done.style.display="flex"; 
  done.style.alignItems="center";
  done.style.justifyContent="center"; 
  done.style.zIndex =999;
  done.style.marginTop ="-40%";

  btnOk.addEventListener('click', () => {
    done.style.display = 'none';
  });

  if(error2[0].innerText.length === 0 && error2[1].innerText.length === 0 && error2[2].innerText.length === 0){
    Login();
   }
}
