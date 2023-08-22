import React from 'react'
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useContext } from 'react'
import Context from '@/lib/Context'
import Link from 'next/link'
import SignUp from './SignUp';
const Navbar = () => {

    const { showSidebar, setShowSidebar } = useContext(Context)

    return (
        <>
            <nav
                className={classNames({
                    "bg-white text-zinc-500": true, // colors
                    "flex items-center": true, // layout
                    "w-full fixed z-10 px-4 shadow-sm h-16": true, //positioning & styling
                })}
            >
                <div className='w-[50px] h-[50px] rounded-md border-2 flex justify-center items-center' >
                    {/* <h1 className='text-2xl text-black font-bold' >Dashboard</h1> */}
                    <img src='/logo.png' alt='logo' className='w-[30px] h-[30px]' />
                </div>
                <div className="flex-grow"></div>
                <button className="md:hidden" onClick={
                    () => setShowSidebar(!showSidebar)
                }>
                    <Bars3Icon className="h-6 w-6" />
                </button>
                <div
                    className={classNames({
                        "md:flex items-center space-x-4": true, // layout
                        "text-zinc-500": true, // colors
                    })}
                >
                    <img src='/Profilepic.svg' alt='profile pic' className='w-[30px] h-[30px] rounded-full' />
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar