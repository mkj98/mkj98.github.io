function logme(){
    let password = prompt("Please enter password", "");
    
    if (password == null || password == "" || password !="9899") {
      alert("fuck you :)")
    } else {
        document.getElementById("log").classList.add('hide');
    }
}