// Sidebar.js

import React, { useState,useContext } from 'react';
import styles from './Sidebar.module.css'; // Import CSS module
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "react-feather"
import { useDispatch } from 'react-redux';
import { AddCurrentPage } from '../../Redux/Features/CurrentPageDataSlice/CurrentPageDataSlice';

import offerContext from '../../context/offerContext'
import Button from 'react-bootstrap/Button';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 


  const [isRummyDropdownOpen, setIsRummyDropdownOpen] = useState(false);
  const [isLudoDropdownOpen, setIsLudoDropdownOpen] = useState(false);
  //const [isPayoutDropdownOpen, setIsPayoutDropdownOpen] = useState(false);
  const [isAdmindropdownOpen, setIsAdminDropdownOpen] = useState(false);
  // const[isRummyDropdownOpen,setIsRummyDropdownOpen]=useState(false);
  // const[isRummyDropdownOpen,setIsRummyDropdownOpen]=useState(false);

  // Function to toggle the dropdown
  const toggleAdminDropdown = () => {
    setIsAdminDropdownOpen(!isAdmindropdownOpen)
  }
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleRummyDropdown = () => {
    setIsRummyDropdownOpen(!isRummyDropdownOpen);
  }
  const toggleLudoDropdown = () => {
    setIsLudoDropdownOpen(!isLudoDropdownOpen);
  }
  // const togglePayoutDropdown = () => {
  //   setIsPayoutDropdownOpen(!isPayoutDropdownOpen);
  // }
  const dispatch=useDispatch();
  const handleClick=(name)=>{
    console.log(name)
    dispatch(AddCurrentPage(name))
  }


  const [isDropdownOpenDeposit, setIsDropdownOpenDeposit] = useState(false);
  const [isDepositDropdownOpen, setIsDepositDropdownOpen] = useState(false);


  const toggleDropdowndeposit = () => {
    setIsDropdownOpenDeposit(!isDropdownOpenDeposit);
  };

  const toggleDepositDropdown = () => {
    setIsDepositDropdownOpen(!isRummyDropdownOpen);
  }


  
  const [isDropdownOpenPayout, setIsDropdownOpenPayout] = useState(false);
  const [isPayoutDropdownOpen, setIsPayoutDropdownOpen] = useState(false);


  const toggleDropdownpayout = () => {
    setIsDropdownOpenPayout(!isDropdownOpenPayout);
  };

  const togglePayoutDropdown = () => {
    setIsPayoutDropdownOpen(!isPayoutDropdownOpen);
  }
  



  const [socialUrl, setSocialUrl] = useState("");

  // Handle hover and click events
  const handleHover = (value) => {
    setSocialUrl(value);
  };

  const context = useContext(offerContext)
  const { adminname,adminEmail,LogoutClick } = context

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/Image/Sidebar/Group 44.png" alt="Dashboard" />
        {/* <div>Games360</div> */}
      </div>
      <div className={styles.adminInfo}>
        <div className={styles.adminInfoleft}>
          <img src="/Image/Sidebar/icon.png" alt="Admin" />
          <div>
            <div>{adminname}</div>
            <div>{adminEmail}</div>
          </div>
        </div>
       
      </div>

      {/*<div className={styles.mainmenu}>Main Menu</div>  ******************************************************************** */}
      <ul className={styles.navList}>
            
        <li className={styles.navlistLi} onMouseEnter={()=>handleHover("adminpage")} onMouseLeave={()=>handleHover("")}>
          <Link to="/adminpage" onClick={() => handleClick('Dashboard')}>
            <li className={styles.pppp}>
            {socialUrl==="adminpage"?<img src={process.env.PUBLIC_URL+'/Image/Sidebar/gdash.png'} alt="Dashboard" />:<img src="/Image/Sidebar/dash.png" alt="Dashboard" />}
              Dashboard
            </li>
          </Link>
        </li>

        {/* ********************************************************************************************* */}
        <li className={styles.navlistLi} onMouseEnter={()=>handleHover("playermanagement")} onMouseLeave={()=>handleHover("")}>
          <Link to="/playermanagement" onClick={() => handleClick('Player Management')}>
            <li className={styles.pppp}>
            {socialUrl==="playermanagement"?<img src={process.env.PUBLIC_URL+"/Image/Sidebar/gplayer.png"} alt="Dashboard" />:<img src="/Image/Sidebar/playerM.png" alt="Dashboard" />}
              Player Management
            </li>
          </Link>
        </li>

        {/* ********************************************************************************************* */}
        <li  className={isDropdownOpen ? styles.dropdownToggle:styles.dropdownToggleFalse}>
          <li onClick={toggleDropdown} className={styles.GameMode} onMouseEnter={()=>handleHover("Games")} onMouseLeave={()=>handleHover("")} >
            <div className={styles.ppp}>
            {socialUrl==="Games"?<img src="/Image/Sidebar/ggame.png" alt="Dashboard" />:<img src="/Image/Sidebar/game.png" alt="Dashboard" />}
              Games
            </div>
            <div className={styles.ppp}>
              {isDropdownOpen ? <ChevronDown /> : <ChevronRight />}
            </div>

          </li>
          {/* Display the dropdown menu when isDropdownOpen is true */}
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {/* *************rummy******************************* */}

              <li className={isRummyDropdownOpen ? styles.dropdownToggle : ''}>
                <li  onClick={toggleRummyDropdown} className={styles.ppppd}>
                  <div className={styles.ppp}>
                    <img src="/Image/Sidebar/user.png" alt="Dashboard" />
                    Black and White
                  </div>

                  <div className={styles.ppp}>
                    {isRummyDropdownOpen ? <ChevronDown /> : <ChevronRight />}
                  </div>

                </li>
                {/* Display the dropdown menu when isRummyDropdownOpen is true */}
                {isRummyDropdownOpen && (
                  <ul className={styles.dropdownMenu} >
                    <li>
                      <Link to="/gamehistory?game=BlackWhite" onClick={() => handleClick('Black And White/Game History')}>
                        <li className={styles.dropdowncontent}>
                          <img src="/Image/Sidebar/user.png" alt="Dashboard" />
                          Game History
                        </li>
                      </Link>
                    </li>
                    <li>
                      <Link to="/setgamelogic?game=BlackWhite"  onClick={() => handleClick('Black And White/Game Logic')}>
                        <li className={styles.dropdowncontent}>
                          <img src="/Image/Sidebar/user.png" alt="Dashboard" />
                          Set game logic
                        </li>
                      </Link>
                    </li>

                  </ul>
                )}
              </li>

              <li className={isRummyDropdownOpen ? styles.dropdownToggle : ''}>
                <li  onClick={toggleRummyDropdown} className={styles.ppppd}>
                  <div className={styles.ppp}>
                    <img src="/Image/Sidebar/user.png" alt="Dashboard" />
                    Aviator
                  </div>

                  <div className={styles.ppp}>
                    {isRummyDropdownOpen ? <ChevronDown /> : <ChevronRight />}
                  </div>

                </li>
                {/* Display the dropdown menu when isRummyDropdownOpen is true */}
                {isRummyDropdownOpen && (
                  <ul className={styles.dropdownMenu} >
                    <li>
                      <Link to="/gamehistory?game=Aviator" onClick={() => handleClick('Aviator/Game History')}>
                        <li className={styles.dropdowncontent}>
                          <img src="/Image/Sidebar/user.png" alt="Dashboard" />
                          Game History
                        </li>
                      </Link>
                    </li>
                    <li>
                      <Link to="/setgamelogic?game=Aviator"  onClick={() => handleClick('Aviator/Game Logic')}>
                        <li className={styles.dropdowncontent}>
                          <img src="/Image/Sidebar/user.png" alt="Dashboard" />
                          Set game logic
                        </li>
                      </Link>
                    </li>

                  </ul>
                )}
              </li> 

            </ul>
          )}
        </li>



        {/* ******************************************************************** */}
        <li className={styles.navlistLi} onMouseEnter={()=>handleHover("bot")} onMouseLeave={()=>handleHover("")}>
          <Link to="/botmanagement" onClick={() => handleClick('Bot')}>
            <li className={styles.pppp}>
            {socialUrl==="bot"?<img src="/Image/Sidebar/gbot.png" alt="Dashboard" />:<img src="/Image/Sidebar/bot.png" alt="Dashboard" />}
              Bot
            </li>
          </Link>
        </li>

                  
        

        <li  className={isDropdownOpenDeposit ? styles.dropdownToggle:styles.dropdownToggleFalse}>
          <li onClick={toggleDropdowndeposit} className={styles.GameMode} onMouseEnter={()=>handleHover("Deposit")} onMouseLeave={()=>handleHover("")} >
            <div className={styles.ppp}>
            {socialUrl==="Deposit"?<img src="/Image/Sidebar/ggame.png" alt="Dashboard" />:<img src="/Image/Sidebar/game.png" alt="Dashboard" />}
              Deposit
            </div>
            <div className={styles.ppp}>
              {isDropdownOpenDeposit ? <ChevronDown /> : <ChevronRight />}
            </div>

          </li>
          {/* Display the dropdown menu when isDropdownOpenDeposit is true */}
          {isDropdownOpenDeposit && (
            <ul className={styles.dropdownMenu}>
              {/* *************rummy******************************* */}
              <li onClick={toggleDepositDropdown} className={isDepositDropdownOpen ? styles.dropdownToggle : ''}>
                  <li className={isDepositDropdownOpen ? styles.dropdownToggle : ''} onMouseEnter={()=>handleHover("Deposit")} onMouseLeave={()=>handleHover("")}>
                    <Link to="/depositmanagement" onClick={() => handleClick('Deposit Management')}>
                      <li className={styles.pppp}>
                      {socialUrl==="Deposit"?<img src="/Image/Sidebar/gbot.png" alt="Dashboard" />:<img src="/Image/Sidebar/bot.png" alt="Dashboard" />}
                        Deposit Pendding
                      </li>
                    </Link>
                </li>
              </li>

              <li onClick={toggleDepositDropdown} className={isDepositDropdownOpen ? styles.dropdownToggle : ''}>
                  <li className={isDepositDropdownOpen ? styles.dropdownToggle : ''} onMouseEnter={()=>handleHover("Deposit")} onMouseLeave={()=>handleHover("")}>
                    <Link to="/depositaccpted" onClick={() => handleClick('Deposit Accepted')}>
                      <li className={styles.pppp}>
                      {socialUrl==="Deposit"?<img src="/Image/Sidebar/gbot.png" alt="Dashboard" />:<img src="/Image/Sidebar/bot.png" alt="Dashboard" />}
                        Deposit Accepted
                      </li>
                    </Link>
                </li>
              </li>

              <li onClick={toggleDepositDropdown} className={isDepositDropdownOpen ? styles.dropdownToggle : ''}>
                  <li className={isDepositDropdownOpen ? styles.dropdownToggle : ''} onMouseEnter={()=>handleHover("Deposit")} onMouseLeave={()=>handleHover("")}>
                    <Link to="/depositrejected" onClick={() => handleClick('Deposit Rejected')}>
                      <li className={styles.pppp}>
                      {socialUrl==="Deposit"?<img src="/Image/Sidebar/gbot.png" alt="Dashboard" />:<img src="/Image/Sidebar/bot.png" alt="Dashboard" />}
                        Deposit Rejected
                      </li>
                    </Link>
                </li>
              </li>
            </ul>
          )}
        </li>


        <li  className={isDropdownOpenPayout ? styles.dropdownToggle:styles.dropdownToggleFalse}>
          <li onClick={toggleDropdownpayout} className={styles.GameMode} onMouseEnter={()=>handleHover("PayOut")} onMouseLeave={()=>handleHover("")} >
            <div className={styles.ppp}>
            {socialUrl==="PayOut"?<img src="/Image/Sidebar/ggame.png" alt="Dashboard" />:<img src="/Image/Sidebar/game.png" alt="Dashboard" />}
              PayOut
            </div>
            <div className={styles.ppp}>
              {isDropdownOpenPayout ? <ChevronDown /> : <ChevronRight />}
            </div>

          </li>
          {/* Display the dropdown menu when isDropdownOpenPayout is true */}
          {isDropdownOpenPayout && (
            <ul className={styles.dropdownMenu}>
              {/* *************rummy******************************* */}
              <li onClick={togglePayoutDropdown} className={isDepositDropdownOpen ? styles.dropdownToggle : ''}>
                  <li className={isDepositDropdownOpen ? styles.dropdownToggle : ''} onMouseEnter={()=>handleHover("PayOut")} onMouseLeave={()=>handleHover("")}>
                    <Link to="/payoutmanagement" onClick={() => handleClick('PayOut Management')}>
                      <li className={styles.pppp}>
                      {socialUrl==="Deposit"?<img src="/Image/Sidebar/gbot.png" alt="Dashboard" />:<img src="/Image/Sidebar/bot.png" alt="Dashboard" />}
                        Payout Pendding
                      </li>
                    </Link>
                </li>
              </li>

              <li onClick={togglePayoutDropdown} className={isDepositDropdownOpen ? styles.dropdownToggle : ''}>
                  <li className={isDepositDropdownOpen ? styles.dropdownToggle : ''} onMouseEnter={()=>handleHover("PayOut")} onMouseLeave={()=>handleHover("")}>
                    <Link to="/payoutaccpted" onClick={() => handleClick('PayOut Accepted')}>
                      <li className={styles.pppp}>
                      {socialUrl==="Deposit"?<img src="/Image/Sidebar/gbot.png" alt="Dashboard" />:<img src="/Image/Sidebar/bot.png" alt="Dashboard" />}
                        Payout Accepted
                      </li>
                    </Link>
                </li>
              </li>

              <li onClick={togglePayoutDropdown} className={isDepositDropdownOpen ? styles.dropdownToggle : ''}>
                  <li className={isDepositDropdownOpen ? styles.dropdownToggle : ''} onMouseEnter={()=>handleHover("PayOut")} onMouseLeave={()=>handleHover("")}>
                    <Link to="/payoutrejected" onClick={() => handleClick('PayOut Rejected')}>
                      <li className={styles.pppp}>
                      {socialUrl==="Deposit"?<img src="/Image/Sidebar/gbot.png" alt="Dashboard" />:<img src="/Image/Sidebar/bot.png" alt="Dashboard" />}
                        Payout Rejected
                      </li>
                    </Link>
                </li>
              </li>
            </ul>
          )}
        </li>

        {/* ******************************************************************** 
        <li className={styles.navlistLi} onMouseEnter={()=>handleHover("aUserDetails")} onMouseLeave={()=>handleHover("")}>
          <Link to="/aUserDetails" onClick={() => handleClick('aUserDetails')}>
            <li className={styles.pppp}>
            {socialUrl==="aUserDetails"?<img src="/Image/Sidebar/guser.png" alt="Dashboard" />:<img src="/Image/Sidebar/user.png" alt="Dashboard" />}
              aUserDetails
            </li>
          </Link>
        </li>
        */}
        {/* ********************************************************************* */}
        <li className={styles.navlistLi} onMouseEnter={()=>handleHover("SocialUrl")} onMouseLeave={()=>handleHover("")}>
          <Link to="/socialURL" onClick={() => handleClick('Social Url')} >
            <li className={styles.pppp}>
              {socialUrl==="SocialUrl"?<img src="/Image/Sidebar/gsocal.png" alt="Dashboard" />:<img src="/Image/Sidebar/social.png" alt="Dashboard" />}
         
              Social Url
            </li>
          </Link>
        </li>

        {/* ********************************************************** 
        <li className={styles.navlistLi} onMouseEnter={()=>handleHover("playerregistration")} onMouseLeave={()=>handleHover("")}>
          <Link to="/playerregistration" onClick={() => handleClick('Player Registration')}>
            <li className={styles.pppp}>
            {socialUrl==="playerregistration"?<img src="/Image/Sidebar/gsocal.png" alt="Dashboard" />:<img src="/Image/Sidebar/social.png" alt="Dashboard" />}

              Player Registration
            </li>
          </Link>
        </li>
*/}
        {/* ********************************************************************* */}
        <li className={styles.navlistLi} onMouseEnter={()=>handleHover("noticeText")} onMouseLeave={()=>handleHover("")}>
          <Link to="/noticeText" onClick={() => handleClick('Notice text')}>
            <li className={styles.pppp}>
            {socialUrl==="noticeText"?<img src="/Image/Sidebar/gmess.png" alt="Dashboard" />:<img src="/Image/Sidebar/mess.png" alt="Dashboard" />}

              Notice text
            </li>
          </Link>
        </li>

        {/* ***************************************************************** */}


        {/* *************************************************************************** */}
       <li className={styles.navlistLi} onMouseEnter={()=>handleHover("mentenance")} onMouseLeave={()=>handleHover("")}>
          <Link to="/mentenance" onClick={() => handleClick('Mentenance')}>
            <li className={styles.pppp}>
            {socialUrl==="mentenance"?<img src="/Image/Sidebar/gsetting.png" alt="Dashboard" />:<img src="/Image/Sidebar/setting.png" alt="Dashboard" />}
              Mentenance
            </li>
          </Link>
        </li>
        {/* ********************************************************************** */}
       <li className={styles.navlistLi} onMouseEnter={()=>handleHover("notification")} onMouseLeave={()=>handleHover("")}>
          <Link to="/notification" onClick={() => handleClick('Notification')}>
            <li className={styles.pppp}>
            {socialUrl==="notification"?<img src="/Image/Sidebar/gmess.png" alt="Dashboard" />:<img src="/Image/Sidebar/mess.png" alt="Dashboard" />}
              Notification
            </li>
          </Link>
        </li>
        {/* ************************************************************************* */}
       <li className={styles.navlistLi} onMouseEnter={()=>handleHover("banner")} onMouseLeave={()=>handleHover("")}>
          <Link to="/banner" onClick={() => handleClick('Banner')}>
            <li className={styles.pppp}>
            {socialUrl==="banner"?<img src="/Image/Sidebar/guser.png" alt="Dashboard" />:<img src="/Image/Sidebar/user.png" alt="Dashboard" />}
              Banner
            </li>
          </Link>
        </li>

       {/* <div className={styles.mainmenu}>Others</div>
         **************************************************************************** */}
       <li className={styles.navlistLi} onMouseEnter={()=>handleHover("settings")} onMouseLeave={()=>handleHover("")}>
          <Link to="/settings" onClick={() => handleClick('Settings')}>
            <li className={styles.pppp}>
            {socialUrl==="settings"?<img src="/Image/Sidebar/gsetting.png" alt="Dashboard" />:<img src="/Image/Sidebar/setting.png" alt="Dashboard" />}
              Settings
            </li>
          </Link>
        </li>


        
      </ul>
    </div>
  );
}

export default Sidebar;
