import { createContext } from "react"

const ModalManagerContext = createContext({
  activeModal: null,
  openModal: () => {},
  closeModal: () => {},
})

export default ModalManagerContext
