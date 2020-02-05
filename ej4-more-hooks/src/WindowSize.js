import React from 'react'
import useWindowSize from './useWindowSize'

const WindowSize = () => {
  const { width, height } = useWindowSize()
  return (
    <div>
      Size:
      {width}x{height}
    </div>
  )
}

export default WindowSize
