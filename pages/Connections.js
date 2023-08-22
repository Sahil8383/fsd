import React from 'react'

const Connections = () => {
  return (
    <>
      <div>
        <div
          className='min-w-screen min-h-[120px] rounded-lg bg-[#1E2875] p-4 min-w-screen-300-600 '
        >
          <h1 className='text-white'  >My Connections</h1>
          <style>
            {`
                @media (min-width: 200px) and (max-width: 600px) {
                    .min-w-screen-300-600 {
                        min-width: 300px;
                        margin-top: -310px;
                        height: 100px;
                    }
                    
                }
            `}
          </style>
        </div>


        <div
          className='grid grid-cols-3 gap-4 p-4 '
        >
          <div
            className='w-[350px] h-[180px] border-2 flex flex-row '
          >
            <div
              className='flex flex-col justify-around gap-2 w-[58%] p-4' 
            >
              <h1
                className='text-[#1E2875] text-2xl font-bold'
              >
                Sahil Bhatt
              </h1>
              <span
                className='text-gray-400 text-sm font-bold'
              >
                Full Stack Developer@Google
              </span>
              <button
                className='border-2 w-[170px] h-[30px] rounded-lg bg-[#BAB6EB]'
              >
                Remove Connection
              </button>
            </div>
            <img
              className='w-[140px] h-[140px] rounded-full border-2 mt-4'
              src='/profilepic.svg'
            />
          </div>

          <div
            className='w-[350px] h-[180px] border-2 flex flex-row '
          >
            <div
              className='flex flex-col justify-around gap-2 w-[58%] p-4' 
            >
              <h1
                className='text-[#1E2875] text-2xl font-bold'
              >
                Sahil Bhatt
              </h1>
              <span
                className='text-gray-400 text-sm font-bold'
              >
                Full Stack Developer@Google
              </span>
              <button
                className='border-2 w-[170px] h-[30px] rounded-lg bg-[#BAB6EB]'
              >
                Remove Connection
              </button>
            </div>
            <img
              className='w-[140px] h-[140px] rounded-full border-2 mt-4'
              src='/profilepic.svg'
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default Connections