import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = ({ rating }) => {
    return (
        <div className='book__ratings'>
            {new Array(Math.floor(rating)).fill(0).map((_, index) =>  
                <FontAwesomeIcon icon="star" key={index} />  //if its not an integer, and it had a decimal place, go to the next line
            )}

            {!Number.isInteger(rating) && (
                <FontAwesomeIcon icon="star-half-alt" />
            )}
        </div>
    );
}

export default Rating;
