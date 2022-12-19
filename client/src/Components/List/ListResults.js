import React from 'react'
import UserResult from '../User/UserResult'
import styles from "./ListResults.module.css"

function ListResults({searchResults}) {
  
  const results = searchResults.map(user => <UserResult key={user._id} user={user}/>)
  const content = results.length? results : <article><p>No Matching Users</p></article>

  return (
    <main>{content}</main>
  )
}

export default ListResults