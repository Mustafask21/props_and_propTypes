import React from 'react'
import "./style/users.css"
import propTypes from "prop-types"


function Users(data) {
     const {user}=data;

  return (
    <div className='container'><h3>Users</h3>
      
        <span>{user.fullName} {user.age}</span>
    
        
    </div>
  )
}

Users.propTypes={
  user:propTypes.exact({
    fullName:propTypes.string,
    age:propTypes.number,
  })
}



export default Users