// Navbar.js
import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS module
import { ChevronDown, ChevronRight } from "react-feather"
import { useSelector } from 'react-redux';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmindropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleAdminDropdown = () => {
    setIsAdminDropdownOpen(!isAdmindropdownOpen)
  }
  const activePage = useSelector((state) => state.newCurrentPage)
  console.log(activePage)
  return (
    <nav className={styles.navbar}>
      <div className={styles.toggleButton} onClick={toggleNavbar}>
        <img className={styles.toggleButton1} src="/Image/Sidebar/ham.png" alt="User" />
      </div>
      <div className={styles.adminInfoActivepage}>{activePage.value}</div>
      <div >
        <form className={styles.navbarSearch}>
          <input className={styles.navbarSearchInput} type="text" placeholder='Search...' />
          <img className={styles.navbarSearchIcon} src="/Image/Sidebar/search.png" alt="User" />
        </form>
      </div>
      <div className={styles.navbarNotification}>
        <img className={styles.navbarNotificationIcon} src="/Image/Sidebar/Noti.png" alt="User" />
        <div className={styles.notificationBadge}>8</div>
      </div>
      <div className={styles.navbarNotification}>
        <img className={styles.navbarNotificationIcon} src="/Image/Sidebar/mail.png" alt="User" />
      </div>
      <div className={styles.navbarNotification}>
        <img className={styles.navbarNotificationIcon} src="/Image/Sidebar/cal.png" alt="User" />
      </div>
      <div className={styles.adminInfo}>
        <div className={styles.adminInfoleft}>
          <img src="/Image/Sidebar/icon.png" alt="Admin" />
          <div>
            <div>Admin</div>
            <div>Admin1</div>
          </div>
        </div>
        <div onClick={toggleAdminDropdown}>
          <div className={styles.ppp}>
            {isAdmindropdownOpen ? <ChevronDown /> : <ChevronRight />}
          </div>
          {isAdmindropdownOpen && (<div className={styles.AdmindropdownMenu} >
            <div className={styles.AdmindropdownMenuOut}>Log Out</div>
            <div className={styles.AdmindropdownMenuIn}>Login</div>
          </div>)}

        </div>


      </div>
    </nav>
  );
}

export default Navbar;
