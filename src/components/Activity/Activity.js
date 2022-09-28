import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Activity.css';

const Activity = ({ activity, handleAddToCart }) => {
    const { name, img, time, description, age } = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className="activity-info">
                <p className='activity-name'>{name}</p>
                <p><small>{description}</small></p>
                <p>For age: {age}</p>
                <p>Time required:{time}s</p>
            </div>
            <button onClick={() => handleAddToCart(activity)} className='btn-cart'>
                <p className='btn-text'>Add to list</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Activity;