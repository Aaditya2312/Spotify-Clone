import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { assets } from '../assets/assets';

const SearchComponent = ({ albumsData, songsData, assets }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                {/* <img className='w-6' src={assets.search_icon} alt='' /> */}
                <input
                    type='text'
                    placeholder='Search'
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={handleSearch}
                    className='font-bold bg-transparent border-none outline-none text-white placeholder-gray-500'
                />
            </div>
        </div>
    );
};

export default SearchComponent;
