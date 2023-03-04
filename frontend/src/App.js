import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Products from "./components/Products";
import ProfileEditInfo from "./components/ProfileEditInfo";
import ProfileCourses from "./components/ProfileCourses";
import ProfileSettings from "./components/ProfileSettings";
import CourseContent from "./components/CourseContent";
import CourseDetail from "./components/CourseDetail";

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/profile" element={<ProfileEditInfo />} />
        <Route exact path="/profile/courses" element={<ProfileCourses />} />
        <Route exact path="/profile/settings" element={<ProfileSettings />} />
        <Route exact path="/coursecontent" element={<CourseContent />} />
        <Route exact path="/coursedetail" element={<CourseDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;