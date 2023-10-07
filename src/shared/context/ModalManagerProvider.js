import React, { useState, useCallback } from "react"
import ModalManagerContext from "./ModalManagerContext"

const ModalManagerProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = useCallback((modalName) => {
    setActiveModal(modalName)
  }, [])
  const closeModal = useCallback(() => {
    setActiveModal(null)
  }, [])

  return <ModalManagerContext.Provider value={{ activeModal, openModal, closeModal }}>{children}</ModalManagerContext.Provider>
}

export default ModalManagerProvider
