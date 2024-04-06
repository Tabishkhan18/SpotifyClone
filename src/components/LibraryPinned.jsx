import React from 'react'
import { BsFillPinAngleFill } from "react-icons/bs";

const LibraryPinned = ({ imageName, title, subTitle }) => {
    const imagePath = `./images/${imageName}`;
    return (
        <button className='cursor-pointer hover:bg-neutral-800 rounded-lg w-full'>
            <div className="librarypinnedcard flex  my-2 ">
                <img className='size-12 rounded-lg ms-2' src={imagePath} alt="Song Image" />
                <div className="librarypinnedtext flex flex-col items-start ms-4">
                    <h3 className="librarypinnedtitle text-white font-semibold text-md">{title}</h3>
                    <div className='pin flex pt-1'>
                    <BsFillPinAngleFill style={{ color: '#1ed45f' }} />
                    <h3 className="singername text-neutral-400 ps-2 font-semibold text-sm">{subTitle}</h3>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default LibraryPinned
