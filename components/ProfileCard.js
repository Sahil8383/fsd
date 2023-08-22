import React from 'react'

const ProfileCard = () => {
  return (
    <>
        <div
            className='w-[400px] h-[120px] rounded-lg flex flex-row justify-between items-center p-4' 
        >
            <img src='/Profilepic.svg' alt='profile pic' className='w-[100px] h-[100px] rounded-full' />
            <button
                className='bg-gray-300 text-black rounded-[20px] w-[110px] h-[25px]'
            >
                Upload Photo
            </button>
        </div>
    </>
  )
}

export default ProfileCard