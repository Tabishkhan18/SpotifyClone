import React from 'react'
import MobileLibraryCard from './MobileLibraryCard';

const MobileLibrary = () => {
    return (
        <div className='my-4 md:hidden flex flex-col'>
            <ul className="flex mx-4 my-1 gap-2">
                <MobileLibraryCard title="Liked Songs" imageName="likedsong.png" />
                <MobileLibraryCard title="Rockstar" imageName="rockstar.png" />

            </ul>
            <ul className="flex mx-4 my-1 gap-2">
                <MobileLibraryCard title="Mohit Chauhar" imageName="mohit.png" />
                <MobileLibraryCard title="Atif Aslam" imageName="atif.png" />
            </ul>
            <ul className="flex mx-4 my-1 gap-2">
                <MobileLibraryCard title="Aashiqui 2"  imageName="aashiqi2.png" />
                <MobileLibraryCard title="Daily Mix 6" imageName="mix6.png" />
            </ul>
        </div>
    )
}

export default MobileLibrary
