$(document).ready(function(){
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAX8zHTpluy8Jeylce5rxACr6WkgNnhyhk",
    authDomain: "lunch-calculator.firebaseapp.com",
    databaseURL: "https://lunch-calculator.firebaseio.com",
    projectId: "lunch-calculator",
    storageBucket: "lunch-calculator.appspot.com",
    messagingSenderId: "773327047733"
};
firebase.initializeApp(config);

var database = firebase.database();


});