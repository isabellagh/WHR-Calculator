export const addClient = client => {
    return {
        type: "ADD_CLIENT",
        client: client
    }
}

export const getMyClients = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/clients", {
        credentials: "include",    
        method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                // console.log(resp.data)
                dispatch({type: "GET_MY_CLIENTS", clients: resp.data})
            }
        })
        .catch(console.log)
    }
}

export const handleAddClient = (client) => {
    console.log("post what?????", client);
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/clients", {
        credentials: "include",    
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({client})
        })
        .then(response => response.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp.data)
                dispatch(({type: "ADD_CLIENT", client: resp.data}))
                
            }
        })
        .catch(console.log)
    }
}