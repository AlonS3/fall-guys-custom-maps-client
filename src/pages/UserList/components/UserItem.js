import React from 'react'
import { Link } from 'react-router-dom'

export default function UserItem({user}) {
  return (
    <div>
        <Link to={`/user/${user.id}/maps`}>
        {user.name}
        </Link>
    </div>
  )
}
