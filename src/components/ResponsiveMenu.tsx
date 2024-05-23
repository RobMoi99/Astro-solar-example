import { BsFillTelephoneFill } from "react-icons/bs"
import React, { useEffect } from "react"
import { IoIosArrowUp } from "react-icons/io";

const ResponsiveMenu = ({openState}:{openState:boolean}) => {
  const [isOpenServices, setOpenServices] = React.useState(false)
  const [isOpenAbout, setOpenAbout] = React.useState(false)
  const [hidden, setHidden] = React.useState(true)
  useEffect(()=>{
    console.log("openState",openState,"hidden",hidden);
    
    if(!openState)
      setTimeout(()=>{setHidden(true)},300)
    else setHidden(false)
  },[openState])/* ${openState && (!isOpenServices && !isOpenAbout ? 'h-[24rem]' : (isOpenServices && isOpenAbout) ? 'h-[30rem]' : 'h-[28rem]')} */
  return (
    <div className={`lg:hidden  relative ${openState ? 'z-10' : 'z-0'} ${(openState ? `opacity-100 h-[32rem] ` : "h-0 opacity-0 ")} 
     transition-all overflow-hidden duration-500 ease-in-out ${openState && 'shadow-lg'} relative`}>
      <div
      /* Open state determines if the menu is open or not */
      /* (!isOpenServices && !isOpenAbout ? 'h-[24rem]' : (isOpenServices && isOpenAbout) ? 'h-[30rem]' : 'h-[28rem]') */
      className={` absolute bottom-0 w-full h-[32rem] bg-solidaDarkBlue text-white font-bold transition-all overflow-hidden  font-inriaserif text-center flex flex-col  justify-around `}>
    
      {/* Menu choices */}
      <div >
        <a className=" cursor-pointer flex justify-center gap-2" onClick={() => setOpenServices(p => !p)}>Tjänster <span className={`${isOpenServices && 'rotate-180'} flex items-center transition-transform`}><IoIosArrowUp /></span> </a>
        <div className={` overflow-hidden  flex mx-auto w-full  bg-solidaDarkBlue brightness-95 ${isOpenServices ? "h-36" : "h-0"} transition-all duration-500`} >
              <ul className={"p-4 mx-auto  flex flex-col justify-between h-full text-white"} >
                  <a href="/solpaneler">Solpaneler</a>
                  <div className="h-[1px] w-full bg-zinc-100"/>
                  <a href="/laddboxar">Laddboxar</a>
                  <div className="h-[1px] w-full bg-zinc-100"/>
                  <a href="/batteri">Batteri</a>
              </ul>
        </div>

      </div>
      <a href='/kunskapsbanken'>Kunskapsbank</a>
      <div >
        <a className=" cursor-pointer flex justify-center gap-2" onClick={() => setOpenAbout(p => !p)}>Tjänster <span className={`${isOpenAbout && 'rotate-180'} flex items-center transition-transform`}><IoIosArrowUp /></span> </a>
        <div className={` overflow-hidden  flex mx-auto w-full  bg-solidaDarkBlue brightness-95 ${isOpenAbout ? "h-36" : "h-0"} dur transition-all duration-500`} >
              <ul className={"p-4 mx-auto  flex flex-col justify-between h-full text-white"} >
                  <a href='/#varfor-oss'>Om oss</a>
                  <div className="h-[1px] w-full bg-zinc-100"/>
                  <a href="/jobb">Jobba hos oss</a>
                  <div className="h-[1px] w-full bg-zinc-100"/>
                  <a href='/integritetspolicy'>Integritetspolicy</a>
              </ul>
        </div>

      </div>

      <a href="/offert" className='p-2 mx-auto w-24 bg-solidaBlue text-white rounded-md'>Fri Offert</a>

    </div>
  </div>
  )
}

export default ResponsiveMenu

/* Mobile dropdown menu */

