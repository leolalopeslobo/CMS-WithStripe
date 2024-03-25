import React from 'react'
import { Popover } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-[#4f46e5] h-16 px-4'>
      <div> </div>
      <div className='flex items-center gap-2 mr-2'><FontAwesomeIcon icon={faBell} className="text-white text-2xl" />
      



            </div>
    </div>
  )
};

export default Header;