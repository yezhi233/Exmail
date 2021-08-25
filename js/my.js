let sb = 'https://exmail.qq.com/cgi-bin/login';
if (navigator.userAgent.match(/(iPhone|Android.*Mobile)/) || navigator.userAgent.match(/MSIE [6,7,8,9]/)) {
	  sb = 'https://m.exmail.qq.com/cgi-bin/login';
	  document.querySelector(".other").innerHTML = "<input type=\"hidden\" name=\"f\" value=\"xhtml\" />";
}else{
	document.querySelector(".other").innerHTML = "<input type=\"hidden\" name=\"aliastype\" value=\"other\" /><input type=\"hidden\" name=\"dmtype\" value=\"bizmail\" />";
}
document.getElementById("myForm").action = sb;
function checkInput() {
    let uin = document.getElementsByName("uin")[0];
	let domain = document.getElementsByName("domain")[0];
	let pwd = document.getElementsByName("pwd")[0];
	let form = document.getElementById("myForm");
    if(0==uin.value.length) {
     uin.focus();
     return false;
    }
    if(0==domain.value.length) {
     domain.focus();
     return false;
    }
    if(0==pwd.value.length) {
     pwd.focus();
     return false;
    }
    form.submit();
    return false;
  }