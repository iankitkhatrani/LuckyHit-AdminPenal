import React from 'react'
import styles from './Dashbord.module.css'; // Import CSS module
import Navbar from '../Component/Navbar/Navbar';
import Sidebar from '../Component/Sidebar/Sidebar';
import AdminPage from '../Component/AdminPage/AdminPage';
import PlayerManagement from '../Component/PlayerManagement/PlayerManagement';
import BotManagement from '../Component/BotManagement/BotManagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Component/Login/Login';
import SetGameLogic from '../Component/SetGameLogic/SetGameLogic';
import GameHistory from '../Component/GameHistory/GameHistory';
import PlayerRegistration from '../Component/PlayerRegistration/PlayerRegistration';
import BotRegistration from '../Component/BotRegistration/BotRegistration';

import AUserDetails from '../Component/UserDetails/AUserDetails/AUserDetails';
import ABotDetails from '../Component/UserDetails/ABotDetails/ABotDetails';

import SocialURL from '../Component/SocialURL/SocialURL';
import NoticeText from '../Component/NoticeText/NoticeText';
import Mentenance from '../Component/Mentenance/Mentenance';
import Notification from '../Component/Notification/Notification';
import Banner from '../Component/Banner/Banner';
import Settings from '../Component/Settings/Settings';
import DepositManagement from '../Component/DepositManagement/DepositManagement'
import DepositAccpted from '../Component/DepositAccpted/DepositAccpted'
import DepositRejected from '../Component/DepositRejected/DepositRejected'

import PayoutManagement from '../Component/PayoutManagement/PayoutManagement'
import PayoutAccpted from '../Component/PayoutAccpted/PayoutAccpted'
import PayoutRejected from '../Component/PayoutRejected/PayoutRejected'
import TrasctionUpdate from '../Component/TrasctionUpdate/TransctionDetails'
import PayoutTrasctionUpdate from '../Component/PayoutTrasctionUpdate/PayoutTransctionDetails'


const Dashbord = () => {
    return (
        <Router>
            <div>
               
                    <div className={styles.layout}>
                        <div className={styles.left}>
                            <Sidebar />
                        </div>
                        <div className={styles.right}>
                        <Navbar />
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/" element={<AdminPage />} />
                                <Route path="/adminpage" element={<AdminPage />} />
                                <Route path="/playermanagement" element={<PlayerManagement />} />
                                <Route path="/botmanagement" element={<BotManagement />} />
                                <Route path="/setgamelogic" element={<SetGameLogic />} />
                                <Route path="/gamehistory" element={<GameHistory />} />
                                <Route path="/playerregistration" element={<PlayerRegistration />} />
                                <Route path="/aUserDetails" element={<AUserDetails />} />
                                <Route path="/socialURL" element={<SocialURL />} />
                                <Route path="/noticeText" element={<NoticeText />} />
                                <Route path="/mentenance" element={<Mentenance />} />
                                <Route path="/notification" element={<Notification />} />
                                <Route path="/banner" element={<Banner />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/aBotDetails" element={<ABotDetails />} />
                                <Route path="/botregistration" element={<BotRegistration />} />
                                <Route path="/depositmanagement" element={<DepositManagement />} />
                                <Route path="/depositaccpted" element={<DepositAccpted />} />
                                <Route path="/depositrejected" element={<DepositRejected />} />

                                <Route path="/payoutmanagement" element={<PayoutManagement />} />
                                <Route path="/payoutaccpted" element={<PayoutAccpted />} />
                                <Route path="/payoutrejected" element={<PayoutRejected />} />

                                <Route path="/trasctionupdate" element={<TrasctionUpdate />} />

                                <Route path="/payouttrasctionupdate" element={<PayoutTrasctionUpdate />} />



                                

                            </Routes>
                        </div>
                    </div>
             
               
            </div>
        </Router>
    )
}

export default Dashbord