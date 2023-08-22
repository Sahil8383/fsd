import React from 'react'

const AboutCrad = () => {
    return (
        <>
            <div
                className='w-[400px] h-[160px] rounded-lg border-2 flex flex-col justify-around items-center'
            >
                <div
                    className='flex flex-row justify-between items-center p-4 w-full'
                >
                    <div
                        className='flex flex-row gap-1'
                    >
                        <h1>About</h1>
                        <h1
                            className='text-[#1E2875] font-bold'
                        >Sahil</h1>
                    </div>
                    <button
                        className='bg-gray-300 text-black rounded-[20px] w-[110px] h-[25px]'
                    >
                        Edit
                    </button>
                </div>

                <div
                    className='flex flex-row justify-between items-center p-2 w-full text-[14px] '
                >
                    Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.
                </div>
            </div>
        </>
    )
}

export default AboutCrad