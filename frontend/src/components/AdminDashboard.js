import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const AdminDashboard = (props) => {

    const [apiData, setApiData] = useState([]);
    useEffect(
        () => {
            axios.get('http://localhost:8080/bitcode/courses')
                .then(response => { setApiData(response.data) });
        }
    )

    var courseCards = apiData.map(obj => {
        return (
            <div class="courseCardContainer">
                <div class="courseCard">
                    <h3>{obj.courseName}</h3>
                    <p>{obj.author}</p>
                    <Link to="/" class="buy">Go To Course</Link>
                </div>
            </div>
        );
    });

    return (
        <div class="profileContainer">
            <div class="profileSidebar">
                <ol>
                    <li><Link to="/admin/courses" class="links">Courses</Link></li>
                    <li><Link to="/admin/payments" class="links">Payments</Link></li>
                    <li><Link to="/logout" class="links">Logout</Link></li> : null
                </ol>
            </div>
            <div class="profileMainDiv">
                <div class="courseContainer">
                    <h3>Enrolled Courses</h3>
                    <div class="courseCardContainer">
                        <div class="courseCard">
                            <h3>MySQL</h3>
                            <p>By Sir Nishat Kumar</p>
                            <Link to="/" class="buy">Go To Course</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default AdminDashboard;