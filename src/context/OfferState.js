
import offerContext from "./offerContext"
import React, { useState,useContext} from 'react';

const host = "http://16.170.158.18:2828";//"http://192.168.0.203:2828"//
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ5Y2NlM2JhNDA4YTJlMjg3ZjJlYzUiLCJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQHNpc3VnYW16LmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHhZZzVMUlNRRWxiNENOZnVocjdncmUyUjNMOUQ5eDhaWmc0c0QxSW9uY1N6ZWFTSHgzMTIuIiwiY3JlYXRlZEF0IjoiMjAyMy0xMS0wN1QwNTozNjozNS42NjBaIiwibW9kaWZpZWRBdCI6IjIwMjMtMTEtMDdUMDU6MzY6MzUuNjYwWiIsImlhdCI6MTY5OTMzNTQxMywiZXhwIjoxNjk5OTQwMjEzfQ.NrLsWSnyD09P3h30rsng_R3bygn3TsKl8nXyD7qom4c";

const OfferState = (props) => {
    console.log("props.adminname ",props.adminname)
    console.log("props.adminname Email ",props.adminname)

    
    const [adminname, setAdminname] = useState(props.adminname);
    const [adminEmail, setAdminEmail] = useState(props.adminEmail);
    const [token, setToken] = useState(props.tokendata);



    const dashboardData = async () => {
        try{
            console.log("${host}/admin/dashboard",`${host}/admin/dashboard`)
            const response = await fetch(`${host}/admin/dashboard`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from ::::...", json)
            return await json

        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const latatestUser = async () => {
        try{
            console.log("${host}/admin/latatestUser",`${host}/admin/dashboard/latatestUser`)
            const response = await fetch(`${host}/admin/dashboard/latatestUser`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.RecentUser


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    // ========= User Details =================

    const PlayerList = async () => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/user/UserList`)
            const response = await fetch(`${host}/admin/user/UserList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.userList


        }catch(e){
            console.log("e :" ,e)
        }
    } 



    const PlayerAdd = async (data) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/user/AddUser`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify(data)
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const PlayerDelete = async (userId) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/user/DeleteUser/`+userId, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    
    const PlayerData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/user/UserData`)
            const response = await fetch(`${host}/admin/user/UserData?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.userInfo


        }catch(e){
            console.log("e :" ,e)
        }
    } 
    // History 
    const GetRouletteHistoryData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/UserData`,userId)
            const response = await fetch(`${host}/admin/userhistory/rouletteHistory?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.rouletteHistoryData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GetCompleteWithdrawalData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/completeWithdrawal`,userId)
            const response = await fetch(`${host}/admin/userhistory/completeWithdrawal?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.completeWithdrawalData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GetCompleteDespositeData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/completeDeposite`,userId)
            const response = await fetch(`${host}/admin/userhistory/completeDeposite?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.completeDepositeData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GetRegisterReferralBonusData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/registerRaferralBonus`,userId)
            const response = await fetch(`${host}/admin/userhistory/registerRaferralBonus?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.registerRaferralBonusData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GetMyReferralData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/userhistory/myRaferrals`,userId)
            const response = await fetch(`${host}/admin/userhistory/myRaferrals?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :GetRouletteHistoryData :::...", json)
            return await json.myRaferralsData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    //======================
    // game History 

    const RummyGameHistory = async () => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/games/rummyGameHistory`)
            const response = await fetch(`${host}/admin/games/rummyGameHistory`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.gameHistoryData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const LudoGameHistory = async () => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/games/ludoGameHistory`)
            const response = await fetch(`${host}/admin/games/ludoGameHistory`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.gameHistoryData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const GameLogicSet = async (data) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/games/gameLogicSet`)
            const response = await fetch(`${host}/admin/games/gameLogicSet`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify(data)   
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    //================= socail List 

    const SocailURLsList = async () => {
        try{
            console.log("PlayerList :::::::",`${host}//admin/social/socialURLsList`)
            const response = await fetch(`${host}/admin/social/socialURLsList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.socialURLs


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const SocailURLsAdd = async (data) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/social/socialurl`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify(data)
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const DeleteSocailURLs = async (socialid) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/social/socialurldelete/`+socialid, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    //=============================
    
     //================= Notice  List 

     const NoticeTextList = async () => {
        try{
            console.log("PlayerList :::::::",`${host}//admin/noticetext/noticeTextList`)
            const response = await fetch(`${host}/admin/noticetext/noticeTextList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.noticeText


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const NoticeTextLsAdd = async (data) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/noticetext/noticeText`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify(data)
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const DeleteNoticeText = async (id) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/noticetext/noticedelete/`+id, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    //=============================
    
     //================= gamementenance  List 

     const GetMentenance = async () => {
        try{
            console.log("PlayerList :::::::",`${host}//admin/gamementenance/getMentenanceStatus`)
            const response = await fetch(`${host}/admin/gamementenance/getMentenanceStatus`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const MentenanceUpdate = async (data) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/gamementenance/mentenanceStatusUpdate`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify({flag:data})
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

   

    //=============================
    
    
     //================= notification  List 

     const SendPushnotification = async (data) => {
        try{
            console.log("PlayerList :::::::",`${host}//admin/notification/sendNotification`)
            const response = await fetch(`${host}/admin/notification/sendNotification`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify(data)
            }).then(data => data.json())

            const json =  response
            console.log("data api from :SendPushnotification :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 
    //=================================================

    //================= Banner   List 

    const BannerList = async () => {
        try{
            console.log("PlayerList :::::::",`${host}//admin/banner/bannerList`)
            const response = await fetch(`${host}/admin/banner/bannerList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.bannerListData


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const BannerAdd = async (data) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/banner/bannerAdd`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify(data)
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const UploadBanner = async (data) => {
        try{
            console.log("PlayerList :::::::",host)

            const formData = new FormData();
            formData.append("image", data);

            const response = await fetch(`${host}/admin/banner/BannerUpload`, {
                method: 'POST',
                headers: {
                    'token':token
                },
                body:formData
            }).then(d => d.json()) 

            console.log("response ",response)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            if(json.flag){
                return json.path
            }else{
                return ""
            }

        }catch(e){
            console.log("e :" ,e)
        }
    } 


    const DeleteBanner = async (id) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/banner/bannerdelete/`+id, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    //=============================


     // ========= Bot Details =================

     const BotList = async () => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/bot/UserList`)
            const response = await fetch(`${host}/admin/bot/BotList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.userList


        }catch(e){
            console.log("e :" ,e)
        }
    } 



    const BotAdd = async (data) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/bot/BotAdd`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify(data)
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const UploadProfile = async (data) => {
        try{
            console.log("PlayerList :::::::",host)

            const formData = new FormData();
            formData.append("image", data);

            const response = await fetch(`${host}/admin/bot/ProfileUpload`, {
                method: 'POST',
                headers: {
                    'token':token
                },
                body:formData
            }).then(d => d.json()) 

            console.log("response ",response)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            if(json.flag){
                return json.path
            }else{
                return ""
            }

        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const BotDelete = async (userId) => {
        try{
            console.log("PlayerList :::::::",host)
            const response = await fetch(`${host}/admin/bot/BotDelete/`+userId, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(d => d)

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    const BotData = async (userId) => {
        try{
            console.log("PlayerList :::::::",`${host}/admin/bot/BotData`)
            const response = await fetch(`${host}/admin/bot/BotData?userId=`+userId, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                }
            }).then(data => data.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json.userInfo


        }catch(e){
            console.log("e :" ,e)
        }
    }
    
    const BotUpdate = async (data) => {
        try{
            console.log("PlayerList :::::::",host)
            console.log("BotUpdate :::::::",data)

            const response = await fetch(`${host}/admin/bot/BotUpdate`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token':token
                },
                body:JSON.stringify(data)
            }).then(d => d.json())

            const json =  response
            console.log("data api from :latatestUser :::...", json)
            return await json


        }catch(e){
            console.log("e :" ,e)
        }
    } 

    //======================================================================================
    return (
        <offerContext.Provider value={{
            host,
            adminname,adminEmail,dashboardData,latatestUser,PlayerList,PlayerData,
            PlayerAdd,PlayerDelete,RummyGameHistory,LudoGameHistory,GameLogicSet,GetRouletteHistoryData,GetCompleteWithdrawalData,
            GetCompleteDespositeData,GetRegisterReferralBonusData,GetMyReferralData,
            SocailURLsList,SocailURLsAdd,DeleteSocailURLs,
            NoticeTextList,NoticeTextLsAdd,DeleteNoticeText,
            GetMentenance,MentenanceUpdate,
            SendPushnotification,
            BannerList,BannerAdd,DeleteBanner,UploadBanner,
            BotList,BotAdd,BotDelete,BotData,UploadProfile,BotUpdate
            }}>
            {props.children}
        </offerContext.Provider>)

}

export default OfferState;