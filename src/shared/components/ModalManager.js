import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import useModalManager from "../hooks/useModalManager"

//modals
import NewMapModal from "./Modals/NewMap/NewMapModal"

const ModalManager = () => {
  const location = useLocation()
  const { closeModal } = useModalManager()

  useEffect(() => {
    // Close the modal whenever the route changes
    closeModal()
  }, [location, closeModal])

  return (
    <>
      <NewMapModal modalName="newMap" />
    </>
  )
}

export default ModalManager
