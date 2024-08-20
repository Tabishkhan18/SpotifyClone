import React from 'react'

const MobileLibraryCard = ({ imageName, title }) => {
    const imagePath = `images/${imageName}`;
    return (
        <button className='cursor-pointer bg-neutral-800 rounded-md w-full'>
            <div className="librarycard flex">
                <img className='size-14 rounded-s-md' src={imagePath} alt="Song Image" />
                <div className="librarytext flex flex-col items-start justify-center ms-2">
                    <h3 className="librarytitle text-white font-semibold text-sm">{title}</h3>
                </div>
            </div>
        </button>
    )
}

export default MobileLibraryCard
