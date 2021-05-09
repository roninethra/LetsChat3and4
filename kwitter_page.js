var firebaseConfig = {
    apiKey: "AIzaSyBC2ie2500fKSIfJLOGOv5RyTB17Hotp8c",
    authDomain: "lets-chat-9958b.firebaseapp.com",
    databaseURL: "https://lets-chat-9958b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-9958b",
    storageBucket: "lets-chat-9958b.appspot.com",
    messagingSenderId: "590292191681",
    appId: "1:590292191681:web:115f81a69fbeb0af954740"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username= localStorage.getItem("name");
  room_name= localStorage.getItem("RoomName");
document.getElementById("nameforwelcome").innerHTML= username;
  
function send(){
      var message= document.getElementById("messageinput").value;
     firebase.database().ref(room_name).push({
         message: message, name: username, likes: 0
     });
     document.getElementById("messageinput").value= "";
  }
  function homepage(){
    window.location=("index.html");
    localStorage.removeItem("name");
    localStorage.removeItem("RoomName");
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
row= "<div class= 'room_name' id=" +Room_names+" onclick= 'redirectToRoomName(this.id)'># "+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();