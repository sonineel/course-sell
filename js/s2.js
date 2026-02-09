  const firebaseConfig = {
    apiKey: "AIzaSyCeMphGYRwd0hQbU07-eiT6ngsUbmdPurE",
    authDomain: "course-6e61d.firebaseapp.com",
    databaseURL: "https://course-6e61d-default-rtdb.firebaseio.com",
    projectId: "course-6e61d",
    storageBucket: "course-6e61d.firebasestorage.app",
    messagingSenderId: "29573747197",
    appId: "1:29573747197:web:1b3d30f8adf8d7c813c994",
    measurementId: "G-SQNVEYLVNH"
  };
  
firebase.initializeApp(firebaseConfig);

firebase.database().ref(contectFrom);