import React from 'react'

const EducationCard = () => {
    return (
        <>
            <div
                className='w-[400px] h-[120px] border-2 rounded-lg flex flex-col justify-between  p-4'
            >
                <div
                    className='flex flex-row justify-between items-center  w-full'
                >
                    <h1 className=''>Education</h1>
                    <button
                        className='bg-gray-300 text-black rounded-[20px] w-[100px] h-[25px]'
                    >
                        Edit
                    </button>
                </div>
                <div
                    className='flex flex-row justify-between items-cente'
                >
                    <div
                        className='flex flex-col'
                    >
                        <h1 className='text-xl ' >
                            IIT Bombay
                        </h1>
                        <h1>
                            2023
                        </h1>
                    </div>
                    <h1>
                        B.Tech
                    </h1>
                </div>
            </div>
        </>
    )
}

export default EducationCard