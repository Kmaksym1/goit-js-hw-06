const form= document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit (event) {
  event.preventDefault();
  const {email, password} = event.currentTarget.elements
const dataUser = {
    email: email.value,
    password: password.value
}
  if ((email.value.length === 0) || (password.value.length === 0) ){
    alert('Всі поля повинні бути заповнені')
  } else{
    console.log('dataUser:', dataUser)
  }
}
