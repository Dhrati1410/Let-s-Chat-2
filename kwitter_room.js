const firebaseConfig = {
      apiKey: "AIzaSyD6PJMJRl1ivURELUm9jc-UQmyNB9Rxzyc",
      authDomain: "kwitter-3d2ec.firebaseapp.com",
      databaseURL: "https://kwitter-3d2ec-default-rtdb.firebaseio.com",
      projectId: "kwitter-3d2ec",
      storageBucket: "kwitter-3d2ec.appspot.com",
      messagingSenderId: "925647548190",
      appId: "1:925647548190:web:3bda59c1fbe8fd6546630f"
    };
    const app = initializeApp(firebaseConfig);

    function addUser(){
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child("user_name").update({
            purpose : "adding user"
        });
    }