import React from 'react';
import './style/main.scss';
import {FaSearch, FaRegHeart, FaRegUser} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi';
import navLogo from '../images/logo.png';
import logo1 from '../images/logo1.png';
import ResponsiveModal from './ResponsiveModal';

const Nav = () => {
    return (
        <>
           <nav className="navigation ">
               <a href="#" className="navLogo">
                 <img src={navLogo} alt="Nav Logo" />&<img src={logo1} alt="nike" />
               </a>
             <ResponsiveModal />
               <div className="searchSec">
                   <form>
                       <input type="text" className="searchInput" placeholder="Search For Products, Brands & Categories" />
                       <button type="button" className="searchBtn">
                          <FaSearch />
                       </button>
                   </form>
               </div>
               <div className="icons">
                   <a href="#" className="bolimlar">
                       <FaRegHeart/>
                   </a>
                   <a href="#" className="bolimlar">
                       <FaRegUser />
                   </a>
                   <a href="#" className="bolimlar">
                       <FiShoppingCart />
                   </a>
               </div>
           </nav>
        </>
    );
};


export default Nav;