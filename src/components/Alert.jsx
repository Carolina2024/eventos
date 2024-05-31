import React from 'react'

function Alert({messege, type}) {
    return (
        <div className={`alert alert-${type}`} role='alert'>
            {messege}
      </div> 
    )
  }
  
  export default Alert