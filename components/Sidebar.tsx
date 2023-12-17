'use client'

import React from 'react'
import { Image, Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuOutlined } from '@ant-design/icons';

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
            icon: React.createElement(() => (
                <Image width={36} className='pr-4' src='/user.png'/>
            )),
            label: 'User List'
        },
        {
            key: 2,
            icon: React.createElement(() => (
                <Image width={36} className='pr-4' src='/driver.png'/>
            )),
            label: 'Driver List'
        },
        {
            key: 3,
            icon: React.createElement(() => (
                <Image width={36} className='pr-4' src='/route.png'/>
            )),
            label: 'Route List'
        },
        {
            key: 4,
            icon: React.createElement(() => (
                <Image width={36} className='pr-4' src='/ticket.png'/>
            )),
            label: 'Voucher Catalogue'
        },
        {
            key: 5,
            icon: React.createElement(() => (
                <Image width={36} className='pr-4' src='/vehicle.png'/>
            )),
            label: 'Trip List'
        },
        {
            key: 6,
            icon: React.createElement(() => (
                <Image width={36} className='pr-4' src='/clipboard-list.png'/>
            )),
            label: 'Booking List'
        },
        {
            key: 7,
            icon: React.createElement(() => (
                <Image width={36} className='pr-4' src='/cash.png'/>
            )),
            label: 'All Transaction'
        },
        {
            key: 8,
            icon: React.createElement(() => (
                <Image width={36} className='pr-4' src='/document-text.png'/>
            )),
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
                <MenuOutlined className='pl-8 my-4' />
                <div className="demo-logo-vertical" />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
        </div>
      );
}

export default Sidebar