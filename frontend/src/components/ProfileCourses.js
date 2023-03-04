import { Link } from 'react-router-dom';

const ProfileCourses = (props) => {
    return (
        <div class="profileContainer">
            <div class="profileSidebar">
                <ol>
                    <li><Link to="/" class="links">Home</Link></li>
                    <li><Link to="/profile" class="links">Profile</Link></li>
                    <li><Link to="/profile/courses" class="links active">Courses</Link></li>
                    <li><Link to="/profile/settings" class="links">Settings</Link></li>
                </ol>
            </div>
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
        </div >
    );
}
export default ProfileCourses;