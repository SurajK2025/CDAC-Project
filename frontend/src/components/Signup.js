import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Signup = (props) => {
    return (
        <>
            <Header />

            <div id="signupContainer">
                <form action="" class="signup-form">
                    <p>Register Yourself</p>
                    <div class="row">
                        <div class="sub-row" id="wide">
                            <label for="">Full Name</label>
                            <input type="text" name="fname" placeholder="Alex Grey" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="sub-row">
                            <label for="">User Name</label>
                            <input type="text" name="uname" id="" placeholder="4 Letters" required />
                        </div>
                        <div class="sub-row">
                            <label for="">Password</label>
                            <input type="password" name="pass" id="" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="sub-row" id="wide">
                            <label for="">Email</label>
                            <input type="email" name="email" placeholder="alex@gmail.com" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="sub-row">
                            <label for="">Phone</label>
                            <input type="number" name="" id="" placeholder="+00 000 000 0000" required />
                        </div>
                        <div class="sub-row">
                            <label for="">Gender</label>
                            <div class="radio">
                                <input type="radio" name="gender" id="" />
                                <label for="">Male</label>
                                <input type="radio" name="gender" id="" />
                                <label for="">Female</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="sub-row">
                            <label for="">Date of birth</label>
                            <input type="date" name="dob" id="" required /></div>
                        <div class="sub-row">
                            <label for="">Course</label>
                            <div class="radio">
                                <input type="radio" name="course" id="" />
                                <label for="">Java</label>
                                <input type="radio" name="course" id="" />
                                <label for="">Python</label>
                            </div>
                        </div>
                    </div>
                    <div class="row submit">
                        <input type="submit" value="Register" id="submit" />
                    </div>
                    <Link to="/login" class="loginInsted">Login Instead?</Link>
                </form>
            </div>

            <Footer />

        </>
    );
}
export default Signup;