import React from 'react'
import Image from 'next/image'




export default function Vctor() {
  return (
    <main>
       <div className="h-auto bg-pink-100 flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4 md:mb-0">
          <Image src="/vector.png" alt="filter" height={24} width={24} />
          <span className="text-sm md:text-base">Filter</span>
          <Image src="/vector (2).png" alt="grid" height={24} width={24} />
          <Image src="/vector (1).png" alt="list" height={24} width={24} />
          <span className="hidden md:inline-block text-5xl text-gray-200">|</span>
          <p className="text-sm md:text-base">Showing 1-18 of 32 results</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center">
            <p className="text-sm md:text-base">Show</p>
            <button className="ml-2 w-12 h-8 bg-pink-50 text-gray-600 rounded-sm text-sm md:text-base">
              16
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-sm md:text-base">Sort by</p>
            <button className="ml-2 w-24 h-8 bg-pink-50 text-gray-600 rounded-sm text-sm md:text-base">
              Default
            </button>
          </div>
        </div>
      </div>

    </main>
  )
}
