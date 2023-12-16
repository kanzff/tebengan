import Image from 'next/image'
import styles from './page.module.css'
import { Flex } from 'antd'
import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'

export default function Home() {
  return (
    <main>
      <Topbar/>
      <div className='bg-white h-screen'>
        <div className='pt-[80px] flex'>
          <div className='w-[240px]'>
            <Sidebar/>
          </div>
          <div className='w-full'>
            <Content/>
          </div>
        </div>
        </div>
    </main>
  )
}
