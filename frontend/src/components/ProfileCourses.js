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
            <div class="coursesMainDiv">
                <h3>Enrolled Courses</h3>
                <div class="courseCardContainer">
                    <div class="courseCard">
                        <h6>Course Title</h6>
                        <img src="" alt="" />
                        <button></button>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default ProfileCourses;