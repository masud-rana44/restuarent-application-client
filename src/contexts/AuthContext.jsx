import { createContext, useContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config.js'
import { useAxiosPublic } from "../hooks/useAxiosPublic";

const authContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const AuthProvider = ({ children }) => {
  const [ user, setUser] = useState(null)
  const [isLoading, setIsLoading]  = useState(true)
  const axiosPublic = useAxiosPublic()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if(user) {
        const res  = await axiosPublic.post('/jwt', {
          email: user.email
        })
        localStorage.setItem('token', res.data.token)
      } else {
        localStorage.removeItem('token')
      }
      setUser(user)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [axiosPublic])

  const createNewUser  = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, provider)
  }

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  const sendVerificationEmail = () => {
    return sendEmailVerification(auth.currentUser)
  }

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth.currentUser, email)
  }

  const loginUser = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth,email, password)
  }

  const logoutUser = () => {
    return signOut(auth)
  }

  const value = {
    user,
    isLoading,
    createNewUser,
    signInWithGoogle,
    updateUser,
    sendVerificationEmail,
    passwordReset,
    loginUser,
    logoutUser
  }


  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(authContext)
  if(!context) throw new Error('Auth context must be used within an AuthProvider')
  return context;
}