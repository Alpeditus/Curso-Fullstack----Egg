import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <ul>
        <li>
          <Link to={"./main1"}>Main1</Link>
        </li>
        <li>
          <Link to={"./main2"}>Main2</Link>
        </li>
      </ul>
  )
}
