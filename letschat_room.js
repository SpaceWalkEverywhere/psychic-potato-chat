var firebaseConfig = {
      apiKey: "AIzaSyARVNqY2S7rxAHE2y_-hXyspPSrBiWc55Y",
      authDomain: "chatapp-28e10.firebaseapp.com",
      databaseURL: "https://chatapp-28e10.firebaseio.com",
      projectId: "chatapp-28e10",
      storageBucket: "chatapp-28e10.appspot.com",
      messagingSenderId: "937361435899",
      appId: "1:937361435899:web:cb6f913fe1277d7382945e",
      measurementId: "G-43PBYJWVQN"
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
      window.location="kwitterpage.html";
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
      window.location="kwitterpage.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("rn");
      window.location="index.html";
}
