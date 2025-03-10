import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { toast } from "react-toastify";

export const FirebaseContext = createContext();


const firebaseConfig = {
    apiKey: "AIzaSyBHK8R-5-7mPTjJutCM37Mfx91Cg8kWoU4",
    authDomain: "vastra-796e6.firebaseapp.com",
    projectId: "vastra-796e6",
    storageBucket: "vastra-796e6.firebasestorage.app",
    messagingSenderId: "866448245249",
    appId: "1:866448245249:web:ffe9f0d4ed95418f7b3600",
    databaseURL: "https://vastra-796e6-default-rtdb.firebaseio.com/",
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const database = getDatabase(firebaseApp);
  const googleProvider = new GoogleAuthProvider()
  

const Firebaseprovider = (props) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState('Login');
    const [user, setUser] = useState(null);

    

    useEffect(()=> {
        onAuthStateChanged(firebaseAuth, user => {
            if(user){
                //you're logged in 
                console.log("Hello", user);
                setUser(user)
            }else{
                //logged out
                console.log('logged out');
                setUser(null)
            }
        })
    }, []);
    
    const signUpUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
       .then(()=>{
        setLoginState("Login");
        setUserName("");
        setEmail("");
        setPassword("");
  
      })
    };

    const loginUserWithEmailAndPassword = (email, password) => {
             signInWithEmailAndPassword(firebaseAuth, email, password)
              .then((res)=>{
                  toast.success("Logged in successfully");
                })
                .catch((err)=>{
                  toast('Please check your credentials')
                })
    };

    const putData = (key, data) => {
        set(ref(database, key), data)
    };

    const signUpWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider)
    };

    const logout = () => {
        signOut(firebaseAuth);
    }


    const value = {
        signUpUserWithEmailAndPassword, loginUserWithEmailAndPassword,
        putData, userName, setUserName,email, setEmail, password, 
        setPassword, loginState, setLoginState, signUpWithGoogle,
        user, setUser, logout
    }

    return(
        <FirebaseContext.Provider value={value}>
            {props.children}
        </FirebaseContext.Provider>
    )
  }

  export default Firebaseprovider