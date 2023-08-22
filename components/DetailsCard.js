import React from 'react'

const DetailsCard = () => {
    return (
        <>
            <div
                className='w-[400px] h-[250px] rounded-lg border-2 flex flex-col justify-around'
            >
                <div
                    className='flex flex-row justify-between items-center p-4'
                >
                    <div
                        className='flex flex-col'
                    >
                        <h1>Name</h1>
                        <h1>Sahil Bhatt</h1>
                    </div>
                    <button
                        className='bg-gray-300 text-black rounded-[20px] w-[110px] h-[25px]'
                    >
                        Edit
                    </button>
                </div>
                
                <div
                    className='flex flex-row justify-between items-center p-4'
                >
                    <div
                        className='flex flex-col'
                    >
                        <h1>Email</h1>
                        <h1>sahilbhatt@gmail.com</h1>
                    </div>
                    <button
                        className='bg-gray-300 text-black rounded-[20px] w-[110px] h-[25px]'
                    >
                        Edit
                    </button>
                </div>

                <div
                    className='flex flex-row justify-between items-center p-4'
                >
                    <div
                        className='flex flex-col'
                    >
                        <h1>Number</h1>
                        <h1>+91 9769408383</h1>
                    </div>
                    <button
                        className='bg-gray-300 text-black rounded-[20px] w-[110px] h-[25px]'
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    )
}

export default DetailsCard