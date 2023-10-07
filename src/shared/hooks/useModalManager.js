import { useContext } from "react"
import ModalManagerContext from "../context/ModalManagerContext"

const useModalManager = () => {
  return useContext(ModalManagerContext)
}

export default useModalManager
