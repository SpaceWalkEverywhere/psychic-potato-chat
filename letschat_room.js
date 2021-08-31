const firebaseConfig = {
  apiKey: "AIzaSyCVWrQYrHjze_2rVDNuARf8eecp115Uq9U",
  authDomain: "chatweb-53865.firebaseapp.com",
  databaseURL: "https://chatweb-53865-default-rtdb.firebaseio.com",
  projectId: "chatweb-53865",
  storageBucket: "chatweb-53865.appspot.com",
  messagingSenderId: "889379280424",
  appId: "1:889379280424:web:1275d6886e7a5e4864071d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
