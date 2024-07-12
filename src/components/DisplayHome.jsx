import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'
import SeacrhComponent from './SearchComponent'

const DisplayHome = () => {
    return (
        <div>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    <AlbumItem albums={albumsData} />
                </div>
            </div>
            {/* 
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Here is what was found</h1>
                <div className='flex overflow-auto'>
                    <SeacrhComponent albumsData={albumsData} songsData={songsData} />
                </div>
            </div> */}

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
                <div className='flex overflow-auto'>
                    <SongItem songs={songsData} />
                </div>
            </div>
        </div>
    )
}

export default DisplayHome
