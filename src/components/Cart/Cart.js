import React from 'react';
import { App } from '../Toast/Toast';
import './Cart.css';


const Cart = (props) => {
    const { cart } = props;
    const { handleAddToBreak } = props;
    const { breakTime } = props;
    let total = 0;
    let age = 0;
    let quantity = 0;
    for (const activity of cart) {
        quantity = quantity + activity.quantity;
        total = total + activity.time * activity.quantity;
        age = age + activity.age;
    }
    return (
        <div className='cart'>
            <div className='user-info'>
                <img src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" alt="" />
                <div>
                    <h4>Sabiha Zeba</h4>
                    <p>Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='user-details'>
                <div>
                    <h3>55kg</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.4 ft</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>22yrs</h3>
                    <p>Age</p>
                </div>
            </div>
            <h3>Add a break</h3>
            <div className='break-time-container'>
                <button onClick={() => { handleAddToBreak(10) }}>10s</button>
                <button onClick={() => { handleAddToBreak(20) }}>20s</button>
                <button onClick={() => { handleAddToBreak(30) }}>30s</button>
                <button onClick={() => { handleAddToBreak(40) }}>40s</button>
                <button onClick={() => { handleAddToBreak(50) }}>50s</button>
            </div>
            <div className='exercise-details-container'>
                <h3>Exercise Details</h3>
                <p>Selected Activities: {quantity}</p>
                <p><span>Exercise time</span>{total}s</p>
                {/* fix break time */}
                <p><span>Break time</span>{breakTime[0]}s </p>
            </div>
            <App></App>
        </div >
    );
};


export default Cart;