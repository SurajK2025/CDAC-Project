import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import { navigate, useNavigate } from "react-router-dom";

const PaymentsPage = (props) => {

    return (
        <div className='paymentsSection'>
            <div className='paymentsContainer'>
                <img src='Images/paymentQR.jpg'></img>
                <h1>Payment Amount: {}</h1>
                <input type='number' name='utrno' placeholder='UTR Number' required />
            </div>
        </div>
    );
}
export default PaymentsPage;