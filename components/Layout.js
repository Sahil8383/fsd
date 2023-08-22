import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SignUp from './SignUp';
import { useSession } from "next-auth/react"
const Layout = ({ children }) => {

    
    const { data: session, status } = useSession()

    return (
        <>
            <div className='grid min-h-screen grid-rows-header bg-zinc-100' >
                <div className="bg-white shadow-sm z-10">
                    <Navbar />
                </div>
                <div className='grid md:grid-cols-sidebar' >
                    <div>
                        <Sidebar />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout