import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='teachers'>Teachers</NavLink>
    </div>
  )
}

export default Navigation
