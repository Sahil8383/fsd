import React from 'react'
import classNames from 'classnames'
import { useContext } from 'react'
import Context from '@/lib/Context'
import { NavItems } from './NavItems';
import Link from 'next/link'
const Sidebar = () => {

    const { showSidebar, setShowSidebar } = useContext(Context)

    return (
        <>
            <div
                className={classNames({
                    "flex flex-col justify-between": true,
                    "bg-gray-200 text-zinc-50": true,
                    "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true,
                    "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, //
                    "transition-transform .3s ease-in-out md:translate-x-0": true,
                    "-translate-x-full ": !showSidebar,
                })}
            >
                <nav className="md:sticky top-0 md:top-16">
                    {/* nav items */}
                    <ul className="py-2 flex flex-col gap-2">
                        {NavItems.map((item, index) => {
                            return (
                                <Link key={index} href={item.href}>
                                    <li
                                        className={classNames({
                                            "text-black hover:bg-gray-400": true, //colors
                                            "flex gap-4 items-center ": true, //layout
                                            "transition-colors duration-300": true, //animation
                                            "rounded-md p-2 mx-2": true, //self style
                                        })}
                                        onClick={() => setShowSidebar(false)}
                                    >
                                        {item.icon} {item.name}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar