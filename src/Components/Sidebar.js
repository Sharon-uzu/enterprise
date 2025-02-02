import React, { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import logo from '../images/Ellipse 1 (1).png'
import { SiNginxproxymanager } from "react-icons/si";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoCardOutline } from "react-icons/io5";
import { LuTableProperties } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { MdInventory2 } from "react-icons/md";
import { FaSquarePollVertical } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";
import { TiArrowSortedDown } from "react-icons/ti";



const Sidebar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [sale, setSales] = useState(false);

    const salesOpen= () => {
      setSales(!sale);
    }

    // const [open, setOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const [open1, setOpen1] = useState(false);

    const handleClick = () => {
        setOpen1(!open1);
        setDropdownOpen(!isDropdownOpen);
        // document.body.style.overflow = open1 ? 'auto' : 'hidden'; // Disable or enable scrolling

    }


  return (
    <div>
      
    
      
      <div className='media-bar' onClick={handleClick}>
          {open1 ? (<IoCloseSharp id='close' style={{color:'#05004E'}}/>) : (<FaBars id='bar'  />)}
        </div>
      

      <div className={`side ${open1 ? ' active' : 'inactive'}`}style={{width:isOpen ? "90px" : "270px"}}>

      <div className='bar' >
        
        <div className='logo-div' 
        >
            <img src={logo} onClick={toggle} style={{cursor:'pointer'}} alt='logo'/>
        </div>
        
      
      </div>

     
        

      

      <NavLink to='/dashboard' className='link' activeclassName = 'active'>
      
        <div >
        
          <MdOutlineDashboard className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

        </div>
      
      </NavLink>


      <NavLink to='/sales' className='link' activeclassName = 'active' onClick={salesOpen}>
      
        <div>
        
          <SiNginxproxymanager className='icon' />
          <h4 style={{display:isOpen ? "none" : "block"}}>Sales Management < TiArrowSortedDown className='arr'/></h4>

          {
            sale ? (
            <section>
              <p>Products</p>
              <p>Services</p>
            </section>    
            ): null
          }
          

        </div>
       
      
      </NavLink>

      <NavLink to='/' className='link' activeclassName = 'active'>
      
        <div>
        
          <PiUsersThreeBold className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Staff Management</h4>

        </div>
      
      </NavLink>


      <NavLink to='/' className='link' activeclassName = 'active'>
      
      <div>
      
        <LuTableProperties className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Product Management</h4>

      </div>
    
    </NavLink>


      <NavLink to='/' className='link' activeclassName = 'active'>
      
        <div>
        
          <IoCardOutline className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Payroll Processing</h4>

        </div>
      
      </NavLink>


      <NavLink to='/' className='link' activeclassName = 'active'>
      
        <div>
        
          <BsGraphUp className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Graphical Representation</h4>

        </div>
      
      </NavLink>

      <NavLink to='/invoice' className='link' activeclassName = 'active'>
      
        <div>
        
          <MdInventory2 className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Quote & Invoice</h4>

        </div>
      
      </NavLink>


      <NavLink to='/' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaSquarePollVertical className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Report</h4>

        </div>
      
      </NavLink>


      <NavLink to='/' className='link' activeclassName = 'active'>
      
        <div>
        
          <IoIosSettings className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Settings</h4>

        </div>
      
      </NavLink>



      <NavLink to='/' className='link' activeclassName = 'active'>
      
        <div>
        
          <GrLogout className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Logout</h4>

        </div>
      
      </NavLink>

      
      
      
      </div>


      





    </div>
  )
}

export default Sidebar