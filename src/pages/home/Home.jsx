import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai";
import { useSwipeable } from 'react-swipeable';

import Layout from '../../components/layout/Layout'
import Vector from '../../components/Vector';
import ArrowR from '../../components/ArrowRight'
import ArrowL from '../../components/ArrowLeft'

import Hero from '../../assets/img/hero.gif'
import Logo from '../../assets/img/logo.svg'


import Line from '../../assets/img/line.png'
import Coin from '../../assets/img/Coin.png'
import Coin2 from '../../assets/img/Coin2.png'
import Paper from '../../assets/img/paper.png'
import PaperMobile from '../../assets/img/paper-mobile.png'

function Home() {

   const NavbarItem = [
    { name: "The Lore", link: "#thelore" },
    { name: "Tokenomics", link: "#tokenomics" },
    { name: "Buy Now", link: "#buynow" },
    { name: "Join Us", link: "#joinus" },
  ]

  const [toggleMenu, setToggleMenu] = React.useState(false)
  
   const [currentIndex, setCurrentIndex] = useState(0);

   const images = [
      "/img/slider/Regalart1.png",
      "/img/slider/Regalart2.png",
      "/img/slider/Regalart3.png",
      "/img/slider/Regalart4.png",
      ];

   // const goToNext = () => {
   //    setCurrentIndex((currentIndex + 1) % images.length);
   // };

   // const goToPrevious = () => {
   //    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
   // };

   const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Swipeable handlers for mobile devices
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
  });

   
  return (
   <Layout>
      <section className='relative max-w-6xl mx-auto md:px-4 flex flex-row justify-between gap-4 z-50'>
         <div className="flex justify-between items-center p-4">
            <div className="">
               {/* Logo */}
               <a href="">
                  <img src={Logo} alt="Regal Logo" className="w-[145px] h-[60px]"/>
               </a>
            </div>
         </div>
         
         
         
         <div className="flex items-center ">
            <div className="px-8 py-4 md:flex justify-center items-center ">
            
               {/* Mobile Menu Icon */}
               <div className="md:hidden flex items-center">
               {toggleMenu ? (
               <AiOutlineClose
                  fontSize={28}
                  className="text-white cursor-pointer absolute top-6 right-4"
                  onClick={() => setToggleMenu(false)}
               />
               ) : (
               <HiMenuAlt4
                  fontSize={28}
                  onClick={() => setToggleMenu(true)}
                  className="text-white cursor-pointer"
               />
               )}
               {toggleMenu && (
               <div className="w-full lg:hidden bg-main flex justify-center h-screen right-0 top-0 px-4 fixed z-20">
                  <div className="">
                     <AiOutlineClose
                     fontSize={28}
                     className="text-white cursor-pointer absolute top-6 right-4"
                     onClick={() => setToggleMenu(false)}
                  />
                  </div>
            
                  <ul className="flex items-center flex-col pt-20 space-y-6">

                  {NavbarItem?.map((menu, index) => (
                  <li
                     key={index}
                     className=" text-white px-4 text-lg"
                  >
                     <a href={menu?.link} onClick={() => setToggleMenu(false)}>{menu?.name}</a>
                  </li>
                  ))}
                  </ul>
               </div>
               )}
               </div>
            </div>
         </div>
         
         <div className="hidden md:flex flex-wrap justify-center items-center space-x-9 ">
            <a
               href="https://t.me/regalsol"
               target="_blank"
               className="flex items-center justify-center text-slate-100 hover:text-primaryYellow"
            >
               <img src="assets/Telegram.png" alt="" />
            </a>

            <a
               href="https://x.com/RegalSolana"
               target="_blank"
               className="flex items-center justify-center text-slate-100 hover:text-primaryYellow"
            >
               <img src="assets/X.png" alt="" />
            </a>

            <a
               href=""
               target="_blank"
               className="flex items-center justify-center text-slate-100 hover:text-primaryYellow mr-5"
            >
               <img src="assets/Dexscreener.png" alt="" />
            </a>
            
            <a href='' className='bg-white px-5 py-1 text-2xl font-bold text-primary'>BUY NOW</a>
         </div>
      </section>
      
      <section className='max-w-6xl mx-auto lg:-translate-y-28 relative'>
         {/* <div className="w-1/3 mx-auto absolute -top-1/2 -translate-y-4 -translate-x-2 md:translate-y-0 sm:-top-1/3 lg:-top-1/2 bottom-0 left-1/2 right-1/2 lg:-translate-x-5 flex flex-col justify-center items-center"> */}
         <div className="w-1/2 mx-auto absolute -top-1/2 bottom-0 left-1/2 right-1/2 -translate-y-4 -translate-x-12 sm:-translate-x-16 md:-translate-x-24 lg:-translate-x-28 lg:-top-1/2  flex flex-col justify-center items-center">
              <p className="text-white text-center text-sm md:text-[24px] px-4 md:mb-3">Welcome Degen!</p>
              <p className="text-white text-center text-sm md:text-[24px] px-4 "> This Your checkpoint</p>
         </div>
           
         <div className="flex justify-center">
            <img src={Hero} alt="" className='h-auto lg:h-autos w-[80%]' />
         </div>
         
         <div className="relative flex items-center justify-center">
            <div className="px-8 py-4 lg:flex justify-center items-center ">

               {/* Navigation Links */}
               <ul className="hidden lg:flex space-x-8 md:space-x-16">
                  {NavbarItem?.map((menu, index) => (
                     <li
                        key={index}
                        className=" text-secondary text-[32px] hover:text-gray-300 transition duration-300"
                     >
                        <a className='mx-5' href={menu?.link}>{menu?.name}</a>
                     </li>
                     ))}
               </ul>
            
            </div>
         </div>
      </section>
      
      <section id='thelore' className=" flex flex-col items-center justify-center gap-10 py-16 px-8">
         {/* Top Decorative Line */}
         <div className="flex items-center justify-center mb-6">
            <h2 className='text-secondary text-3xl md:text-[55px] lg:text-[68px] font-semibold mt-5 absolute -translate-y-3 md:-translate-y-3 font-fontHead'>The Lore</h2>
            <img src={Line} alt="Knight Image" className="w-full h-auto object-cover"/>
         </div>
         
         
         
         <div className="relative h-auto bg-cover bg-center w-full max-w-3xl mx-auto mt-8 image-border"
           >
            
            <div {...handlers} className="relative">
               {/* Slider Image with border */}
               <div className="relative">
               <img
                  src={images[currentIndex]}
                  alt="Slider"
                  className="w-full h-[300px] md:h-[500px] object-cover"
               />
               </div>

               {/* Previous Arrow - hidden on mobile */}
               <div
               className="absolute left-4 lg:-left-24 top-1/2 transform -translate-y-1/2 cursor-pointer hidden lg:block"
               onClick={goToPrevious}
               >
               <div className="-ml-10">
                  <img src="assets/Arrow-left.png" className="w-15 h-15" alt="Previous" />
               </div>
            </div>

            {/* Next Arrow - hidden on mobile */}
            <div
               className="absolute right-4 lg:-right-24 top-1/2 transform -translate-y-1/2 cursor-pointer hidden lg:block"
               onClick={goToNext}
               >
               <div className="-mr-10">
                  <img src="assets/Arrow-right.png" className="w-15 h-15" alt="Next" />
               </div>
               </div>
            </div>
            
         </div>
         
         {/* Slider Dots */}
         <div className="flex justify-center space-x-6">
         {images.map((_, idx) => (
            <div
               key={idx}
               className={`w-4 h-4 rounded-full cursor-pointer ${
               idx === currentIndex ? 'bg-secondary scale-125' : 'bg-secondary'
               }`}
               onClick={() => setCurrentIndex(idx)}
            />
         ))}
         </div>
              
         {/* Bottom Decorative Line */}
         <div className="xl:w-2/3 container mx-auto flex flex-col gap-6 items-center justify-center mt-6">
            <p className='text-secondary  font-extralight text-lg lg:text-2xl tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi iusto nemo aperiam minima amet, facere quam blanditiis placeat repellendus eveniet dolore quibusdam quaerat totam odit, debitis accusantium fugit ullam ducimus. Nostrum eum accusantium velit porro quibusdam odit alias, magnam, praesentium, iste exercitationem accusamus veniam! Aperiam veniam cum voluptas, provident, nesciunt ex deleniti, sequi aliquid maxime distinctio est libero nam assumenda ipsa harum.</p>
            
            <p className='text-secondary text-lg lg:text-2xl tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam cum neque ab reprehenderit quam sapiente magnam laudantium fuga. Sed laborum unde repudiandae dolorum velit nemo eveniet! Velit, rem a!</p>
              
            <h2 className='text-white text-3xl mt-5 text-center'>"Cloaked in secrecy, bound by honor."</h2>  
         </div>
           
      </section>
      
      <section id='tokenomics' className=" max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center py-16 font-fontHead">
         {/* Top Decorative Line */}
         <div className="flex items-center justify-center mb-6 ">
            <h2 className='text-secondary text-3xl md:text-[55px] lg:text-[68px] font-medium mt-5 absolute -translate-y-3 md:-translate-y-3 font-fontHead'>Tokenomics</h2>
            <img src={Line} alt="Knight Image" className="w-full h-auto object-cover"/>
         </div>
         
         <div className="max-w-6xl ">
              <img src={Paper} alt="" className=' hidden md:block  lg:h-auto w-full' />

              {/* Mobile */}
              <img src={PaperMobile} alt="" className='h-[80vh] w-auto md:hidden' />
         </div>
         
         <div className="hidden lg:grid grid-rows-3 md:space-x-8 gap-4 absolute translate-y-20 md:translate-y-28 px-8 ">
         {/* Coin Image */}
            
            <div class="grid grid-rows-1 grid-flow-col gap-10 place-self-center ">
               <div class="row-span-2">
                  <img src={Coin} alt="Coin" className="w-[200px] h-[200px] object-cover" />
               </div>
               <div class="col-span-2 row-span-1">
                  <h1 className="text-7xl font-bold font-fontHead text-primary translate-y-8">1 BILLION</h1>
                  <h2 className="text-6xl font-bold font-fontHead mb-4 text-[#D08159] translate-y-8">Supply</h2>
               </div>
            </div>
              
            <div className="w-full max-w-3xl space-y-10 lg:mt-6">
               <div className="flex justify-between items-center sm:max-w-xl lg:max-w-2xl text-primary text-lg sm:text-[24px] md:text-[28px] lg:text-[36px] ">
                  <span className="flex items-center space-x-4">
                     <span>
                        <Vector/>
                     </span>
                     <span>Mint & Freeze</span>
                  </span>
                  <span className="flex items-center space-x-2">
                     <span className="text-primary"> : .......................</span>
                     <span className="text-green-600">Revoked</span>
                  </span>
               
               </div>

               <div className="flex justify-between items-center md:max-w-xl lg:max-w-2xl  text-primary text-lg sm:text-[24px] md:text-[28px] lg:text-[36px] mt-4">
                  <span className="flex items-center space-x-4 ">
                     <span><Vector/></span>
                     <span>Liquidity</span>
                  </span>
                  <span className="flex items-center space-x-2">
                     <span className="text-primary"> : ............................</span>
                     <span className="text-green-600">Burnt</span>
                  </span>
               </div>

               <div className="flex justify-between items-center md:max-w-xl lg:max-w-2xl text-primary text-lg sm:text-[24px] md:text-[28px] lg:text-[36px] mt-4">
                  <span className="flex items-center space-x-4">
                     <span><Vector/></span>
                     <span>Taxes</span>
                  </span>
                  <span className="flex items-center space-x-2">
                     <span className="text-primary"> : ..................................</span>
                     <span className="text-green-600">0/0</span>
                  </span>
                  
               </div>
            </div>
         
            {/* Address Section */}
            <div className=" text-primary text-sm md:text-[28px] font-bold flex items-start mt-12 justify-center">
               <p className='text-2xl font-bold'>CA: Token Not Live Yet</p>
               {/* Red Seal Icon */}
               <div className=" mt-2 -translate-y-4 sm:-translate-y-8 md:-translate-y-8 right-0 ">
                  <img src={Coin2} alt="Seal Icon" className="w-auto h-20 md:w-24 md:h-24 inline-block" />
               </div>
            </div>
         </div>
         
         {/* Mobile version: visible only on small screens */}
         <div className="grid grid-cols-1 space-y-8 lg:hidden py-4 gap-6 absolute translate-y-16 px-4">
            
            <div class="grid grid-rows-1 grid-flow-col gap-3 place-self-center ">
               <div class="row-span-2">
                  <img src={Coin} alt="Coin" className="w-[100px] h-[100px] object-cover" />
               </div>
               <div class="col-span-2 row-span-1">
                  <h1 className="text-4xl font-bold text-primary translate-y-8">1 BILLION</h1>
                  <h2 className="text-4xl font-bold mb-b text-[#D08159] translate-y-8">Supply</h2>
               </div>
            </div>

            <div className="text-primary space-y-4 text-lg sm:text-xl px-8">
               <div className="flex justify-between space-x-3">
                  <span className="flex items-start space-x-2">
                     <span className='sm:text-xl'>
                        <Vector/>
                     </span>
                     <span className=''>Mint & Freeze</span>
                  </span>
                  <span className="flex items-center space-x-2">
                     <span className="text-primary "> : ..........</span>
                     <span className="text-green-600">Revoked</span>
                  </span>
               </div>
               <div className="flex justify-between space-x-3">
                  <span className="flex items-center space-x-2">
                     <span className=''>
                        <Vector/>
                     </span>
                     <span className=''> Liquidity</span>
                  </span>
                  <span className="flex items-center space-x-2">
                     <span className="text-primary"> : ...............</span>
                  <span className="text-green-600">Burnt</span>
                  </span>
               </div>
               <div className="flex justify-between">
                  <span className="flex items-center space-x-2">
                     <span className=''>
                        <Vector/>
                     </span>
                     <span className=''>Taxes</span>
                  </span>
                  <span className="flex items-center space-x-2">
                     <span className="text-primary"> : ...................</span>
                     <span className="text-green-600 ">0/0</span>
                  </span>
               </div>
            </div>

            <div className="text-center flex justify-center px-6 mt-10">
               <p className="text-lg text-primary">CA: Token Not Live Yet</p>
               {/* <div className="flex justify-center mt-2">
                  <img src={Coin2} alt="Seal Icon" className="w-12 h-12" />
               </div> */}
            </div>
         </div>
      
         
         
      </section>
      
      <section id='buynow' className="max-w-6xl mx-auto py-32 px-8">
         {/* Top Decorative Line */}
         <div className="flex items-center justify-center mb-20">
            <h2 className='text-secondary text-3xl md:text-[55px] lg:text-[68px] font-medium mt-5 absolute -translate-y-3 md:-translate-y-3 font-fontHead '>How To Buy</h2>
            <img src={Line} alt="Knight Image" className="w-full h-auto object-cover"/>
         </div>
      
         
      
         {/* Cards Container */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-20 max-w-5xl mx-auto px-4 place-items-center">
            
            
            <div className="relative rounded-lg p-10 text-center transform bg-contain transition w-auto h-[400px] md:h-[525px] md:w-[380px] hover:scale-105 flex items-center"
            style={{
            backgroundImage: `url('img/card/bg-card1.png')`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}>
               <div className=" w-auto h-auto flex flex-col gap-5 justify-items-center items-center">
                  {/* Card Icon */}
                     <div className="text-5xl border ">
                        <img src="/img/card/Phantom.png" className='w-20 md:w-auto' alt="" />
                     </div>
                     <div className="">
                        {/* Card Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-[#C43E22] font-fontHead">Create a wallet</h3>
                        {/* Card Description */}
                        <p className="text-sm md:text-lg text-primary mt-3">Create a wallet with PHANTOM. You can follow the easy steps when given the option to create a new account.</p>
                        {/* Card Link */}     
                     </div>
                     <div className="">
                        <a href="#"
                        className="text-[#C43E22] text-xl md:text-[28px] font-bold font-fontHead hover:underline"
                        >
                        Here
                        </a>
                     </div>
                     
               </div>
            </div>

            <div className="relative rounded-lg p-10 text-center transform bg-contain transition w-auto h-[400px] md:h-[525px] md:w-[380px] hover:scale-105 flex items-center"
            style={{
            backgroundImage: `url('img/card/bg-card2.png')`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}>
               <div className=" w-auto h-auto flex flex-col gap-5 justify-items-center items-center">
                  {/* Card Icon */}
                     <div className="text-5xl border ">
                        <img src="/img/card/Solana.png" className='w-20 md:w-auto' alt="" />
                     </div>
                     <div className="">
                        {/* Card Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-primary font-fontHead">Get some SOL</h3>
                        {/* Card Description */}
                        <p className="text-sm md:text-lg text-primary mt-3">You can deposit $SOL into your wallet using any crypto exchange of your choice.</p>
                        {/* Card Link */}     
                     </div>
                     <div className="">
                        <a href="#"
                        className="text-primary text-xl md:text-[28px] font-bold font-fontHead hover:underline"
                        >
                        Here
                        </a>
                     </div>
                     
               </div>
            </div>
            
            <div className="relative rounded-lg p-10 text-center transform bg-contain transition w-auto h-[400px] md:h-[525px] md:w-[380px] hover:scale-105 flex items-center"
            style={{
            backgroundImage: `url('img/card/bg-card3.png')`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}>
               <div className=" w-auto h-auto flex flex-col gap-5 justify-items-center items-center">
                  {/* Card Icon */}
                     <div className="text-5xl border ">
                        <img src="/img/card/Swap-sol.png" className='w-32 md:w-auto' alt="" />
                     </div>
                     <div className="">
                        {/* Card Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-[#C43E22] font-fontHead">Swap $SOL to $REGAL</h3>
                        {/* Card Description */}
                        <p className="text-sm md:text-lg text-[#C43E22]  mt-3">Connect your wallet, paste the $REGAL token address into RAYDIUM. Now swap your SOL to buy $REGAL..</p>
                        {/* Card Link */}     
                     </div>
                     <div className="">
                        <a href="#"
                        className="text-[#C43E22] text-xl md:text-[28px] font-bold font-fontHead hover:underline"
                        >
                        Here
                        </a>
                     </div>
                     
               </div>
            </div>

            <div className="relative rounded-lg p-10 text-center transform bg-contain transition w-auto h-[400px] md:h-[525px] md:w-[380px] hover:scale-105 flex items-center"
            style={{
            backgroundImage: `url('img/card/bg-card4.png')`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}>
               <div className=" w-auto h-auto flex flex-col gap-5 justify-items-center items-center">
                  {/* Card Icon */}
                     <div className="text-5xl border ">
                        <img src="/img/card/Bag-money.png" className='w-20 md:w-auto' alt="" />
                     </div>
                     <div className="p-6">
                        {/* Card Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-primary font-fontHead">Get RICH</h3>
                        {/* Card Description */}
                        <p className="text-sm md:text-lg text-primary mt-3">Lastly HOLD onto your $REGAL and see your money grow.
</p>
                        {/* Card Link */}     
                     </div>
                     
               </div>
            </div>
         </div>
      </section>
    
      {/* Dex */} 
      <section id='joinus' className="max-w-6xl mx-auto px-6"> 
         <div className="flex justify-center items-center space-x-10 md:space-x-20">
            {/* Replace with actual image URLs */}
            <h2 className='text-secondary font-medium font-fontHead text-4xl md:text-[55px] lg:text-[60px] '>Join Us</h2>
            <a href="https://t.me/regalsol"
            target="_blank">
               <img src="/img/join-us/telegram.svg" alt="Platform 4" className="w-8 h-8 md:w-11 md:h-11 hover:scale-110 transition duration-300" />
            </a>
            <a href="https://x.com/RegalSolana"
            target="_blank">
               <img src="/img/join-us/x.svg" alt="Platform 4" className="w-8 h-8 md:w-11 md:h-11 hover:scale-110 transition duration-300" />
            </a>
            <a href="">
               <img src="/img/join-us/dexscreener.svg" alt="Platform 4" className="w-8 h-8 md:w-11 md:h-11 hover:scale-110 transition duration-300" />
            </a>
         </div>
      </section>
   </Layout>
  )
}
export default Home