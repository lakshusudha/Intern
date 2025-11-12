import React from'react';
import '../App.css'

const Cards=({src,title,description})=>{
    return(
        <div className='card1'>
            <div className='imgg'>
                <img src={src} alt={title}/>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
    );
};
export default Cards
