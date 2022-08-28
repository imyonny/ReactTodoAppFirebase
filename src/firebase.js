import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAxdq0AljDeyZTUnsD2-3K8qfJKiblJxzg',
  authDomain: 'react-todo-app-2ed41.firebaseapp.com',
  projectId: 'react-todo-app-2ed41',
  storageBucket: 'react-todo-app-2ed41.appspot.com',
  messagingSenderId: '406701167108',
  appId: '1:406701167108:web:fae3597ce8e8b0a3199b51',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
