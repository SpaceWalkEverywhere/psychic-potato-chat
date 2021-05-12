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
    roomname=localStorage.getItem("rn");
    console.log(roomname);
    username=localStorage.getItem("username");
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebasemessageid = childKey;
         messagedata = childData;
      console.log(firebasemessageid);
      console.log(messagedata);
      sender=messagedata["name"];
      mess=messagedata["msg"];
      like=messagedata["likes"];
      namewtag="<h4>"+sender+"<img class='user_tick' src='tick.png'></h4>";
      messagewtag="<h4 class='message_h4'>"+mess+"</h4>";
      likebutton="<button class='btn btn-warning' id="+firebasemessageid+" value="+like+" onclick='updatelike(this.id);'>";
      spanwtag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
      row=namewtag+messagewtag+likebutton+spanwtag;
      document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            msg:msg,
            likes:0
      });
      document.getElementById("msg").value="";
}
function updatelike(messageid){
      likes=document.getElementById(messageid).value;
      updlikes=Number(likes)+1;
      firebase.database().ref(roomname).child(messageid).update({
            likes:updlikes,
      })
      console.log(updlikes);
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("rn");
      window.location="index.html";
}


