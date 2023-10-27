import React from 'react';
import './frontImage.css';
function FrontImage() {

    return (
        <div className='bg-title'>
            <p>Download High Quality Images by creators</p>
            <small>Over 2.4 million+ stock Images by our talented community</small>
            <label htmlFor="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input type="search" name="search" id="search" placeholder='Search high resolution Images, categories, wallpapers' />
            </label>
        </div>
    )
}

export default FrontImage;
