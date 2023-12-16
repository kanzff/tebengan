'use client'

import React from 'react'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const  { Sider } = Layout

const Sidebar = () => {
    // const items2 = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    //     (icon, index) => ({
    //       key: String(index + 1),
    //       icon: React.createElement(icon),
    //       label: `nav ${index + 1}`,
    //     }),
    //   );
    const items = [
        {
            key: 1,
            icon: React.createElement(UserOutlined),
            label: 'User List'
        },
        {
            key: 2,
            icon: React.createElement(UserOutlined),
            label: 'Driver List'
        },
        {
            key: 3,
            icon: React.createElement(UserOutlined),
            label: 'Route List'
        },
        {
            key: 4,
            icon: React.createElement(UserOutlined),
            label: 'Voucher Catalogue'
        },
        {
            key: 5,
            icon: React.createElement(UserOutlined),
            label: 'Trip List'
        },
        {
            key: 6,
            icon: React.createElement(UserOutlined),
            label: 'Booking List'
        },
        {
            key: 7,
            icon: React.createElement(UserOutlined),
            label: 'All Transaction'
        },
        {
            key: 8,
            icon: React.createElement(UserOutlined),
            label: 'Ride List'
        },
    ]
    return (
        <div className='p-[16px]'>
            <Sider
                width={208}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
        </div>
      );
}

export default Sidebar