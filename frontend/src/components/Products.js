import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const Products = (props) => {
    let user = { id: "" };
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/bitcode/courses')
            .then(response => { setApiData(response.data) });
    }, []);

    let cartApi = {cartId:"", courseId:""}

    const addToCart = () => {
        console.log(cartApi);
        axios.post('http://localhost:8080/bitcode/cart/add', cartApi)
            .then(alert("Course added to cart successfully."));
    }

    var courseCards = apiData.map(obj => {
        return (
            <div class="product">
                <div class="image">
                    <img src={obj.imagePath} alt="" />
                </div>
                <div class="description">
                    <h3>{obj.courseName}</h3>
                    <p>{obj.author}</p>
                    <h2 class="price">{obj.price}</h2>
                    <Link to="/coursedetail" id={obj.id} onClick={() => localStorage.setItem("CourseId", obj.id)} class="buy">View</Link>
                    <a onClick={() => { user = JSON.parse(sessionStorage.getItem("user"));
                                        cartApi.cartId = user.id;
                                        cartApi.courseId = obj.id;
                                        addToCart(); }} class="add">Add to Cart</a>
                </div>
            </div>
        );
    });

    return (
        <>
            <div class="productSection0">
                <div class="slider">
                    <div class="slide-viewer">
                        <div class="slide-group">
                            <div class="slide slide-1">
                                <img src="Images/slide-1.jpg" alt="slide_01" />
                            </div>
                            <div class="slide slide-2">
                                <img src="Images/slide-2.jpg" alt="slide_02" />
                            </div>
                            <div class="slide slide-3">
                                <img src="Images/slide-3.png" alt="slide_03" />
                            </div>
                            <div class="slide slide-4">
                                <img src="Images/slide-4.jpg" alt="slide_04" />
                            </div>
                        </div>
                    </div>
                    <div class="slide-buttons"></div>
                </div>
            </div>

            <div class="productSection1">
                <div class="main_container">
                    <div class="vertical_sec">
                        <div class="horizontal_sec">
                            <div class="box" id="box1">
                                <h3>Data Science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                            <div class="box" id="box2">
                                <h3>Business</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                        </div>
                        <div class="horizontal_sec">
                            <div class="box" id="box3">
                                <h3>Computer Science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                            <div class="box" id="box4">
                                <h3>Information Tech</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                        </div>
                    </div>
                    <div class="vertical_sec">
                        <div class="box" id="box5">
                            <h3>Personal Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea! Cum
                                sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="productSection2">
                <div class="productGrid">
                    {courseCards}
                </div>
            </div>
        </>
    );
}
export default Products;