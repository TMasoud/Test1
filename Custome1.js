function myfunc(){
    var a = document.forms['myForm']["myName"].value;
    console.log(a);
    if (a==""){
        alert('Your name is Changed!');
        return false;
    }
}