import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyA-mjwot2696GqmbqLwcIwI9YamylbmjHE",
  authDomain: "waterservicebilling.firebaseapp.com",
  databaseURL: "https://waterservicebilling.firebaseio.com",
  projectId: "waterservicebilling",
  storageBucket: "waterservicebilling.appspot.com",
  messagingSenderId: "578967326759"
};
firebase.initializeApp(config);
//   firebase.firestore().setting({timestampsInSnapshots: true});

export default firebase;