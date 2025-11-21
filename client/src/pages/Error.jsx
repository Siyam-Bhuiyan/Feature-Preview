import React, { useRouteError } from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Error
