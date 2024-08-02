import React, { useState } from 'react'
import { navbar } from '../Data/Data';
import Button from './Button';
import { MdMenu } from 'react-icons/md';
import { BiX } from 'react-icons/bi';
import {Link} from "react-router-dom"
const Navbar = () => {
    const [manu, setMenu] = useState(false)
  return (
    <div className='sticky bg-[#e6e6e6] dark:bg-[#131313] text-black dark:text-white py-5'>
        <div className='w-[90%] mx-auto flex gap-5 items-center justify-between'>
            {/* logo section */}
            <div className='text-2xl uppercase font-bold'>
                <Link to={"/"}>Wow Pro</Link>
                Link
            </div>
            {/* navber sections */}
            <div className='hidden md:block'>
                <ul className='flex gap-4 text-xl font-semibold items-center '>
                    {
                        navbar.map((item, index)=>(
                            <li key={index}>
                                <a href={item.link} className='hover:text-[#006d88] transition-all duration-300'>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* log in and sign up sections */}
            <div className='hidden md:flex gap-4'>
                <Button>Log in</Button>
                <Button>sign in</Button>
            </div>
            {/* navbar for mobile view */}
            <div className='md:hidden text-2xl'>
                {
                    manu ? <BiX onClick={()=>setMenu(false)}/> : <MdMenu onClick={()=>setMenu(true)}/>
                }
            </div>
            {/* manu in mobile */}
            {
                manu ? <div className='md:hidden w-[220px] h-[250px] flex flex-col items-start justify-center gap-3 bg-[#000000b2] rounded-xl text-white absolute top-[100px] right-[40px] backdrop-blur-md p-3 transition-all duration-500'>
                    {/* Navbar here */}
                    <ul className=''>
                    {
                        navbar.map((item, index)=>(
                            <li>
                                <a href={item.link} className='hover:text-[#006d88] transition-all duration-300'>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                {/* logo in button here */}
                <div className='flex gap-4'>
                <Button>Log in</Button>
                <Button>sign in</Button>
            </div>
                </div> : <div className="hidden"></div>
            }
        </div>
    </div>
  )
}

export default Navbar;
