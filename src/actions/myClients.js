export const addClient = client => {
    return {
        type: "ADD_CLIENT",
        client: client
    }
}

export const deleteClientAction = clientId => {
    return {
        type: "DELETE_CLIENT",
        clientId
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
                //    dispatch(addClient(resp.data))
            }
        })
        .catch(console.log)
    }
}

export const handleAddClient = (client, history) => {
    // console.log("posting what?????", client);
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
                history.push('/clients')
                
            }
        })
        .catch(console.log)
    }
}

export const deleteClient = (clientId, history) => {
//   debugger
  return dispatch => {
      return fetch(`http://localhost:3000/api/v1/clients/${clientId}`, {
        method: "DELETE"
        }
    )
    .then(response => response.json()) 
    .then(resp => {
        dispatch(deleteClientAction(resp.data))
        history.push('/clients')
    })
    .catch(console.log)
  }
}