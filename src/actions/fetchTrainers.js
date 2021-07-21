
export function fetchTrainers() {
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/users", {
        // credentials: "include",    
        // method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            // body: JSON.stringify()
        })
        .then(response => response.json())
        .then(users => dispatch({
            type: "FETCH_TRAINERS",
            payload: users
        }))
    }
}