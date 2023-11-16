import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config.js'

const authContext = createContext(null)
const auth = getAuth(app)

export const AuthProvider = ({ children }) => {
  const [ user, setUser] = useState(null)
  const [isLoading, setIsLoading]  = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const createNewUser  = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
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
    setIsLoading(true)
    return signOut(auth)
  }

  const value = {
    user,
    isLoading,
    createNewUser,
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