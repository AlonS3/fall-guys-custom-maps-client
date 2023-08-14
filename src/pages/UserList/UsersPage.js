import React from 'react'
import UsersList from './components/UsersList'
export default function Users() {
    const users = [{id: 'u1', name: 'Alon Shemer', image: '' , maps: 3}]
    const numberOfUsers = users.length
    const error = false
    const loading = false
  return (
    <UsersList users={users} loading={loading} error={error} numberOfUsers={numberOfUsers}/>
  )
}
