'use client'

import React, { useState } from 'react'
import { Button, Divider, Image, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { data, DataType, Voucher } from '../data/tableData'

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (id: any) => (
      <div className='text-gray-600 min-w-[150px] max-w-[180px]'>
        <p>User ID</p>
        <p className='font-bold text-black pb-2'>{id.user_id}</p>
        <p>Employee ID</p>
        <p className='font-bold text-black pb-2'>{id.employee_id}</p>
        <p>Date created</p>
        <p className='pb-1'>{id.created_at}</p>
        {id.first_login_at.length > 1 &&
        <div>
            <p>First app login on</p>
            <p>{id.first_login_at}</p>
        </div>
        }
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: any) => (
      <div className='text-gray-600 min-w-[130px]'>
        {status.status === 'Lead' &&
          <p className='bg-blue-100 border rounded-lg max-w-[40px] text-center border-blue-500 font-semibold text-blue-500'>{status.status}</p>
        }
        {status.status === 'Active' &&
          <p className='bg-green-100 border rounded-lg max-w-[60px] text-center border-green-500 font-semibold text-green-500'>{status.status}</p>
        }
        {status.status === 'Recent' &&
          <p className='border rounded-lg max-w-[60px] text-center border-black text-black'>{status.status}</p>
        }
        {status.status === 'Inactive' &&
          <p className='border rounded-lg max-w-[70px] text-center border-gray-400 font-bold text-gray-400'>{status.status}</p>
        }
        <p>{status.last_active}</p>
        <p>Last booking</p>
        <p>{status.last_booking_at}</p>
      </div>
    ) 
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name: any) => (
      <div className='max-w-[180px]'>
        <Image src={name.picture}/>
        <p className='pb-2 font-semibold'>{name.name}</p>
        <p className='pb-2 text-gray-600'>{name.gender}</p>
        <p className='text-gray-600'>Company</p>
        <p className='pb-2 font-semibold'>{name.company}</p>
        <p className='text-gray-600'>Department</p>
        <p className='font-semibold'>{name.department}</p>
      </div>
    ) 
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    render: (contact: any) => (
      <div className='max-w-[190px]'>
        <p className='text-gray-600'>Mobile Number</p>
        <p className='pb-2 font-semibold'>{contact.mobile_number}</p>
        <div className='flex'>
          <p className='text-gray-600 mr-1'>Email</p>
          {contact.email.length > 1 &&
            <Image src='/badge-check.png'/>
          }
        </div>
        <p className='pb-2 font-semibold'>{contact.email}</p>
      </div>
    ) 
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: (address: any) => (
      <div className='flex gap-2'>
        <div className='max-w-[160px]'>
          <p className='text-gray-600'>Home</p>
          <p className='pb-2 font-semibold'>{address.home}</p>
          <a className='text-blue-500' href="">View Map</a>
          <div className='text-gray-500 mt-8'>Depart at 08:00</div>
          <div className='text-gray-500'>Arrival at 19:00</div>
        </div>
        <div className='max-w-[160px]'>
          <p className='text-gray-600'>Work</p>
          <p className='pb-2 font-semibold'>{address.work}</p>
          <a className='text-blue-500' href="">View Map</a>
          <div className='text-gray-500 mt-8'>Depart at 17:00</div>
          <div className='text-gray-500'>Arrival at 10:00</div>
        </div>
      </div>
    ) 
  },
  {
    title: 'Trip',
    dataIndex: 'trip',
    render: (trip: any) => (
      <div>
        {!!trip &&
        <div>
          <p>{trip} Total Trips</p>
          <a className='text-blue-500' href="">View Details</a>
        </div>
        }
      </div>
    ) 
  },
  {
    title: 'Voucher',
    dataIndex: 'voucher',
    render: (voucher) => (
      <div>
        {
          voucher.map((v: Voucher, i: number) => {
            return (
              <div key={i} className='max-w-[130px] pr-4 mb-2'>
                <p className='font-bold'>{v.name}</p>
                <p>{v.details}</p>
              </div>
            )
          })
        }
        {!!voucher.length &&
          <a className='text-blue-500' href="">View Details</a>
        }
      </div>
    )
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: () => (
      <div>
        <div>
          <Button className='min-w-[120px] mb-2'>Edit</Button>
        </div>
        <div>
          <Button disabled className='min-w-[120px] mb-2'>Delete</Button>
        </div>
        <div>
          <Button danger className='min-w-[120px]'>Suspend</Button>
        </div>
      </div>
    )
      
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name.name === 'Disabled User', // Column configuration not to be checked
    name: record.name.name,
  }),
};

const ContentTable = () => {
  // const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');

  return (
    <div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default ContentTable