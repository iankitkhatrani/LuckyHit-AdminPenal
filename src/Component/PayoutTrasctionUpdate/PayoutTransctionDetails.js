import React, {useState, useContext,useEffect } from 'react'
import styles from './PayoutTransctionDetails.module.css';
import { useNavigate,useLocation } from 'react-router-dom';
import offerContext from '../../context/offerContext'

const PayoutTransctionDetails = () => {

    const location = useLocation();
    console.log("location ", location)
    let depositeData =  location.state
    const navigate = useNavigate();
    const navigateToContacts = () => {
        // 👇️ navigate to /contacts 
        navigate('/payoutmanagement');
    };

    const context = useContext(offerContext)
    const { PayoutUpdate,UploadScreenshortPayout,host } = context
    let [userInfo,SetuserInfo] = useState({
        trnsId:depositeData.trnsId,
        screenshort: depositeData.screenshort || "",
        approve: depositeData.approve || 0,
        reject: depositeData.reject || 0,
        status: depositeData.status || 0
    })

    useEffect(() => {
        
        // const submitdata = async () => {
        //     let depositeData = await DepositeData(userID)
        //     console.log("User Effect :::::::::::::::::::::::::",depositeData)
        //     await SetuserInfo({
        //         userId:userID,
        //         screenshort: depositeData.screenshort || "",
        //         approve: depositeData.approve || 0,
        //         reject: depositeData.reject || 0,
        //         status: depositeData.status || 0
        //     })
        //     console.log("userInfo ",userInfo)
        // }
        // submitdata()
    }, []);
    
    const handleChange = (event) => {
        const { name, value } = event.target;
            console.log("NAME :::::::::::::::::",value)
        SetuserInfo({
            ...userInfo,
            [name]: value,
        });


        console.log("handleChange ::::::::::::::::::::::",userInfo)

    };

    const OnChange = (event) => {
        let { name, value } = event.target;
    
        SetuserInfo({
            ...userInfo,
            [name]: value,
        });


        console.log("handleChange ::::::::::::::::::::::",userInfo)

    };

    

    const handleImage = async (e) =>{
        console.log("Upload image ",e.target.files[0])
        //this.setState({image_url:e.target.files[0]})
        const value = await UploadScreenshortPayout(e.target.files[0])

         SetuserInfo({
            ...userInfo,
            [e.target.name]: value,
        });

        console.log("userInfo handleImage KKKKKKKKKKKKKKKKKKKKKKKKKKK",userInfo)

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // You can handle the form submission here
        // This example just logs the data to the console

        console.log("userInfo ",userInfo)

        let res = await PayoutUpdate(userInfo)

        console.log("REsponce ::::::::::::::::::::::",res)

        if(res.status == "ok"){
            navigateToContacts()
        }else{
            alert("Error Please enter")
        }

        console.log(userInfo);

       

    };


    return (
        <>
            
        <div className={styles.registrationForm}>
        <div className={styles.PlayerRegistration}>
            <div className={styles.d}>
                <h2>Deposit Translation Update</h2>
            </div>
            <div className={styles.p}>
                * Field are required
            </div>
        </div>
            <form onSubmit={handleSubmit}>
                
                
                <div className={styles.rowwise}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="approve">Approve *</label>
                        <input
                            placeholder="Enter Approve"
                            type="text"
                            name="approve"
                            id="approve"
                            value={userInfo.approve}
                            onChange={handleChange}
                            
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="reject">Reject *</label>
                        <input
                            placeholder="India"
                            type="reject"
                            name="reject"
                            id="reject"
                            value={userInfo.reject}
                            onChange={handleChange}
                            
                        />
                    </div>
                </div>

                <div className={styles.rowwise}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="screenshort">Proof Of Transction *</label>
                        <input
                            placeholder="Select Profile"
                            type="file"
                            name="screenshort"
                            id="screenshort"
                            onChange={handleImage}
                            
                        />

                    </div>
                    <div className={styles.inputGroup}>
                    <img className={styles.ImageTag}  src={host+"/"+userInfo.screenshort} />
                    </div>
                </div>


                
                <div className={styles.rowwise}>
                    
                    <div>
                    <label htmlFor="Status">Status *</label>
                    <label>
                        <input
                        type="radio"
                        value={"1"}
                        name="status"
                        checked={userInfo.status == "1"}
                        onChange={OnChange}
                        />
                        Active
                    </label>
                    <label>
                        <input
                        type="radio"
                        value={"0"}
                        name="status"
                        checked={userInfo.status == "0"}
                        onChange={OnChange}
                        />
                        Inactive
                    </label>
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    </>
    )
}

export default PayoutTransctionDetails