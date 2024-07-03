import React from 'react'


const SongItem = ({ songs }) => {
    return (
        <>
            {songs.map(song => (
                <div key={song.id} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
                    <img src={song.image} alt={song.name} className="rounded w-full" />
                    <h2 className='font-bold mt-2 mb-1'>{song.name}</h2>
                    <p className='text-slate-200 text-sm'>{song.desc}</p>
                </div>
            ))}
        </>
    )
}

export default SongItem
