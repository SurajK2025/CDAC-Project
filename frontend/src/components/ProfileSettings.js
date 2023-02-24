import { Link } from 'react-router-dom';

const ProfileSettings = (props) => {
    return (
        <div class="profileContainer">
            <div class="profileSidebar">
                <ol>
                    <li><Link to="/" class="links">Home</Link></li>
                    <li><Link to="/profile" class="links">Profile</Link></li>
                    <li><Link to="/profile/courses" class="links">Courses</Link></li>
                    <li><Link to="/profile/settings" class="links active">Settings</Link></li>
                </ol>
            </div>
            <div class="settingsContainer">
            </div>
        </div >
    );
}
export default ProfileSettings;