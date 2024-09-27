import { useState } from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineClose } from "react-icons/ai";
// import { RxCross2 } from 'react-icons/rx'

function Navbar() {
   const [open, setOpen] = useState(false)

  return (
    <div className="bg-white sticky top-0 z-50">
      
      {/* Mobile menu */}
      <div>
        <div className="relative z-40 lg:hidden" >
          <div className="fixed inset-0 z-40 flex">
              <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-red-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <AiOutlineClose fontSize={28} />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 ">
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link to={'/order'} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div>

                  <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900">
                      admin
                    </Link>
                  </div>

                </div>

              </div>
          </div>
        </div>
      </div>

      {/* desktop  */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over ₹300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl ">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded'>E-Bharat</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 ">
                    All Products
                  </Link>

                  <a className="text-sm font-medium text-gray-700 cursor-pointer  ">
                    Logout
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                      alt="Dan_Abromov" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar