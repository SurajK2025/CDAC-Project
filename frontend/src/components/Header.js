import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav>
            <div id="nav-container">
                <div class="nav-logo">
                    <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
                    <Link to="/"><p class="title">Title</p></Link>
                </div>
                <div class="nav-links">
                    <ul>
                        <li><Link to="/about" class="links">About</Link></li>
                        <li><Link to="/products" class="links">Products</Link></li>
                        <li><a href="#contact" class="links">Contact</a></li>
                        <li><Link to="/signup" class="links">Signup</Link></li>
                        <li><a href="#"><img id="moon-icon" src="Images/moon.svg" alt="dark-mode" height="18px" /></a></li>
                    </ul>
                </div>
                <button class="hamburger">
                    <div class="bar"></div>
                </button>
                <nav class="mobile-nav">
                    <ul>
                        <li><Link to="/about" class="links">About</Link></li>
                        <li><Link to="/products" class="links">Products</Link><a href="#" class="links"></a></li>
                        <li><a href="#" class="links">Contact</a></li>
                        <li><Link to="/signup" class="links">Signup</Link></li>
                        <li><a href="#" class="links" id="mobile-nav-dark-btn">Dark Mode</a></li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
}
export default Header;