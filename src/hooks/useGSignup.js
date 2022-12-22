import { LOGIN } from "../constants/actionTypes";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useGSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const gsignup = async (email, password, firstname, lastname, googleId, username) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/auth/gsignup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, firstname, lastname, googleId, username})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: LOGIN, payload: json})

            setIsLoading(false)
        }
    }

    return { gsignup, isLoading, error}
}