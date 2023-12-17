import { Button, Modal } from 'antd'
import React from 'react'

interface dataFormProps{
    showModal: () => void
    isModalOpen: boolean | undefined
    handleOk: () => void
    handleCancel: () => void
}

const AddUserModal = ({showModal, isModalOpen, handleOk, handleCancel}: dataFormProps) => {
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default AddUserModal