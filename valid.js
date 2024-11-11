//alert(linked)
const form=document.getElementById('form')
console.log(form)
const username=document.getElementById('username')
console.log(form)
const password=document.getElementById('password')
console.log(form)
const validateForm=()=>{
    if(username.value===""|| password.value===""){
alert("please enter all the fields!!!")
    }else{

alert("logged in successfully")
}
}
form.addEventListener('submit',validateForm)

