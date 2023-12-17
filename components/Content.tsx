'use client'

import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import ContentTable from './ContentTable';
import AddUserModal from './AddUserModal';

const { Search } = Input



const Content = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
  
  return (
    <div className='bg-gray-100 p-4 w-full'>
        <AddUserModal showModal={showModal} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
        <div className='bg-white rounded-md p-6'>
            <div className='flex justify-between mb-6'>
                <div className='flex gap-2 divide-x-2 divide-black'>
                    <div></div>
                    <div className='pl-2'>
                        <div className='font-semibold'>456</div>
                        <div>Total Users</div>
                    </div>
                    <div className='pl-2'>
                        <div className='font-semibold'>396</div>
                        <div>Active Users</div>
                    </div>
                    <div className='pl-2'>
                        <div className='font-semibold'>123</div>
                        <div>Recent Users</div>
                    </div>
                    <div className='pl-2'>
                        <div className='font-semibold'>60</div>
                        <div>Inactive Users</div>
                    </div>
                    <div className='pl-2'>
                        <div className='font-semibold'>60</div>
                        <div>Lead Users</div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Button type="primary" onClick={showModal} className='bg-blue-100 text-[#1D8AF5] font-semibold' icon={<SearchOutlined />}>
                        Add New User
                    </Button>
                </div>
            </div>
            <div className='flex justify-between mb-6'>
                <div className='min-w-[330px]'>
                    <Input placeholder="Search ID, name, mobile number, email" allowClear  />
                </div>
                <div className='flex gap-2'>
                    <div>
                        <Button disabled type="primary" className='bg-blue-100 text-[#1D8AF5] font-semibold'>
                            Export
                        </Button>
                    </div>
                    <div>
                        <Button type="primary" className='bg-blue-100 text-[#1D8AF5] font-semibold'>
                            Export All Data
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <ContentTable/>
            </div>
        </div>
    </div>
  )
}

export default Content