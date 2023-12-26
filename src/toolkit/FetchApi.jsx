import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersData } from './store'


const FetchApi = () => {
    let userDispatcher = useDispatch()

    useEffect(() => {
        userDispatcher(fetchUsersData())
    })

    let usersData = useSelector(state => state)
    console.log(usersData);
  return (
    <div>
      <h1>Fetch API</h1>
    </div>
  )
}

export default FetchApi
