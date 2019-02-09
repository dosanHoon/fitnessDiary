import React, { PropTypes } from "react"
import { NavLink } from "react-router-dom"

const Main = props => {
  return (
    <div>
      Main
      <p>
        <NavLink to={"/inputdiary"}>InputDiary</NavLink>
      </p>
    </div>
  )
}

Main.propTypes = {}

export default Main
