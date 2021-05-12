function adduser() {
    if (document.getElementById("username").value==""){
        document.getElementById("username").placeholder="Please Enter Username(eg-Devavrat)"
    }
    else {
    username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
    }
}
function getun() {
    if (localStorage.getItem("username")==""){
        localStorage.setItem("username","Try Devavrat");
        document.getElementById("username").value=localStorage.getItem("username");
    }
    else {
        username=localStorage.getItem("username");
        document.getElementById("username").value=username;
    }
}