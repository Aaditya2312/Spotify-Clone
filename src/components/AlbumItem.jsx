import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ albums }) => {
    const navigate = useNavigate()
    return (
        <>
            {albums.map(album => (
                <div key={album.id} onClick={() => navigate(`/album/${album.id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
                    <img src={album.image} alt={album.name} className="rounded w-full" />
                    <h2 className='font-bold mt-2 mb-1'>{album.name}</h2>
                    <p className='text-slate-200 text-sm'>{album.desc}</p>
                </div>
            ))}
        </>
    )
}

export default AlbumItem
