import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAxdq0AljDeyZTUnsD2-3K8qfJKiblJxzg',
  authDomain: 'react-todo-app-2ed41.firebaseapp.com',
  databaseURL:
    'https://react-todo-app-2ed41-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-todo-app-2ed41',
  storageBucket: 'react-todo-app-2ed41.appspot.com',
  messagingSenderId: '406701167108',
  appId: '1:406701167108:web:fae3597ce8e8b0a3199b51',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();
