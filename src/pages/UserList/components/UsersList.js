import React from 'react'
import UserItem from './UserItem'

export default function UsersList({users, loading, error, numberOfUsers}) {
  return (
    <div>
        <h2>Users:</h2>
      <span>{!loading && numberOfUsers + ' users found'}</span>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error Loading'}</div>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}
