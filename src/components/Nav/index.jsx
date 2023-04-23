import React, {Fragment, FC} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';

const Nav = ({}) => {

  const navigate = useNavigate();
  const handleHomeClick = () => navigate('/');

  return (
      <Menu as="div" className="relative flex text-left p-2 justify-between align-middle shadow-md z-100">
          <Menu.Button as='img' alt='Leesey Logo' src={require('../../assets/cowboy-black-on-white.png')}
            className="inline-flex text-warm-white justify-center w-[15%] p-1 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-accent"
              onClick={handleHomeClick}
            >
          </Menu.Button>
        <ul className='p-2 '>
          <Link className='nav-link' to={"/shows"}>Shows</Link>
          <Link className='nav-link' to={"/merch"}>Merch</Link>
          <Link className='nav-link' to={"/media"}>Media</Link>
          <Link className='nav-link' to={"/about"}>About</Link>
        </ul>
      </Menu>
    )
};

export default Nav;