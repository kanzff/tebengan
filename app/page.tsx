import Image from 'next/image'
import styles from './page.module.css'
import { Flex } from 'antd'
import Topbar from '@/components/Topbar'

export default function Home() {
  return (
    <main>
      <Topbar/>
    </main>
  )
}
