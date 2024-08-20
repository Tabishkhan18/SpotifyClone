import React from 'react'

const SongRound = ({ imageName, title,}) => {
    const imagePath = `images/${imageName}`;

    return (
        <div className="cursor-pointer hover:bg-neutral-800 songcard rounded-lg p-2 w-[11rem] md:w-1/6 md:h-[16rem] md:flex md:flex-col flex-none">
            <div className="image">
                <img className='size-40 rounded-full' src={imagePath} alt="Song Image" />
            </div>
            <h3 className="songtitle text-white mt-1 font-semibold text-md text-center">{title}</h3>
        </div>
    );
};

export default SongRound
