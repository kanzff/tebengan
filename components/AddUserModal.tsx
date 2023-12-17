import { Button, Checkbox, Image, Input, Modal, Radio, Select, Space, TimePicker } from 'antd'
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
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal width={'600px'} title="Add New User" okButtonProps={{className: 'bg-blue-400'}} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='text-[12px]'>
            <div className='w-full flex justify-center'>
                <div>
                    <div>Profile Photo</div>
                    <div className='flex justify-center my-2 border rounded-full p-6 bg-blue-100'>
                        <Image src='/camera.png'/>
                    </div>
                </div>
            </div>
            <div>Full Name</div>
            <Input placeholder='Enter fullname'/>
            <div className='mt-2'>Gender</div>
            <Radio.Group>
                <Radio value="apple"> Male </Radio>
                <Radio value="pear"> Female </Radio>
            </Radio.Group>
            <div className='mt-2'>Mobile Number</div>
            <Space.Compact className='w-full'>
                <Input style={{ width: '10%' }} defaultValue="+62" />
                <Input style={{ width: '90%' }} placeholder='81XXX' />
            </Space.Compact>
            <div className='flex gap-2 mt-2'>
                <div className='w-1/3'>
                    <div>{'Emergency Contact (Optional)'}</div>
                    <Space.Compact className=''>
                        <Input style={{ width: '30%' }} defaultValue="+62" />
                        <Input style={{ width: '70%' }} placeholder='81XXX' />
                    </Space.Compact>
                </div>
                <div className='w-1/3'>
                    <div>Relationship</div>
                    <Select className='w-full'>
                        <Select.Option value="Single">Single</Select.Option>
                        <Select.Option value="Married">Married</Select.Option>
                    </Select>
                </div>
                <div className='w-1/3'>
                    <div>Name</div>
                    <Input placeholder='Enter name'/>
                </div>
            </div>
            <div className='mt-2'>{'Email (Optional)'}</div>
            <Input placeholder='Enter email'/>

            <div className='font-bold mt-2'>Home Details</div>
            <div className='mt-2'>Home Address</div>
            <Input placeholder='Search Home Adress'/>
            <div className='flex justify-between w-full gap-4 mt-2'>
                <div className='w-1/2'>
                    <div>Arrival Time</div>
                    <TimePicker className='w-full' />
                    <Checkbox className='mt-1'>Anytime</Checkbox>
                </div>
                <div className='w-1/2'>
                    <div>Depart Time</div>
                    <TimePicker className='w-full' />
                    <Checkbox className='mt-1'>Anytime</Checkbox>
                </div>
            </div>
            <div className='mt-2'>{'Home Address Notes (Optional)'}</div>
            <Input placeholder='Home adress notes'/>

            <div className='font-bold mt-2'>Work Details</div>
            <div className='mt-2'>Work Address</div>
            <Input placeholder='Search Home Adress'/>
            <div className='flex justify-between w-full gap-4 mt-2'>
                <div className='w-1/2'>
                    <div>Arrival Time</div>
                    <TimePicker className='w-full' />
                    <Checkbox className='mt-1'>Anytime</Checkbox>
                </div>
                <div className='w-1/2'>
                    <div>Depart Time</div>
                    <TimePicker className='w-full' />
                    <Checkbox className='mt-1'>Anytime</Checkbox>
                </div>
            </div>
            <div className='mt-2'>{'Work Address Notes (Optional)'}</div>
            <Input placeholder='Work adress notes'/>
        </div>
      </Modal>
    </>
  )
}

export default AddUserModal