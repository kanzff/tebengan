'use client'

import React, { useState } from 'react'
import { Button, Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Voucher {
  name: string
  details: string
}
interface DataType {
  id: {
    user_id: string,
    employee_id?: string,
    created_at: string,
    first_login_at?: string
  };
  status: {
    last_booking_at: string,
    last_active?: string,
    status: string
  }
  name: {
    name: string,
    gender: string,
    company?: string,
    department?: string,
  };
  contact: {
    mobile_number: string,
    email: string,
  }
  address: {
    home: string,
    work: string
  }
  trip?: number | null;
  voucher?: Voucher[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (id: any) => (
      <div className='text-gray-600 max-w-[180px]'>
        <p>User ID</p>
        <p className='font-bold text-black pb-2'>{id.user_id}</p>
        <p>Employee ID</p>
        <p className='font-bold text-black pb-2'>{id.employee_id}</p>
        <p>Date created</p>
        <p className='pb-1'>{id.created_at}</p>
        <p>First app login on</p>
        <p>{id.first_login_at}</p>
      </div>
    ) 
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: any) => (
      <div className='text-gray-600'>
        <p className='bg-blue-100 border rounded-lg max-w-[40px] text-center border-blue-500 font-bold text-blue-500'>{status.status}</p>
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
      <div>
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
        <p className='text-gray-600'>Email</p>
        <p className='pb-2 font-semibold'>{contact.email}</p>
      </div>
    ) 
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: (address: any) => (
      <div className='flex'>
        <div className='max-w-[160px]'>
          <p className='text-gray-600'>Home</p>
          <p className='pb-2 font-semibold'>{address.home}</p>
          <a className='text-blue-500' href="">View Map</a>
        </div>
        <div className='max-w-[160px]'>
          <p className='text-gray-600'>Work</p>
          <p className='pb-2 font-semibold'>{address.work}</p>
          <a className='text-blue-500' href="">View Map</a>
        </div>
      </div>
    ) 
  },
  {
    title: 'Trip',
    dataIndex: 'trip',
    render: (trip: any) => (
      <div>
        <p>{trip} Total Trips</p>
        <a className='text-blue-500' href="">View Details</a>
      </div>
    ) 
  },
  // {
  //   title: 'Voucher',
  //   dataIndex: 'voucher',
  //   render: (voucher) => { voucher.map((v: Voucher, i: number) => {
  //     return (
  //       <div>{v.name}</div>
  //     )
  //   }) }
  // },
  {
    title: 'Voucher',
    dataIndex: 'voucher',
    render: (voucher) => (
      <div>
        {
          voucher.map((v: Voucher) => {
            return (
              <div className='max-w-[130px] pr-4 mb-2'>
                <p className='font-bold'>{v.name}</p>
                <p>{v.details}</p>
              </div>
            )
          })
        }
      </div>
    )
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (action) => (
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

// const columns2: ColumnsType<DataType> = [
//   {
//     title: 'ID',
//     dataIndex: 'id',
//     render: (text: string) => <a>{text}</a>,
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Contact',
//     dataIndex: 'contact',
//   },
//   {
//     title: 'Adress',
//     dataIndex: 'adress',
//   },
//   {
//     title: 'Trip',
//     dataIndex: 'trip',
//   },
//   {
//     title: 'Voucher',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Action',
//     dataIndex: 'action',
//   },
// ];

const data: DataType[] = [
  {
    id: {
      user_id: '457',
      employee_id: 'BAS-51243',
      created_at: '9 Jun 2022',
      first_login_at: '22 Nov 2022' 
    },
    status: {
      last_booking_at: '-',
      last_active: '-',
      status: 'Lead',
  },
    name: {
      name: 'Ruben Tornado',
      gender: 'Male',
      company: 'SKTrans',
      department: 'Processing'
    },
    contact: {
      mobile_number: '+62 812 3546 7890',
      email: 'rubentornado@email.com'
    },
    address: {
      home: 'Master Pro Kecamatan Serpong, Kota Tangerang Selatan',
      work: 'Grand Indonesia Kecamatan  Menteng, Kota Jakarta Pusat'
    },
    trip: 32,
    voucher: [
      {
        name: 'Flexi',
        details: `
          Flexi Pass 5X • 5X
          Trips
          BSD <-> SCBD
          
          Flexi Pass 3X • 3X
          Trips
          BSD <-> SCBD`
      },
      {
        name: 'Bundle',
        details: `
          Kemerdekaan
          BSD <-> SCBD
          View Details`
      }
    ],
  },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 1 Lake Park',
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sydney No. 1 Lake Park',
  // },
  // {
  //   key: '4',
  //   name: 'Disabled User',
  //   age: 99,
  //   address: 'Sydney No. 1 Lake Park',
  // },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    // disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name.name,
  }),
};

const ContentTable = () => {
  // const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');

  return (
    <div>
      {/* <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={'checkbox'}
      >
        <Radio value="checkbox">Checkbox</Radio>
      </Radio.Group> */}

      <Divider />

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