function login(){
    let name = document.getElementById("username").value;
    localStorage.setItem("playerName",name);
    window.location.href ="index.html";

}