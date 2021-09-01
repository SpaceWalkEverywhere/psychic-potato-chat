var firebaseConfig = {
    apiKey: "AIzaSyALCV2pddbvH7HbQwKYvcC44t1BE-sQeBc",
    authDomain: "chat-app-6b98a.firebaseapp.com",
    projectId: "chat-app-6b98a",
    storageBucket: "chat-app-6b98a.appspot.com",
    messagingSenderId: "561450469009",
    appId: "1:561450469009:web:9e1c96040f30db1b496130",
    measurementId: "G-3W658325W6"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username+" !!!";
function addroomname(){
      roomname=document.getElementById("rn").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"addrn",
      });
      localStorage.setItem("rn",roomname);
      window.location="letschatpage.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redtorm(this.id);'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redtorm(name){
      console.log(name);
      localStorage.setItem("rn",name);
      window.location="letschatpage.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("rn");
      window.location="index.html";
}
