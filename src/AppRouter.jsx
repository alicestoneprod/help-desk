import { useEffect } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { routes } from "routes"

export const AppRouter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard")
    }
  }, [location, navigate])

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          Component={route.page}
          key={route.page}
        />
      ))}
      <Route path='*' element={<div>not found</div>} />
    </Routes>
  )
}
