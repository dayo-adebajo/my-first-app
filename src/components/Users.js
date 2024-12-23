import React from 'react';

const Users = ({name, job}) => {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Job: {job}</p>
    </div>
  )
}

export default Users