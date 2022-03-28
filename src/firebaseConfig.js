// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore, collection, addDoc, getDocs, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCXGtRITwesBfnQdG3CuxLVkptdRyQAbXc',
  authDomain: 'amphi-1997-class-contact-list.firebaseapp.com',
  databaseURL: 'https://amphi-1997-class-contact-list-default-rtdb.firebaseio.com',
  projectId: 'amphi-1997-class-contact-list',
  storageBucket: 'amphi-1997-class-contact-list.appspot.com',
  messagingSenderId: '699379897711',
  appId: '1:699379897711:web:b116011a6e91963719c49a',
  measurementId: 'G-4D4P711T04',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export const addContact = async (values) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), values);
    console.log('Document written with ID: ', docRef.id);
  }
  catch (err) {
    console.error('Error adding document: ', err);
  }
};

export const queryContacts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'contacts'));
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().firstName}`);
    });
  }
  catch (err) {
    console.error('Error reading document: ', err);
  }
};
