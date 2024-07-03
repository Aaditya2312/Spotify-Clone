import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData } from '../assets/assets'

const DisplayHome = () => {
    return (
        <div>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex flex-row overflow-x-auto'>
                    <AlbumItem albums={albumsData} />
                </div>
            </div>
        </div>
    )
}

export default DisplayHome
