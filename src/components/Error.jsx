import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {


    const err = useRouteError();
    console.log(err);
  return (
    <div>
      <h1>Error Occureed</h1>
      <h2>{err.status}:{err.statusText}</h2>
    </div>
  )
}

export default Error
