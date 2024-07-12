import React from 'react';
import { useLocation } from 'react-router-dom';
import { albumsData, songsData, assets } from '../assets/assets';
import Navbar from './Navbar';

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query'); // Get the query from the URL

    const filteredAlbums = albumsData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredSongs = songsData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className='search-results-container'>
                <h1 className='font-bold text-2xl'>Search Results for "{searchQuery}"</h1>

                <h2 className='font-bold mt-4'>Albums</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {filteredAlbums.map(item => (
                        <div key={item.id} className='p-2'>
                            <img src={item.image} alt={item.name} className="rounded w-full" />
                            <h2 className='font-bold mt-2 mb-1'>{item.name}</h2>
                            <p className='text-slate-200 text-sm'>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className='font-bold mt-4'>Songs</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {filteredSongs.map(item => (
                        <div key={item.id} className='p-2'>
                            <img src={item.image} alt={item.name} className="rounded w-full" />
                            <h2 className='font-bold mt-2 mb-1'>{item.name}</h2>
                            <p className='text-slate-200 text-sm'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
