import React from 'react'
import Head from './head'

const Private = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is private component
        </div>
      </div>
    </div>
  )
}

Private.propTypes = {}

export default React.memo(Private)
