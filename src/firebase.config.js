

import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage } from 'firebase/storage';


const firebaseConfig ={
apiKey: "AIzaSyCeRw8ZxO9xb5tlgUuGo4LxWkKiiTbfefY",
authDomain: "resturantapp-e3c02.firebaseapp.com",
databaseURL: "https://resturantapp-e3c02-default-rtdb.firebaseio.com",
projectId: "resturantapp-e3c02",
storageBucket: "resturantapp-e3c02.appspot.com",
messagingSenderId: "732368784292",
appId: "1:732368784292:web:ea49d78e2a351dc79ccf31"
}

const app = getApps.Length > 0 ?getApp():initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app)
  
export {app, firestore, storage };