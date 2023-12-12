import React, { useState,useContext,useEffect } from 'react';
import styles from './DepositManagement.module.css';
import {useNavigate} from 'react-router-dom';
import offerContext from '../../context/offerContext'



const recordsPerPage = 5;

const DepositManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  let [userData,setUserData] = useState([]);

  const context = useContext(offerContext)
  console.log("Contect ",context)
  const { DepositeList,DepositeDelete,host } = context
  
  useEffect( () => {
    const submitdata = async () => {
    
      setUserData(await DepositeList())

  }

  submitdata()
  },[]);

  // Filter the user data based on date range and search term
  const filteredUsers = userData.filter((user) => {
    const registrationDate = new Date(user.createdAt);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    return (
      (!from || registrationDate >= from) &&
      (!to || registrationDate <= to) &&
      (searchTerm === '' ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.mobileNumber.includes(searchTerm))
    );
  });

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  // Filter the user data for the current page
  const usersOnCurrentPage = filteredUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const resetDate=()=>{
    setFromDate("")
    setToDate("")
  }
  const navigate = useNavigate();
  const navigateToContacts = (trnsId,approve,reject,status,screenshort) => {
    // 👇️ navigate to /contacts 
    console.log("User ID  User Bot ", {trnsId,approve,reject,status,screenshort})

    navigate('/trasctionupdate', {state:{trnsId,approve,reject,status,screenshort}});
  };

  const DeleteUser = async (userid) =>{
    await DepositeDelete(userid)

    setUserData(await DepositeList())
  }
  

  return (
    <div className={styles['player-management-container']}>

      <div className={styles.filters}>
       <div className={styles.filters}>
       <input
          type="date"
          placeholder="From Date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="To Date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          style={{marginLeft: "1rem"}}
        />
        <button className={styles.resetbtn} onClick={resetDate}>Reset</button>

       </div>
        <div>
        <input
          type="text"
          placeholder="Search by Username/Mobile Number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Deposit Date</th>
            <th>Image</th>
            <th>deposit Amount</th>
            <th>Bank A/c.</th>
            <th>IFSC Code</th>
            <th>Acount Name</th>
            <th>UPI Id</th>
            <th>Payment Mode</th>
            <th>Status</th>
            <th>Approve</th>
            <th>Reject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersOnCurrentPage.map((user,index) => (
            
            (index%2 == 1) ? 
        

              <tr key={user._id}  className={styles['row-odd']}>
              <td>{user._id}</td>
              <td> {user.name} </td>
              <td>{user.email}</td>
              <td>{user.mobileno}</td>
              <td>{user.dateOfdeposit}</td>
              <td><img className={styles.ImagesIcon} src={host+"/"+user.screenshort} /></td>
              <td>{user.depositamount}</td>
              <td>{user.bankAc}</td>
              <td>{user.IFSCcode}</td>
              <td>{user.acname}</td>
              <td>{user.upi_id}</td>
              <td>{user.paymentmode}</td>
              <td>{user.status}</td>
              <td>{user.approve}</td>
              <td>{user.reject}</td>
              <td>
                  <button className={styles['action-button1']} onClick={ () => navigateToContacts(user._id,user.approve,user.reject,user.status,user.screenshort) } >
                    <img className={styles.actionButtonIcon} src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png" />
                  </button>
                  <button className={styles['action-button2']} onClick={ () => DeleteUser(user._id) }>
                  <img className={styles.actionButtonIcon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewqWoGi9-fXmd6_SKqNkg6-kmo7VctpXAhgBiKaliSA&s" />
                    
                  </button>
                </td>
              </tr> : <tr key={user._id}  >
              <td>{user._id}</td>
              <td> {user.name} </td>
              <td>{user.email}</td>
              <td>{user.mobileno}</td>
              <td>{user.dateOfdeposit}</td>
              <td><img className={styles.ImagesIcon} src={host+"/"+user.screenshort} /></td>
              <td>{user.depositamount}</td>
              <td>{user.bankAc}</td>
              <td>{user.IFSCcode}</td>
              <td>{user.acname}</td>
              <td>{user.upi_id}</td>
              <td>{user.paymentmode}</td>
              <td>{user.status}</td>
              <td>{user.approve}</td>
              <td>{user.reject}</td>
              <td>
                <button className={styles['action-button1']} onClick={ () => navigateToContacts(user._id,user.approve,user.reject,user.status,user.screenshort) } >
                  <img className={styles.actionButtonIcon} src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png" />
                </button>
                <button className={styles['action-button2']} onClick={ () => DeleteUser(user._id) } >
                <img className={styles.actionButtonIcon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewqWoGi9-fXmd6_SKqNkg6-kmo7VctpXAhgBiKaliSA&s" />
                  
                </button>
              </td>
            </tr>

            
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span style={{margin: "0 1rem"}}>{currentPage} / {totalPages}</span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DepositManagement;