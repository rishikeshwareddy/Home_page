import React,{useState} from 'react';
import "./navbar.css";
import {FiMenu,FiX} from "react-icons/fi";
const Navbar = ({NavbarLinks}) => {

  const[menuClicked,setMenuClicked]=useState(false);
  const toggleMenuClick=()=>{
    setMenuClicked(!menuClicked);
  };
  return (
    <nav className='navbar'>
    <span className='navbar_logo'>wanderwise</span>
    {menuClicked?<FiMenu size={25} className='navbar_menu' onClick={toggleMenuClick}/>:
    <FiX size={25} className='navbar_menu' onClick={toggleMenuClick}/>}
      <ul className={menuClicked?"navbar_list":"navbar_list navbar_list_active"}>
        {NavbarLinks.map((items)=>{
            return (
                <li className='navbar_item' key={items.title}>
                    <a className='navbar_link' href={items.url}>
                        {items.title}
                    </a>
                </li>
            )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
