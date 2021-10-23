import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import EmajhonAuthentication from './../../Firebase/Firebase.init';

EmajhonAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const SigninGoogle = () => {
        return signInWithPopup(auth, googleProvider)



    }
    const Logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})

            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })

    }, [])

    return {
        user,
        SigninGoogle,
        Logout

    }

}
export default useFirebase;