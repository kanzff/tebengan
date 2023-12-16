'use client'

import React, { useState } from 'react'
import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (id: any) => (
      <div className='text-gray-600'>
        <p>User ID</p>
        <p className='font-bold text-black pb-1'>{id.user_id}</p>
        <p>Employee ID</p>
        <p className='font-bold text-black pb-1'>{id.employee_id}</p>
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
        <p>{status.status}</p>
        <p>{status.last_active}</p>
        <p>Last booking</p>
        <p>{status.last_booking_at}</p>
      </div>
    ) 
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => (
      <div>
        <a>{text}</a>
        <a>{text}</a>
      </div>
    ) 
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
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
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
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
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
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