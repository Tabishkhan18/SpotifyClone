import React from 'react';

const Song = ({ imageName, title, subTitle }) => {
    const imagePath = `images/${imageName}`;

    return (
        <div className="cursor-pointer hover:bg-neutral-800 songcard rounded-lg p-2 w-[11rem] md:w-1/6 md:flex md:flex-col flex-none">
            <div className="image">
                <img className='size-40 rounded-lg' src={imagePath} alt="Song Image" />
            </div>
            <h3 className="songtitle text-white my-2 font-semibold text-md">{title}</h3>
            <h3 className="singername text-neutral-400 my-2 font-semibold text-sm">{subTitle}</h3>
        </div>
    );
};

export default Song;
