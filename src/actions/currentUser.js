import { getMyClients } from "./myClients"
import { clearLoginForm } from "./loginForm"
import { clearSignupForm } from "./signupForm"


// sync action creators
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// async action creators

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(response => response.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                // dispatch(getMyClients())
                dispatch(clearSignupForm())
                history.push('/profile')
            }
        })
        .catch(console.log)
    }
}



export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                // dispatch(getMyClients())
                dispatch(clearLoginForm())
                history.push('/profile')
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        // dispatch(clearClients())
        return fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })
        // .then(() => dispatch({type: "CLEAR_LOGIN_FORM"}))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
        credentials: "include",    
        method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(resp => {
            if (resp.error) {
                // alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getMyClients())
                
            }
        })
        .catch(error => console.log(error))
    }
}

