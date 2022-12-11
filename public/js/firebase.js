let firebaseConfig = {
    apiKey: "AIzaSyDd6IUWHnvGOWsKIvdUnbK07e5hAmGlgkE",
    authDomain: "blog-site-159d0.firebaseapp.com",
    projectId: "blog-site-159d0",
    storageBucket: "blog-site-159d0.appspot.com",
    messagingSenderId: "971063007548",
    appId: "1:971063007548:web:84ce1b89bd6d2b4708a639"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();