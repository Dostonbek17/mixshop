import React,{useState} from 'react';
import './style/main.scss';
import {FiMenu, FiShoppingCart} from 'react-icons/fi';
import {FaRegHeart, FaRegUser} from 'react-icons/fa';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Catigories = () => {
   
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <div className="catigories">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  <FiMenu className="menuIcon"/>   All cotigories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Menu1</DropdownItem>
                    <DropdownItem>Menu1</DropdownItem>
                    <DropdownItem>Menu1</DropdownItem>
                    <DropdownItem id="responsiveIcon">
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
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            <ul className="links">
                <li className="link_item">
                    <a href="#" className="link active">Home</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">New Arrivals</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Trending</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Deals for you</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Discounts</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Weekly offers</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Become a ventor</a>
                </li>
            </ul>
        </div>
    );
};


export default Catigories;