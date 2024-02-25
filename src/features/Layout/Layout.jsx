import { Sidebar } from "./Sidebar"
import s from "./Layout.module.scss"

export const Layout = ({ children }) => {
  return (
    <div className={s.layoutCnt}>
      <Sidebar />
      {children}
    </div>
  )
}
