function validate(){
    var username=document.getElementById("name");
    var email=document.getElementById("email");
    var subject=document.getElementById("subject");
    var message=document.getElementById("message");

    if(username.value==""){
        alert("Must have a username");
        document.form1.username.focus();
        return false;
    }
    if(email.value==""){
        alert("Must have a Email");
        document.form1.email.focus();
        return false;
    }
    if(subject.value==""){
        alert("Must enter a subject");
        document.form1.subject.focus();
        return false;
    }
    if(message.value==""){
        alert("Enter your message");
        document.form1.message.focus();
        return false;
    }

    return true;

}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzggkS9TiCXFnQB4qtAJHa4098nqNCdhS-q0SmGqNUrH79cG623HGWz4acvRGjI3ERi/exec'
  const form = document.forms['form1']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Thank you for submitting form"})
      .catch(error => console.error('Error!', error.message))
  })