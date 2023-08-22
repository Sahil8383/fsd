import React from 'react'

const SkillsCard = () => {
  return (
    <>
        <div
            className='w-[400px] h-[120px] border-2 rounded-lg flex flex-col justify-between items-center p-4' 
        >
            <div
                className='flex flex-row justify-between items-center  w-full'
            >
                <h1 className='text-xl '>Skills</h1>
                <button
                    className='bg-gray-300 text-black rounded-[20px] w-[100px] h-[25px]'
                >
                    Edit
                </button>
            </div>
            <div
                className='flex flex-row justify-between items-center  w-full'
            >
                <h1>Nextjs</h1>
                <h1>Reactjs</h1>
                <h1>Nodejs</h1>
                <h1>Expressjs</h1>
            </div>
        </div>
    </>
  )
}

export default SkillsCard