import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { routes } from "routes/routes"
import cn from "classnames"

import s from "./LinksRow.module.scss"

export const LinksRow = ({ minimised }) => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  return routes.map((route) => (
    <NavLink
      className={cn(
        s.link,
        { [s.isActive]: activeLink === route.path },
        { [s.isMin]: minimised }
      )}
      to={route.path}
      key={route.path}>
      <route.icon />
      {!minimised && <p className={s.linkName}>{route.name}</p>}
    </NavLink>
  ))
}
