import React from 'react'
import Image from 'next/image'
export default function Blog() {
  return (
    <main className="h-full w-full">
    <div
      className="w-full h-[500] relative bg-cover bg-center flex  items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32]"
      style={{ backgroundImage: "url(/shop-page.png)" }}
    >
      <div className="mt-16">
        <Image
          src="/llogo-shop.png"
          alt="logo-iamge"
          className="w-24 h-24 ml-7 mt-8"
          height={250}
          width={350}
        />
        <h1 className="text-6xl  font-semibold">Blog</h1>
        <div className="text-black mt-1 ml-6">
          <span className="font-bold mr-20 absolute mt-4">home </span>{" "}
          <span className="ml-14 absolute mt-4">shop</span>
        </div>
      </div>
      </div >
        {/* blog images section */}
          <div className='items-center flex flex-col pr-96 mt-7 '>
            {/* first image */}
            <div className="flex flex-col  space-y-6">
         <Image
            src="/blog1.png"
            alt="blogimage"
            className="w-3/4 md:w-2/3 object-contain"
            height={150}
            width={800}
          />
          </div>
        
              {/* second image */}
              <div className="flex flex-col  space-y-6 mt-7">
         <Image
            src="/blog2.png"
            alt="blogimage"
            className="w-3/4 md:w-2/3 object-contain"
            height={500}
            width={800}
          />
          </div>
          {/* third images */}
          <div className="flex flex-col  space-y-6 mt-7">
         <Image
            src="/blog3.png"
            alt="blogimage"
            className="w-3/4 md:w-2/3 object-contain"
            height={500}
            width={800}
          />
          </div>
          </div>
          {/* right section */}
          <div className='absolute right-0 top-3/4 mr-52 '>
          <label
                htmlFor="password"
                className="block text-sm font-bold  mb-2"
              >
               </label>
              <input
                type="password"
                id="password"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
              />
               {/* other section start here */}
                 <div className='flex flex-col gap-8 items-center mt-7'>
                  <h2 className='text-3xl font-semibold'>Categories</h2>
                   <p className='text-gray-400'>Crafts</p>
                   <p className='text-gray-400'>Design</p>
                   <p className='text-gray-400'>Handmade</p>
                   <p className='text-gray-400'>crafts</p>
                   <p className='text-gray-400'>wood</p>
                </div>
                  {/* mini poicter */}
                  <div className="flex flex-col gap-5 mt-72"> 
                    <h1 className='text-3xl font-bold'>Recent Post</h1>
              <Image
                src="/blog1.png"
                alt="Asgaard Sofa"
                width={80}
                height={80}
                className="w-20 h-20 object-cover bg-[rgb(243,232,197)] rounded-md"
              />
                  <p className='line-clamp-none font-semibold ml-24 relative bottom-20'>explore new ways of decorating</p>
                  <span className='text-gray-400 ml-24 relative bottom-20'>03 Aug 2022</span>
             
              <Image
                src="/blog2.png"
                alt="Asgaard Sofa"
                width={80}
                height={80}
                className="w-20 h-20 object-cover bg-[rgb(243,232,197)] rounded-md"
              />
              <p className='line-clamp-none font-semibold ml-24 relative bottom-20'>explore new ways of decorating</p>
                  <span className='text-gray-400 ml-24 relative bottom-20'>03 Aug 2022</span>
             
              <Image
                src="/blog3.png"
                alt="Asgaard Sofa"
                width={80}
                height={80}
                className="w-20 h-20 object-cover bg-[rgb(243,232,197)] rounded-md"
              />
              <p className='line-clamp-none font-semibold ml-24 relative bottom-20'>explore new ways of decorating</p>
                  <span className='text-gray-400 ml-24 relative bottom-20'>03 Aug 2022</span>
             
              
              <Image
                src="/blog1.png"
                alt="Asgaard Sofa"
                width={80}
                height={80}
                className="w-20 h-20 object-cover bg-[rgb(243,232,197)] rounded-md"
              />
               <p className='line-clamp-none font-semibold ml-24 relative bottom-20'>explore new ways of decorating</p>
                  <span className='text-gray-400 ml-24 relative bottom-20'>03 Aug 2022</span>
             
              <Image
                src="/blog2.png"
                alt="Asgaard Sofa"
                width={80}
                height={80}
                className="w-20 h-20 object-cover bg-[rgb(243,232,197)] rounded-md"
              />
                <p className='line-clamp-none font-semibold ml-24 relative bottom-20'>explore new ways of decorating</p>
                  <span className='text-gray-400 ml-24 relative bottom-20'>03 Aug 2022</span>
              </div>
              </div>
              {/* jnrfnaew;wrnhg */}
              
      <div className="w-full bg-pink-50 py-12 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          <div>
            <h1 className="font-semibold text-xl md:text-2xl">Free Delivery</h1>
            <p className="text-gray-500 mt-2">
              For all orders $50 consecutor <br /> adipim scing elit
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl md:text-2xl">90 Days Return</h1>
            <p className="text-gray-500 mt-2">
              If good have problem consecutor <br /> adipim scing elit
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl md:text-2xl">Secure Payment</h1>
            <p className="text-gray-500 mt-2">
              100% sure payment <br /> consecutor adipim scing elit
            </p>
          </div>
        </div>            
     </div>
    </main>
  )
}
