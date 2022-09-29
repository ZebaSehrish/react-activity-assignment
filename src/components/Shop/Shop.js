import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Activity from '../Activity/Activity';
import './Shop.css';

const Shop = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedActivity = activities.find(activity => activity.id === id);
            if (addedActivity) {
                const quantity = storedCart[id];
                addedActivity.quantity = quantity;
                savedCart.push(addedActivity);
            }
        }
        setCart(savedCart);
    }, [activities])

    const handleAddToCart = (selectedActivity) => {
        let newCart = [];
        const exists = cart.find(activity => activity.id === selectedActivity.id);
        if (!exists) {
            selectedActivity.quantity = 1;
            newCart = [...cart, selectedActivity];
        }
        else {
            const rest = cart.filter(activity => activity.id !== selectedActivity.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedActivity.id);
    }

    const [breakTime, setBreakTime] = useState([]);
    const handleAddToBreak = (second) => {
        const newBreakTime = [second];
        setBreakTime(newBreakTime);
        console.log(newBreakTime);
        //console.log(breakTime);
    }


    return (
        <div className='container'>

            <div className='shop-container'>
                <div className='header-content'>
                    <div>
                        <h1>The Activity Club
                        </h1>
                        <p>Select Today's Exercise</p>
                    </div>
                    <div className="activities-container">
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                handleAddToCart={handleAddToCart}
                            ></Activity>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        breakTime={breakTime}
                        // newBreakTime={newBreakTime}
                        handleAddToBreak={handleAddToBreak}>
                    </Cart>
                </div>
            </div >
        </div>
        // <div className='container'>
        //     <div>
        //         <h2>The Activity Club
        //         </h2>
        //         <p>Select Today's Exercise</p>
        //     </div>
        //     <div className='shop-container'>

        //         <div className="products-container">
        //             {
        //                 products.map(product => <Product
        //                     key={product.id}
        //                     product={product}
        //                     handleAddToCart={handleAddToCart}
        //                 ></Product>)
        //             }
        //         </div>
        //         <div className="cart-container">
        //             <Cart cart={cart}></Cart>
        //         </div>
        //     </div >
        // </div>

    );
};

export default Shop;