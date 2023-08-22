import React from 'react'
import classNames from 'classnames'
import ProfileCard from '@/components/ProfileCard'
import DetailsCard from '@/components/DetailsCard'
import AboutCrad from '@/components/AboutCrad'
import SkillsCard from '@/components/SkillsCard'
import ExperienceCard from '@/components/ExperienceCard'
import EducationCard from '@/components/EducationCard'
const Profile = () => {

    return (
        <>
            <div
            >
                <div
                    className='min-w-screen min-h-[180px] rounded-lg bg-[#1E2875] p-4 min-w-screen-300-600 
                '
                >
                    <h1 className='text-white'  >My Profile</h1>
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
                
                <div className='flex flex-col items-center justify-center min-h-[520px] min-w-full'>
                    <div
                        className='min-w-[1000px] h-[600px] border-2 bg-white  mt-[-100px] rounded-lg shadow-xl flex flex-row justify-between'
                    >
                        <div
                            className='w-[500px] h-[600px] bg-white flex flex-col justify-around items-center'
                        >
                            <ProfileCard />
                            <DetailsCard />
                            <AboutCrad />
                        </div>
                        <div
                            className='w-[500px] h-[600px] bg-white flex flex-col justify-around items-center'
                        >
                            <SkillsCard />
                            <ExperienceCard />
                            <EducationCard />
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Profile