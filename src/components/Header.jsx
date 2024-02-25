import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { images } from "../constants";

const navItemsInfo = [
  {name: "Home"},
  {name: "Articles"},
  {name: "Pages"},
  {name: "Pricing"},
  {name: "Faq"},
];

const NavItem = ({ name }) => {
return  (
  <li className='relative group'>
    <a href="/" className='px-4 py-2'>
      {name}
    </a>
    <spam className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
      /
    </spam>
</li>
 );
};

const Header = () => {
const [navIsVisible, setNavIsVisible] = useState(false);

const navVisibilityHandler = () => {
  setNavIsVisible((curstate) => {
    return !curstate;
  });
};

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className='w-16' src={images.Logo} alt="logo" />
        </div>
        <div>
          {navIsVisible ? (
          <AiOutlineClose 
          className="w-6 h-6" 
          onClick={navVisibilityHandler}
          /> 
          ) : (
          <AiOutlineMenu 
          className='w-6 h-6' onClick={navVisibilityHandler} />
        )}
        </div>
        <div className= {'${navIsVisible ? "right-0" : "-right-full"} flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row top-0 bootom-0 lg:static gap-x-9 items-center'}>
          <ul className='flex gap-x-2 font-semibold'>
            {navItemsInfo.map((item) => (
            <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
          <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all dura'>Sign in</button>
        </div>
      </header>
    </section>
  )
}

export default Header