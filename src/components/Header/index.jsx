"use client"
import React, { useEffect, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiBagSimpleDuotone } from "react-icons/pi";
import Button from '@mui/material/Button';



export const Header = () => {
 const headerRef = useRef();
 
 useEffect(() => {
window.addEventListener("scroll", () => {
  let position = window.pageYOffset;
  if(headerRef.current){
    if (position > 100) {
      headerRef.current.classList.add('scroll');
    } else {
      headerRef.current.classList.remove('scroll');
    }
  }
})

 },[])
 
  return (
 
    <header className='w-[100%] fixed top-0 left-0 z-[100] py-4 duration-300' ref={headerRef}>
     <div className="container flex items-center justify-between">
        <div className="logo w-[25%] ml-32">
           <Link href="/"><Image src={'/logo2.png'} width={'100'} height={'400'} alt='logo' /></Link>
         
        </div>

        <div className='ml-auto flex items-center justify-end gap-4 w-[75%]'>
          <nav>
            <ul className='flex items-center gap-6 mb-0'>
              <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>Face</Link></li>
                <li><Link href='/'>Hair</Link></li>
                <li><Link href='/'>Eye</Link></li>
                <li><Link href='/'>Body</Link></li>
                <li><Link href='/'>Skin</Link></li>
                <li><Link href='/'>Body</Link></li>
                <li><Link href='/'>Skin</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/'>Contact Us</Link></li>
                </ul>
          </nav>

          <Link href="/cart" className='relative cartTab ml-3'><PiBagSimpleDuotone/>
          <span className='flex items-center justify-center rounded-full'>0</span></Link>

          <Button className='btn-border rounded-2xl ml-3 '>Sign in </Button>
        </div>

     </div>
    </header>
  )
}
