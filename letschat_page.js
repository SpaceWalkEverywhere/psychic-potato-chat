var firebaseConfig = {
  apiKey: "AIzaSyCVWrQYrHjze_2rVDNuARf8eecp115Uq9U",
  authDomain: "chatweb-53865.firebaseapp.com",
  databaseURL: "https://chatweb-53865-default-rtdb.firebaseio.com",
  projectId: "chatweb-53865",
  storageBucket: "chatweb-53865.appspot.com",
  messagingSenderId: "889379280424",
  appId: "1:889379280424:web:1275d6886e7a5e4864071d"
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
      likebutton="<button style='margin:5px;' class='btn btn-warning' id="+firebasemessageid+" value="+like+" onclick='updatelike(this.id);'>";
      spanwtag="<span class='glyphicon glyphicon-thumbs-up'></span></button>";
      //-----------------------------------------------------------------------------------
      dislikebutton="<button style='margin:5px;' class='btn btn-danger' id="+firebasemessageid+" value="+like+" onclick='updatedislike(this.id);'>";
      spandwtag="<span class='glyphicon glyphicon-thumbs-down'></span></button>";
      liketag="<span style='margin:5px;'>Likes:"+like+"</span><hr>"
      row=namewtag+messagewtag+likebutton+spanwtag+dislikebutton+spandwtag+liketag;
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
      updlikes=Number(likes)+100;
      firebase.database().ref(roomname).child(messageid).update({
            likes:updlikes,
      })
      console.log(updlikes);
}
function updatedislike(messageid){
      
      likes=document.getElementById(messageid).value;
      updlikes=Number(likes)-1000;
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


