import React, {Fragment, FC} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

const Nav = ({}) => {

  const navigate = useNavigate();
  const handleHomeClick = () => navigate('/');

  return (
      <Menu as="div" className="relative flex text-left p-2 justify-between align-middle shadow-md z-100">
          <Menu.Button
            className=""
              onClick={handleHomeClick}
            >Street Racer
          </Menu.Button>
        <ul className='p-2 '>
          <Link className=' text-xs' to={"/shows"}>Shows</Link>
          <Link className='text-xs' to={"/merch"}>Merch</Link>
          <Link className='text-xs' to={"/media"}>Media</Link>
          <Link className='text-xs' to={"/about"}>About</Link>
        </ul>
      </Menu>
    )
};

export default Nav;