import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from '@firebase/auth';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyDNyt4BOQ8y6zG8F8C7Et-oCVEZ0XU656A',
  authDomain: 'theme-system-journal-next.firebaseapp.com',
  projectId: 'theme-system-journal-next',
  storageBucket: 'theme-system-journal-next.appspot.com',
  messagingSenderId: '750219428461',
  appId: '1:750219428461:web:732fe9f7490d856914b564',
  measurementId: 'G-9XJQXF0K9Q',
});

const firestore = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { app, auth, storage, firestore };
