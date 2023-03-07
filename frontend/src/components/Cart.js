import { Link } from 'react-router-dom';

const Cart = (props) => {
    return (
        <div className="cartSection">
            <div className='cartContainer'>
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Quantity</th>
                    <th>Price Per Item</th>
                </tr>
                <tr>
                    <td>fbwiue</td>
                    <td>fbwiue</td>
                    <td>fbwiue</td>
                </tr>
            </table>
            <hr/>
            <div className='cartTotal'>
                <h1>Cart Total: {}</h1>
                <button>Place Order</button>
            </div>
            </div>
        </div >
    );
}
export default Cart;