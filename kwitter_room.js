
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCSxU0HmEeW-DGsFBlftkvMa_68N9Ay82M",
      authDomain: "kwitter-d5b60.firebaseapp.com",
      databaseURL: "https://kwitter-d5b60-default-rtdb.firebaseio.com",
      projectId: "kwitter-d5b60",
      storageBucket: "kwitter-d5b60.appspot.com",
      messagingSenderId: "764203852533",
      appId: "1:764203852533:web:57c58d1bc4a2281dea9bbc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location="index.html";
}



      
