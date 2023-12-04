import React from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@nextui-org/react";

const ModalEditStock = ({ onPress }) => {
  return (
    <>
                    <>
                <ModalHeader className="flex flex-col gap-1">
                  Total Stock
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onPress}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onPress}>
                    Action
                  </Button>
                </ModalFooter>
              </>
    </>
  )
}

export default ModalEditStock
