import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(starValue) {
        setRating(starValue);
    }

    function handleMouseMove(starValue) {
        setHover(starValue);
    }

    function handleMouseLeave() {
        setHover(0);
    }

    return (
        <div>
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;

                return (
                    <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={handleMouseLeave}
                        size={100}
                        color={index <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                    />
                );
            })}
        </div>
    );
}