import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import download from '../assets/download.png';
import toast from 'react-hot-toast';

const Navbar = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  const isLoggedin = props.isLoggedin;
  const setLoggedin = props.setLoggedin;

  return (
    <div className='bg-richblack-900 text-richblack-200 p-4'>

      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <div className='flex items-center'>
          <Link to="/">
            <img src={download} width={80} height={30} loading='lazy' className='rounded-full' alt="Logo" />
          </Link>

          <nav className='hidden lg:flex gap-x-5 text-lg ml-8'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Contact</Link>
          </nav>
        </div>

        <div className='flex items-center gap-x-4'>
          {isLoggedin ? (
            <>
              <button
                className='bg-richblack-800 text-richblack-100 py-2 px-4 rounded-[8px] border border-richblack-700'
                onClick={() => {
                  setLoggedin(false);
                  toast.success("Logged Out");
                }}
              >
                Log out
              </button>
              <Link to="/dashboard">
                <button className='bg-richblack-800 text-richblack-100 py-2 px-4 rounded-[8px] border border-richblack-700'>Dashboard</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className='bg-richblack-800 text-richblack-100 py-2 px-4 rounded-[8px] border border-richblack-700'>Log in</button>
              </Link>
              <Link to="/signup">
                <button className='bg-richblack-800 text-richblack-100 py-2 px-4 rounded-[8px] border border-richblack-700'>Sign up</button>
              </Link>
            </>
          )}

          {/* Hamburger icon for small screens */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <div className={`w-6 h-1 bg-richblack-700 mb-1 ${menuVisible ? 'rotate-45' : ''}`}></div>
            <div className={`w-6 h-1 bg-richblack-700 mb-1 ${menuVisible ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-1 bg-richblack-700 mb-1 ${menuVisible ? '-rotate-45' : ''}`}></div>
          </div>
        </div>
      </div>

      {/* Responsive navigation menu for small screens */}
      {menuVisible && (
        <div className="lg:hidden">
          <nav className='flex flex-col text-lg mt-4'>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}

    </div>
  );
};

export default Navbar;
