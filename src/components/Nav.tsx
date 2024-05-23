import React, { useEffect } from 'react'


import { Squash as Hamburger } from 'hamburger-react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

import ResponsiveMenu from './ResponsiveMenu';


const Nav = () => {
  const bottomRef = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false)
  const [isOpenServices, setOpenServices] = React.useState(false)
  const [isOpenAbout, setOpenAbout] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  console.log(loading);
  
  useEffect(()=>setLoading(false),[])

  return (
      <>
      <div className='absolute h-24 top-0 z-20 ' ref={bottomRef}></div>
      <div className='fixed w-full  z-50 select-none'>
        <div  className={`w-full h-24 px-4 relative sm top-0 flex justify-between z-[200] transition-colors duration-300 bg-white  `}>
          <a href="/" className="h-[70%] my-auto"><img src="/Rlog1.png" alt="" className='  w-auto object-contain h-full' /></a>
          <ul className='utlg:hidden  select-none text-lg font-bold my-auto flex gap-4  lg:gap-8 xl:gap-12'>
            <li className='relative' onMouseEnter={() => setOpenServices(p => true)} onMouseLeave={() => setOpenServices(p => false)}>

              <a className={`cursor-pointer flex justify-center gap-2 rounded-md px-1 ${isOpenServices && 'bg-zinc-100 text-zinc-600'}`} >Tjänster <span className={`${isOpenServices && 'rotate-180'} flex items-center transition-transform`}><IoIosArrowUp /></span> </a>

              <div className={`absolute top-8 overflow-hidden left-0 w-56 select-none ${isOpenServices ? "h-36" : "h-0"}  transition-all`} >
                <ul className={"p-4  flex flex-col justify-between h-full   rounded-sm !bg-white border-[1px] border-zinc-200"} >
                  <a href='/solpaneler'>Solpaneler</a>
                  <div className="h-[1px] w-full bg-zinc-100"/>
                  <a href='/laddboxar'>Laddboxar</a>
                  <div className="h-[1px] w-full bg-zinc-100"/>
                  <a href='/batteri'>Batteri</a>
                </ul>
              </div>
            </li>
            <li><a href='/kunskapsbanken'>Kunskapsbank</a></li>
            <li className='relative ' onMouseEnter={() => setOpenAbout(p => true)} onMouseLeave={() => setOpenAbout(p => false)}>

              <a className={`cursor-pointer flex justify-center gap-2 rounded-md px-1 ${isOpenAbout && 'bg-zinc-100 text-zinc-600'}`} >Läs Mer <span className={`${isOpenAbout && 'rotate-180'} flex items-center transition-transform`}><IoIosArrowUp /></span> </a>

              <div className={`absolute top-8 overflow-hidden left-0 w-56 select-none ${isOpenAbout ? "h-36" : "h-0"}  transition-all`} >
                <ul className={"p-4  flex flex-col justify-between h-full   rounded-sm !bg-white border-[1px] border-zinc-200"} >
                  <a href='/#varfor-oss'>Om Oss</a>
                  <div className="h-[1px] w-full bg-zinc-100"/>
                  <a href='/jobb'>Jobba hos oss</a>
                  <div className="h-[1px] w-full bg-zinc-100"/>
                  <a href='/integritetspolicy'>Integritetspolicy</a>
                </ul>
              </div>
            </li>

          </ul>

          <section className='utlg:hidden h-full flex items-center gap-2 font-semibold'>
            <a href="/offert" className='p-2 bg-solidaBlue text-white rounded-md'>Fri Offert</a>
          </section>

          <span className='my-auto relative z-30 lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </span>
        </div>
        <ResponsiveMenu openState={isOpen} /> 
    </div>
    </>
  )
}

export default Nav