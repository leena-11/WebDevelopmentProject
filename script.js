function showMessage(){

    let name=document.getElementById("name").value;

    if(name==""){
        alert("Please Enter Name");
    }
    else{
        document.getElementById("result").innerHTML="Registration Successful " + name;
    }

}