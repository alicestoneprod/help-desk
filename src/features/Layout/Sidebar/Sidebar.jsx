import { useState } from "react"
import { motion } from "framer-motion"
import {
  CrownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"
import { LinksRow } from "./LinksRow"
import {
  normalSidebarOptions,
  minimisedSidebarOptions,
} from "shared/constants/motionAnimateOptions"
import cn from "classnames"
import s from "./Sidebar.module.scss"

export const Sidebar = () => {
  const [minimised, setMinimised] = useState(false)

  const setMinimisedHandler = () => {
    setMinimised(true)
  }

  const setNotMinimisedHandler = () => {
    setMinimised(false)
  }

  if (minimised) {
    return (
      <MinimazedSidebar
        minimised={minimised}
        onClose={setNotMinimisedHandler}
      />
    )
  }

  return (
    <motion.div className={cn(s.sidebarCnt)} {...normalSidebarOptions}>
      <div className={s.titleIconCnt}>
        <CrownOutlined className={s.icon} />
        <p className={s.title}>Help Desc</p>
        <ArrowLeftOutlined
          onClick={setMinimisedHandler}
          className={cn(s.minIcon)}
        />
      </div>
      <div className={s.linksCnt}>
        <LinksRow />
      </div>
    </motion.div>
  )
}

export const MinimazedSidebar = ({ minimised, onClose }) => {
  return (
    <motion.div className={cn(s.sidebarCntMin)} {...minimisedSidebarOptions}>
      <div className={cn(s.titleIconCnt, s.titleIconCntMin)}>
        <ArrowRightOutlined className={cn(s.minIcon)} onClick={onClose} />
      </div>
      <div className={s.linksCntMin}>
        <LinksRow minimised={minimised} />
      </div>
    </motion.div>
  )
}
