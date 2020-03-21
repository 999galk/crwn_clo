import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyANn3DRgPpccU7_bnXgMeS3Db0tsnZPMTs",
	authDomain: "crwn-api.firebaseapp.com",
	databaseURL: "https://crwn-api.firebaseio.com",
	projectId: "crwn-api",
	storageBucket: "crwn-api.appspot.com",
	messagingSenderId: "285549427368",
	appId: "1:285549427368:web:74774016310a1080f9e09d",
	measurementId: "G-DM3K25KF0J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;