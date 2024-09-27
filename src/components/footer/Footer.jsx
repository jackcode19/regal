import React from 'react'

import Image from '../../assets/img/footer.png'

function Footer() {
  return (
   
    <footer className="relative -z-[999] bg-primary h-[300px] md:h-[650px] w-full flex justify-center -translate-y-12 md:translate-y-0">
      {/* Background Image */}
      <img
        src={Image}
        alt="Pixel Art Knight"
        className="absolute  w-full h-full object-contain mx-auto pointer-events-none"
        // style={{ maxWidth: '2000px' }} // Limit width for larger screens
      />

      <div className="absolute bottom-4 md:bottom-8 w-full flex justify-between max-w-7xl mx-auto px-6 ">
        {/* Footer Text */}
        <div className=" text-secondary text-lg md:text-3xl">
          ©REGAL
        </div>
        <div className=" text-secondary text-lg md:text-3xl">
          2024
        </div>
      </div>
    </footer>
 
  )
}
export default Footer

