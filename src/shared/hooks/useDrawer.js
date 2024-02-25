import { useState } from "react"

export const useDrawer = () => {
  const [open, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return { open, onOpen, onClose }
}
