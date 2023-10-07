import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Button } from "@chakra-ui/react"
import MapForm from "./components/MapForm"
import useModalManager from "../../../hooks/useModalManager"

const NewMapModal = ({ modalName }) => {
  const { activeModal, closeModal } = useModalManager()

  return (
    <Modal isOpen={activeModal === modalName} onClose={closeModal} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius={"xl"}>
        <ModalCloseButton />
        <ModalBody p={6}>
          <MapForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default NewMapModal
