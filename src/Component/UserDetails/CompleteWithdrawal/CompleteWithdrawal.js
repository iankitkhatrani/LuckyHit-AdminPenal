import React, { useState } from 'react';
import styles from './CompleteWithdrawal.module.css'; // Import the CSS module

const CompleteWithdrawal = (props) => {
    const [selectedClub, setSelectedClub] = useState('');
    const [searchPhoneNumber, setSearchPhoneNumber] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    let gameHistoryData  = props.completeWithdrawalData
   
    const filteredData = gameHistoryData.filter((entry) => {
        // Filter by selected club
        if (selectedClub && entry.Club !== selectedClub) {
            return false;
        }

        // Filter by phone number
        if (searchPhoneNumber && !entry.PhoneNumber.includes(searchPhoneNumber)) {
            return false;
        }

        return true; // Include all entries matching the filters
    });

    // Calculate the number of pages based on entriesPerPage
    const totalPages = Math.ceil(filteredData.length / entriesPerPage);

    // Calculate the range for the current page
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;

    // Filter data for the current page
    const dataOnCurrentPage = filteredData.slice(startIndex, endIndex);


   
    return (
        <div className={styles.rouletteHistory}>
            <h1>Complete Withdrawal</h1>

            <div className={styles.filters}>
                <div className={styles.filtersactions}>
                    <div className={styles.filterPerpage}>
                        <div>Show  </div>
                        <div>
                            <input
                                type="number"
                                placeholder="Entries per page"
                                value={entriesPerPage}
                                onChange={(e) => setEntriesPerPage(e.target.value)}
                            />
                        </div>
                        <div> entries</div>
                    </div>
                    <div className={styles.filterButton}>
                        <button >PDF</button>
                        <button>Excel</button>
                        <button onClick={() => window.print()}>Print</button>
                    </div>
                </div>
                <div className={styles.filterssearch}>
                    <input
                        type="text"
                        placeholder="Search by Phone Number"
                        value={searchPhoneNumber}
                        onChange={(e) => setSearchPhoneNumber(e.target.value)}
                    />
                </div>

            </div>
            <table className={styles.historyTable}>
                <thead>
                    <tr>
                        <th className={styles.tableHeader}>SrNo</th>
                        <th className={styles.tableHeader}>DateTime</th>
                        <th className={styles.tableHeader}>Name</th>
                        <th className={styles.tableHeader}>Previous Winning Chips</th>
                        <th className={styles.tableHeader}>Withdrawal</th>
                        <th className={styles.tableHeader}>Current Winning chips</th>
                        <th className={styles.tableHeader}>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {dataOnCurrentPage.map((entry, index) => (
                        (index%2 == 1) ? 
                            <tr key={entry.SrNo} className={styles['row-odd']}>
                                <td className={styles.tableData}>{startIndex + index + 1}</td>
                                <td className={styles.tableData}>{entry.createdAt}</td>
                                <td className={styles.tableData}>{entry.uniqueId}</td>
                                <td className={styles.tableData}>{entry.oppWinningChips}</td>
                                <td className={styles.tableData}>{entry.trnxAmount}</td>
                                <td className={styles.tableData}>{entry.totalBucket}</td>
                                <td className={styles.tableData}>{entry.trnxTypeTxt}</td>
                            </tr> : <tr key={entry.SrNo}>
                                        <td className={styles.tableData}>{startIndex + index + 1}</td>
                                        <td className={styles.tableData}>{entry.createdAt}</td>
                                        <td className={styles.tableData}>{entry.uniqueId}</td>
                                        <td className={styles.tableData}>{entry.oppWinningChips}</td>
                                        <td className={styles.tableData}>{entry.trnxAmount}</td>
                                        <td className={styles.tableData}>{entry.totalBucket}</td>
                                        <td className={styles.tableData}>{entry.trnxTypeTxt}</td>
                                    </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default CompleteWithdrawal;


