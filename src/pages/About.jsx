import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <header>
        <Navbar />
    </header>

    <div>
    <div className="flow-root mt-6">
  <dl className="-my-3 divide-y divide-gray-200 text-sm *:even:bg-gray-50">
    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Title</dt>

      <dd className="text-gray-700 sm:col-span-2">Mr</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Name</dt>

      <dd className="text-gray-700 sm:col-span-2">Russelle Roxas</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Occupation</dt>

      <dd className="text-gray-700 sm:col-span-2">Student</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Salary</dt>

      <dd className="text-gray-700 sm:col-span-2">15,500</dd>
    </div>

    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
      <dt className="font-medium text-gray-900">Bio</dt>

      <dd className="text-gray-700 sm:col-span-2">
        
      </dd>
    </div>
  </dl>
</div>
    </div>

    </>
    
  )
}

export default About