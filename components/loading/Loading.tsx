import loader from '@/public/assets/loader.gif'
import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div>
      <Image src={loader} alt="Loading..." />
    </div>
  )
}

export default Loading
