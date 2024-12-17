import React from 'react'
import Logo from '../assets/images/TestLogo.svg'
import DrImg from "../assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
import Setting from '../assets/images/settings_FILL0_wght300_GRAD0_opsz24.svg'
import Menu from '../assets/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg'
import Overview from '../assets/images/home_FILL0_wght300_GRAD0_opsz24.svg'
import GroupFill from '../assets/images/group_FILL0_wght300_GRAD0_opsz24.svg'
import Schedule from '../assets/images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import Transaction from '../assets/images/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import Message from '../assets/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
function Header() {
    return (
        <div className='w-full h-20 p-4 flex flex-wrap justify-evenly bg-white rounded-full '>
            <div>
                <img src={Logo} alt={Logo} />
            </div>
            <div className='w-1/2  '>
                <ul className='w-auto flex justify-around align-middle Header-menu'>
                    <li className='flex flex-wrap p-3 gap-2 rounded-3xl'> <img src={Overview} alt={Overview} />Overview</li>
                    <li className='flex flex-wrap p-3 px-4 gap-2 bg-teal-300 rounded-3xl'><img src={GroupFill} alt={GroupFill} /> Patient</li>
                    <li className='flex flex-wrap p-3 gap-2  rounded-3xl'><img src={Schedule} alt={Schedule} /> Schedule</li>
                    <li className='flex flex-wrap p-3 gap-2  rounded-3xl'> <img src={Message} alt={Message} />Message</li>
                    <li className='flex flex-wrap p-3 gap-2  rounded-3xl'> <img src={Transaction} alt={Transaction} />Transaction</li>
                </ul>

            </div>
            <div className='flex w-max flex-wrap gap-2'>
                <img src={DrImg} alt={DrImg} />
                <p className='px-2 border-r text-sm text-gray-400' ><b className='text-black text-sm'>Dr. Jose Simmsons</b> <br></br>
                    General Practitioner
                </p>
                <img src={Setting} alt={Setting} />
                <img src={Menu} alt={Menu} />
            </div>

        </div>
    )
}

export default Header