// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {EmailAuthProvider, createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW226pGDL8uUBeMc0IMZlr2hVN77cx5a0",
  authDomain: "netflix-clone-30f3b.firebaseapp.com",
  projectId: "netflix-clone-30f3b",
  storageBucket: "netflix-clone-30f3b.appspot.com",
  messagingSenderId: "13065993898",
  appId: "1:13065993898:web:5fa06ac2f582f07c8bdad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore (app);

const signup = async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            EmailAuthProvider: "local",
            email,

        })

    }catch(error){
        console.log(error)
        alert(error)

    }

}

const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)

    }
    catch(error){
        console.log(error);
        alert(error);

    }
    
}

const logout = () =>{
    signOut(auth);
}

export {auth, db, login, signup, logout} ;