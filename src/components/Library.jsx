import React from 'react'


const Library = ({ imageName, title, subTitle }) => {
    const imagePath = `/images/${imageName}`;
    return (
        <button className='cursor-pointer hover:bg-neutral-800 rounded-lg w-full'>
            <div className="librarycard flex my-2">
                <img className='size-12 rounded-lg ms-2' src={imagePath} alt="Song Image" />
                <div className="librarytext flex flex-col items-start ms-4">
                    <h3 className="librarytitle text-white font-semibold text-md">{title}</h3>
                    <h3 className="singername text-neutral-400 pt-1 font-semibold text-sm">{subTitle}</h3>
                </div>
            </div>
        </button>
    )
}

export default Library
