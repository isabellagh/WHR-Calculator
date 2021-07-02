import React from 'react'


// componentDidMount() {
//   fetch('http://localhost:3000/api/v1/users')
//   .then(response => response.json())
//   .then(data => console.log(data))
// }

const Profile = props => {
    return (
      <div>
        <h1>Profile Page</h1>
        <h1>Status: {props.loggedInStatus}</h1>
          {/* {users.map((user, index) => (
            <div>
              <h3>Name: {user.name}</h3>
              <p>Email: {user.email}</p> */}
              {/* <h1>Image:</h1> */}
            {/* </div> */}
          
      </div>)
}

export default Profile