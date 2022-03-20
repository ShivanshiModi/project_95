
//ADD YOUR FIREBASE LINKS HERE
    const firebaseConfig = {
    apiKey: "AIzaSyB_VgdEhWbzDCe6eF7rQyALJo5b-6hpVxw",
    authDomain: "kwitter-72dee.firebaseapp.com",
    databaseURL: "https://kwitter-72dee-default-rtdb.firebaseio.com",
    projectId: "kwitter-72dee",
    storageBucket: "kwitter-72dee.appspot.com",
    messagingSenderId: "902649357983",
    appId: "1:902649357983:web:2932c251883922018524aa"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function add_room()
      {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose: "Room Name"
            });
            localStorage.setItem("room_name" , room_name);
            window.location = "Kwitter_page.html";
      }

      function getData() 
      {
            firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room names are" + Room_names );
            row = "<div class='room_name' id =  " + Room_names + "onclick ='redirect_to_room_name(this.id)' ># " + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirect_to_room_name(name)
{
      localStorage.setItem("room_name" , name);
      window.location = "Kwitter_page.html";
}

function log_out()
{
      localStorage.removeItem("user_id");
      localStorage.removeItem("room_id");
      window.location = "index.html";
}