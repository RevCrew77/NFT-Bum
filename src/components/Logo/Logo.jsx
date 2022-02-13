import React from 'react'
import Image from 'next/image'

const Logo = ({type}) => {
  return (
    <React.Fragment>
      {type === 'muted' ? (
        <Image src={'/images/logo-muted.svg'} width={250} height={250} />
      ) : (
        <Image src={'/images/logo.svg'} width={250} height={250} />
      )}
    </React.Fragment>
  )
}

export default Logo
