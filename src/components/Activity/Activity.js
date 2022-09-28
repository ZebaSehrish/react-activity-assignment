import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Activity.css';

const Activity = ({ activity, handleAddToCart }) => {
    const { name, img, time } = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className="activity-info">
                <p className='activity-name'>{name}</p>
                <p><small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam optio magni incidunt, aliquid qui molestiae!</small></p>
                <p>For age: 20-25</p>
                {/* time= time */}
                <p>Time required:{time}s</p>
                {/* <p><small>Time required:{seller}</small></p> */}
                {/* <p><small>Ratings:{ratings} stars</small></p> */}
            </div>
            <button onClick={() => handleAddToCart(activity)} className='btn-cart'>
                <p className='btn-text'>Add to list</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Activity;