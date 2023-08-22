import React from 'react'

const ExperienceCard = () => {
    return (
        <>
            <div
                className='w-[400px] h-[260px] border-2 rounded-lg flex flex-col justify-between items-center p-4'
            >
                <div
                    className='flex flex-row justify-between items-center  w-full'
                >
                    <h1 className=''>Experience</h1>
                    <button
                        className='bg-gray-300 text-black rounded-[20px] w-[100px] h-[25px]'
                    >
                        Edit
                    </button>
                </div>


                <div
                    className='flex flex-row justify-between items-center  w-full gap-4 border-2 p-3 rounded-lg'
                >
                <div
                    className='flex flex-col justify-between items-center  w-full'
                >
                    <div
                        className='flex flex-row justify-between items-center  w-full'
                    >
                        <div
                            className='flex flex-row justify-between items-start  w-full'
                        >
                            <h1>
                                7 Years
                            </h1>
                            <h1>
                                Full-Time
                            </h1>
                        </div>
                    </div>

                    <div
                        className='flex flex-row justify-between items-center  w-full text-gray-500'
                    >
                        <h1>
                            Ourphones
                        </h1>
                        <h1>
                            Full Stack Developer
                        </h1>
                    </div>
                </div>
                <img
                    src='logo.png'
                />
                </div>
                <div
                    className='flex flex-row justify-between items-center  w-full gap-4 border-2 p-3 rounded-lg'
                >
                <div
                    className='flex flex-col justify-between items-center  w-full'
                >
                    <div
                        className='flex flex-row justify-between items-center  w-full'
                    >
                        <div
                            className='flex flex-row justify-between items-start  w-full'
                        >
                            <h1>
                                7 Years
                            </h1>
                            <h1>
                                Full-Time
                            </h1>
                        </div>
                    </div>

                    <div
                        className='flex flex-row justify-between items-center  w-full text-gray-500'
                    >
                        <h1>
                            Ourphones
                        </h1>
                        <h1>
                            Full Stack Developer
                        </h1>
                    </div>
                </div>
                <img
                    src='logo.png'
                />
                </div>
            </div>
        </>
    )
}

export default ExperienceCard