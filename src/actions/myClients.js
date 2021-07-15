








// export const setMyClients = clients => {
//     return {
//         type: "SET_MY_CLIENTS",
//         clients
//     }
// }

// export const clearClients = () => {
//     return {
//         type: "CLEAR_CLIENTS"
//     }
// }

// // async actions

// export const getMyClients = () => {
//     return dispatch => {
//         return fetch("http://localhost:3000/api/v1/clients", {
//         credentials: "include",    
//         method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         })
//         .then(response => response.json())
//         .then(resp => {
//             if (resp.error) {
//                 alert(resp.error)
//             } else {
//                 console.log(resp.data)
//                 dispatch(setMyClients([resp.data]))
//             }
//         })
//         .catch(console.log)
//     }
// }